const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingScheme  = new Schema ({
    title: { 
        type : String,
        required: true,
    },
    descriptin: String,
    Image: {
        type: String,
        default: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) =>
             v ==="" 
        ? "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         : v ,
    },
    price: Number,
    locatin: String,
    country: String
});


const Listing = mongoose.model("Listing", listingScheme);

module.exports = Listing;
