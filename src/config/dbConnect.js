import mongoose from "mongoose";

async function conectaBancoDeDados(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    
    return mongoose.connection;
};

export default conectaBancoDeDados;

