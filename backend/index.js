const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require("multer");
const path = require("path");
const jwt= require("jsonwebtoken");

// Create a database connection
mongoose
    .connect('mongodb+srv://asthakumari605:qAVpA5gUAnGVZnhw@cluster0.ygdsx.mongodb.net/mydatabase')
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log('Error', error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

// Define a root route to test the server
app.get('/', (req, res) => {
    res.send('Hello, world! This is the root route.');
});

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload =multer({storage:storage})
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://loclhost:${PORT}/images/${req.file.filename}`
    })
})

const Product=mongoose.model("Product",{
    id: {
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type:String,
        required:true,

    },
    category: {
        type:String,
        required: true,
    },
    new_price: {
        type:Number,
        required:true,
    },
    old_price: {
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async(req,res)=>{
    const product=new Product({
        id:req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved")
    res.json({
        success:true,
        name:req.body.name,
    })
}
)
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
