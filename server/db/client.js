const {MongoClient} = require('mongodb')
let dbConnection;

module.exports = {
    connectToDb : (cb) => {
        MongoClient.connect('mongodb://localhost:27017/onlineQuiz')
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
        })
    },
    getDb: () => dbConnection
}