import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import {MediaItem} from '../models';

const tableName = 'mediaData';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'media-data.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        value TEXT NOT NULL
    );`;

  await db.executeSql(query);
};

export const getMediaItems = async (db: SQLiteDatabase): Promise<MediaItem[]> => {
  try {
    const mediaItems: MediaItem[] = [];
    const results = await db.executeSql(`SELECT rowid as id,value FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        mediaItems.push(result.rows.item(index))
      }
    });
    return mediaItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get mediaItems !!!');
  }
};

export const saveMediaItems = async (db: SQLiteDatabase, mediaItems: MediaItem[]) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
    mediaItems.map(i => `(${i.id}, '${i.value}')`).join(',');

  return db.executeSql(insertQuery);
};

export const deleteMediaItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};