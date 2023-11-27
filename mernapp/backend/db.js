const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://kumarbrijesh0412:0zx5vTIJ5JJGeSVy@mernclustor.kutukve.mongodb.net/zatack?retryWrites=true&w=majority'

const mongoDB = async (callback) => {

   await mongoose.connect(mongoURI)
    .then(async ()=>{
        console.log("connected");
        // console.log(data);
        const foodCollection = await mongoose.connection.db.collection("food_items");
        // console.log(foodCollection);
        // console.log(foodCollection.find({}));
        foodCollection.find({}).toArray(async (err,data)=>{
            console.log(err)
            const categoryCollection = await mongoose.connection.db.collection("food_category")
            categoryCollection.find({}).toArray(async (err,catData)=>{
                callback(err,data,catData);
            })
        })
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = mongoDB;



