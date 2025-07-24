const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/demo_node", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB Connected")
    } catch (error) {
        console.log('DB Connect Error =====>')
    }
}

module.exports = connectDB