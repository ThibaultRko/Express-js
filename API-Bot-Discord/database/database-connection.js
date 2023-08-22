const { MongoClient } = require('mongodb');

exports.connectToDatabase = async () => {
    const client = new MongoClient('mongodb://root:test123*@localhost:27017');
    await client.connect();
    return client.db('bot');
}