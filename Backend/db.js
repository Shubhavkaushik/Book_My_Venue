const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
const express = require('express');

const url="****";
const mongoConnect = async () => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, result) => {
        if (err) console.log("---", err);
        else {
            console.log("connected");
            const fd = await mongoose.connection.collection("managerdbs");
            fd.find({}).toArray(async function (err, data) {
                const fc = await mongoose.connection.collection("State_Category");
                fc.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.banquet_item = data;
                        global.StateCategories = catData;
                     //   console.log(banquet_item,foodCategories);
                    }
                });
                
            });
        }
    }

    )
}

module.exports.mongoConnect = mongoConnect;


