const mongoose = require('mongoose');
require("dotenv").config();
console.log('MONGO_URI---.>', process.env.MONGO_URI)
mongoose.set('strictQuery', false);

const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
        .then(() => {
            console.log('Connected to Mongo Successfully')
        })
        .catch(console.error())
}

module.exports = connectToMongo;
