const { MongoClient } = require('mongodb'); // To Connect to MongoDB
const database = 'ebay';
const databaseURL = process.env.MONGDB_URL || "mongodb://localhost:27017";

/**
 * Gets Data from Database
 * @param {String} collectionString
 * @param {Object} options
 * @param {Number} limit
 * @param {Number} skipIndex
 * @returns
 */
async function get (collectionString, options = {}, limit = 99999, skipIndex = 0) {
  const client = await MongoClient.connect(databaseURL)
    .catch(err => { console.log(err); });

  if (!client) {
    return;
  }

  return new Promise((resolve, reject) => {
    const db = client.db(database);
    const collection = db.collection(collectionString);
    collection.find(options).limit(limit).skip(skipIndex).toArray((error, result) => {
      client.close();
      if (error) {
        reject(new Error(error.message));
      } else {
        resolve(result);
      }
    });
  });
}

/**
 * Inserts Data to Database
 * @param {String} collectionString
 * @param {Object} data
 * @returns
 */
async function post (collectionString, data) {
  const client = await MongoClient.connect(databaseURL)
    .catch(err => { console.log(err); });

  if (!client) {
    return;
  }

  return new Promise((resolve, reject) => {
    const db = client.db(database);
    const collection = db.collection(collectionString);
    try {
      collection.insertOne(data);
      resolve();
    } catch (error) {
      reject(new Error(error));
    }
  });
}

/**
 * Updates Data from Database
 * @param {String} collectionString
 * @param {Object} search
 * @param {Object} data
 * @param {String} method
 * @returns
 */
async function put (collectionString, search, data, method) {
  const client = await MongoClient.connect(databaseURL)
    .catch(err => { console.log(err); });

  if (!client) {
    return;
  }

  return new Promise((resolve, reject) => {
    const db = client.db(database);
    const collection = db.collection(collectionString);
    try {
      collection.updateOne(search, { [method ? method : '$set']: data });
      resolve();
    } catch (error) {
      reject(new Error(error));
    }
  });
}

/**
 * DEletes Data from Database
 * @param {String} collectionString
 * @param {Object} search
 * @param {Object} data
 * @returns
 */
async function deleteFromDB (collectionString, search) {
  const client = await MongoClient.connect(databaseURL)
    .catch(err => { console.log(err); });

  if (!client) {
    return;
  }

  return new Promise((resolve, reject) => {
    const db = client.db(database);
    const collection = db.collection(collectionString);

    try {
      collection.deleteMany(search);
      resolve();
    } catch (error) {
      reject(new Error(error.message));
    }
  });
}

module.exports = {
  get,
  post,
  put,
  deleteFromDB
};
