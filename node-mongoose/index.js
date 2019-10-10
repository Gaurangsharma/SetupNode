const mongoose=require('mongoose');

const Dishes=require('./modals/dishes')

const url='mongodb://localhost:27017/Ready';
const connect=mongoose.connect(url);

connect.then((db) =>{
    console.log("Connected");
    Dishes.create({
        name:"Gaurang",
        description:"Hukum Ka ikka"
    })
    .then((dish)=>{
        console.log(dish);
        return Dishes.find({}).exec();
    })
    .then((dishes)=>{
        console.log(dishes);
        return Dishes.remove({});
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err);
    });


});