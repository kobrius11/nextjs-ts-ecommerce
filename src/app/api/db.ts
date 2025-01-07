import { MongoClient, Db, ServerApiVersion } from "mongodb";
import { uri } from "../../../variables";

let cachedClient: null | MongoClient = null;
let cachedDb: null | Db = null;


export async function connectToDb() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb }
    }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

await client.connect();

cachedClient = client;
cachedDb = client.db('nextjs-ecommerce');

return { client, db: client.db('nextjs-ecommerce') }

}

