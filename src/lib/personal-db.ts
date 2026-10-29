const DB_NAME = 'medical-learning-hub-private';
const DB_VERSION = 1;
const STORE_NAMES = ['books', 'chapters', 'mindmaps', 'comparisons', 'literature', 'notes', 'practice', 'pico', 'saved', 'tables'] as const;

export type StoreName = typeof STORE_NAMES[number];

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      for (const name of STORE_NAMES) {
        if (!db.objectStoreNames.contains(name)) db.createObjectStore(name, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => {
      const db = request.result;
      const migrationKey = 'mlh-idb-migration-v1';
      if (localStorage.getItem(migrationKey)) { resolve(db); return; }
      try {
        const tx = db.transaction([...STORE_NAMES], 'readwrite');
        const addRows = (store: StoreName, rows: unknown[]) => {
          for (const row of rows) {
            if (row && typeof row === 'object' && typeof (row as { id?: unknown }).id === 'string') tx.objectStore(store).put(row);
          }
        };
        addRows('literature', JSON.parse(localStorage.getItem('mlh-literature-v1') || '[]'));
        addRows('practice', (JSON.parse(localStorage.getItem('mlh-demo-answers') || '[]') as Array<Record<string, unknown>>).map((row, index) => ({ ...row, id: 'legacy-answer-' + index + '-' + String(row.answeredAt || '') })));
        addRows('saved', JSON.parse(localStorage.getItem('mlh-saved-v1') || '[]'));
        const table = JSON.parse(localStorage.getItem('mlh-table-v1') || 'null') as { title?: string; data?: unknown[] } | null;
        if (table) tx.objectStore('tables').put({ id: 'legacy-table', ...table });
        const pico = JSON.parse(localStorage.getItem('mlh-pico-draft-v1') || 'null');
        if (pico) tx.objectStore('pico').put({ id: 'legacy-pico', ...pico });
        tx.oncomplete = () => { localStorage.setItem(migrationKey, 'done'); resolve(db); };
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error);
      } catch (error) { reject(error); }
    };
    request.onerror = () => reject(request.error);
  });
}

export async function allRecords<T = Record<string, unknown>>(store: StoreName): Promise<T[]> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const request = tx.objectStore(store).getAll();
    request.onsuccess = () => resolve(request.result as T[]);
    request.onerror = () => reject(request.error);
    tx.oncomplete = () => db.close();
  });
}

export async function saveRecord(store: StoreName, value: { id: string; [key: string]: unknown }): Promise<void> {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).put(value);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
  db.close();
}

export async function deleteRecord(store: StoreName, id: string): Promise<void> {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
  db.close();
}

export async function clearStore(store: StoreName): Promise<void> {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
  db.close();
}

export async function exportWorkspace(): Promise<string> {
  const records: Record<string, unknown[]> = {};
  for (const name of STORE_NAMES) records[name] = await allRecords(name);
  return JSON.stringify({ format: 'medical-learning-hub-workspace', version: 1, exportedAt: new Date().toISOString(), records }, null, 2);
}

export async function importWorkspace(json: string): Promise<void> {
  const payload = JSON.parse(json) as { format?: string; version?: number; records?: Record<string, unknown[]> };
  if (payload.format !== 'medical-learning-hub-workspace' || payload.version !== 1 || !payload.records) throw new Error('不支援的備份格式。');
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction([...STORE_NAMES], 'readwrite');
    for (const name of STORE_NAMES) {
      const rows = payload.records?.[name] ?? [];
      if (!Array.isArray(rows)) { tx.abort(); reject(new Error(name + ' 資料格式錯誤。')); return; }
      for (const row of rows) {
        if (!row || typeof row !== 'object' || typeof (row as { id?: unknown }).id !== 'string') { tx.abort(); reject(new Error(name + ' 有資料缺少 ID。')); return; }
        tx.objectStore(name).put(row);
      }
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
  db.close();
}

export const stores = STORE_NAMES;
