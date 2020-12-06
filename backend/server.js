import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/f2c',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.get("/",(req,res)=>{
    res.send("Sever OK");
});

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

app.use((err, req, res, next)=>{
    res.status(500).send({message:err.message});
});


const port = process.env.port || 5000
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
});