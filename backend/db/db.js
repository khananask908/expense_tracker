const mongoos = require('mongoose');
const connectDB = async()=>{
    try {
        await mongoos.connect("mongodb+srv://khananask908:<anash123>@cluster0.fssco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
            console.log("Connected!!!")
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = connectDB