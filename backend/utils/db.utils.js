const mongoose = require('mongoose');

const options = {
    autoIndex: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.set('strictQuery' , true)

async function connect(){
    const dbUrl = process.env.DATABASE;

    try{
        if(mongoose.connection.readyState != 1){
            await mongoose.connect(dbUrl , options);
            console.log("Database connect successfully")
        }else
        console.log("Database already connected");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = {connect};