const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const Listing = require("./model/listing.js")

// const Listing = require("./views/listings/")
main()
 .then(() => {
        console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});



// async funtion hai ye 

async function main () {
    await mongoose.connect('mongodb://127.0.0.1:27017/rentwala');
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // if folder is "views"


app.get("/" , (req, res) => {
    res.send("this is a Root");
});



app.get("/listings", async (req ,res) => {

    const allListings = await Listing.find({});
    // res.render("/views/index", { allListings });
    // console.log("Rendering index view with data:", allListings);
res.render("index", { allListings });




});




// app.get("/testlisting" , async (req, res) => {


//     let sampleListing = new Listing({
//         title: "my new home",
//         descriptin: "by the beach",
//         price: 2000,
//         locatin: "maharashtra ",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log("sample was save");
//     res.send("sucessful");
// })


app.listen(8080, () => {
    console.log("server listing on port 8080 ")
});



