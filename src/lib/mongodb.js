/**
 * MongoDB connection helper
 * Reuses the connection in development to avoid creating too many connections.
 */
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let clientPromise;

if (uri) {
  if (process.env.NODE_ENV === "development") {
    // In development, use a global variable to preserve the connection across HMR reloads.
    if (!global._mongoClientPromise) {
      const client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    // In production, create a new connection for each function instance.
    const client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
} else {
  // In environments where MONGODB_URI is not set (such as build time),
  // return a thenable that rejects only when awaited at request time.
  clientPromise = {
    then(onFulfilled, onRejected) {
      return Promise.reject(
        new Error("Please add MONGODB_URI to your environment variables")
      ).then(onFulfilled, onRejected);
    },
    catch(onRejected) {
      return Promise.reject(
        new Error("Please add MONGODB_URI to your environment variables")
      ).catch(onRejected);
    },
  };
}

export default clientPromise;
