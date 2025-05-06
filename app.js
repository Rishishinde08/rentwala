const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Listing = require("./model/listing.js")

main()
 .then(() => {
        console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main () {
    await mongoose.connect('mongodb://127.0.0.1:27017/rentwala');
}


app.get("/" , (req, res) => {
    res.send("this is a Root");
});



app.get("/testlisting" , async (req, res) => {


    let sampleListing = new Listing({
        title: "my new home",
        descriptin: "by the beach",
        price: 2000,
        locatin: "maharashtra ",
        country: "India",
    });
    await sampleListing.save();
    console.log("sample was save");
    res.send("sucessful");
})


app.listen(8080, () => {
    console.log("server listing on port 8080 ")
});



