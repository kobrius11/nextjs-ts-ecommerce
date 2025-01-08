import { MongoClient, Db, ServerApiVersion } from "mongodb";
import { DB_NAME, DB_URI } from "@/lib/settings";

let cachedClient: null | MongoClient = null;
let cachedDb: null | Db = null;

export async function connectToDb() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(DB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();

  cachedClient = client;
  cachedDb = client.db(DB_NAME);

  return { client, db: client.db(DB_NAME) };
}
