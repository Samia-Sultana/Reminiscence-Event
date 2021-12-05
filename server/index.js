const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require("path");
const { MongoClient } = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
require('dotenv').config({ path: '../.env' });
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.u9qe8.mongodb.net/reminiscenceEvent?retryWrites=true&w=majority`;
console.log(process.env.DB_USER);
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/serviceImage',express.static('serviceImage'));

var storage  = multer.diskStorage({
    destination: function(request, file, callback){
      callback(null, 'serviceImage/')
    },
    filename: function(request, file, callback){
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  const serviceImage = multer({storage: storage});

const port = 4200;
app.get('/',(req,res) =>{
    res.send('hiiiii')
})

const client = new MongoClient(uri, { useUnifiedTopology: true}, { useNewUrlParser: true }, { connectTimeoutMS: 30000 }, { keepAlive: 1});
client.connect(err => {
    const services = client.db(`${process.env.DB_NAME}`).collection(`${process.env.DB_COLLECTION_1}`);
    const orders = client.db(`${process.env.DB_NAME}`).collection(`${process.env.DB_COLLECTION_2}`);
    const admins = client.db(`${process.env.DB_NAME}`).collection(`${process.env.DB_COLLECTION_3}`);
    const reviews = client.db(`${process.env.DB_NAME}`).collection(`${process.env.DB_COLLECTION_4}`);
    console.log('database connected');
  
    app.get('/getAllOrder', (req,res)=>{
      orders.find({})
      .toArray( (err,documents) =>{
          res.send(documents);
      })
        
   })

   app.get('/getAllService', (req,res)=>{
    services.find({})
    .toArray( (err,documents) =>{
       res.send(documents);
    })
      
 })

   app.get('/getReviews', (req,res)=>{
    reviews.find({}).limit(3)
    .toArray( (err,documents) =>{
        res.send(documents);
    })
      
 })
  
   app.post('/addService', serviceImage.single('photo'), (req,res)=>{
    const service = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        photo: 'http://localhost:4200/' + req.file.path
      };
      services.insertOne(service)
      .then( result =>{
        res.send(result.insertedId);
    })
    .catch(err =>{
        console.log(err.message);
    })

  })

  app.get('/getServices',(req,res)=>{
    services.find({}).limit(3)
    .toArray( (err,documents) =>{
        //console.log(documents)
        res.send(documents);
    })
  })

  app.get('/admin',(req,res)=>{
    admins.find({})
    .toArray( (err,documents) =>{
        //console.log(documents)
        res.send(documents);
    })
  })

  app.post('/addreview', (req,res)=>{
    const review = req.body;
    reviews.insertOne(review)
    .then( result =>{
        res.send(result.insertedId);
    })
    .catch(err =>{
        console.log(err.message);
    })
})

  app.post('/addBooking', (req,res)=>{
    const booking = req.body;
    orders.insertOne(booking)
    .then( result =>{
        res.send(result.insertedId);
    })
    .catch(err =>{
        console.log(err.message);
    })
})

    app.get('/getBookingsBy/:email',(req,res)=>{
        const email = req.params.email;
        orders.find({ 'clientEmail': email })
        .toArray((err,documents) =>{
            console.log(documents)
            res.send(documents);
        })
        
    })
  
  app.post('/editStatus/:orderId',(req,res)=>{
      const orderId = req.params.orderId;
      const order = req.body;
      console.log(orderId,order);
      orders.insertOne(order)
      .then( result =>{
        res.send(result);
    })
    .catch(err =>{
        console.log(err.message);
    })

    const result = orders.deleteOne({'_id': ObjectId(orderId)});
      
  })
  
    app.post('/createAdmin', (req,res)=>{
        const admin = req.body;
        console.log(admin);
        admins.insertOne(admin)
        .then( result =>{
            console.log(result);
        })
        .catch(err =>{
            console.log(err.message);
        })
    })

    app.get('/delete/:serviceId', async (req,res)=>{
        const result = services.deleteOne({'_id': ObjectId( req.params.serviceId)});
        res.send(await result);
      })
     
  });
  
  app.listen(port)