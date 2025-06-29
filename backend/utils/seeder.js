const properties = require('../data/property.json');
const Property = require('../models/propertyModel');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database')

dotenv.config({path:'backend/config/config.env'});
connectDatabase();

const seedProperties = async ()=>{
    try{
        await Property.deleteMany();
        console.log('Property deleted!')
        await Property.insertMany(properties);
        console.log('All Property added!');
    }catch(error){
        console.log(error.message);
    }
    process.exit();
}

seedProperties();