import { MongoClient, Db } from "mongodb";
import "dotenv/config";

export type MongoDB = Db;
export type ConnectCallback = (db: MongoDB) => void;

export const connectAndUseDB = async (
  callback: ConnectCallback,
  dbName: string,
  mongoUrl: string = `mongodb://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@localhost:27017`
) => {
  let connection;

  try {
    connection = await MongoClient.connect(mongoUrl); // 몽고 db와 연결
    const db: Db = connection.db(dbName); // use dbName와 같은 구문
    callback(db); // 얻어진 db 객체를 callback 함수의 매개변수로 하여 호출
  } catch (e) {
    if (e instanceof Error) {
      console.log("ERROR! ", e.message);
    }
  }
};
