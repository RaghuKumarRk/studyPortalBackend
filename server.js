/**
 * Importing Modules
 */
const constants = require('./app/common/constants');
const Config = require('./config/env');
const mongoose = require('mongoose');
const Express = require('express');
const app = new Express();



/**
 * Creating Routes
 */
app.get("/",(req,res)=>{
    res.send(constants.stringConstants.SERVICE_STATUS_HTML)
});


/**
 * Starting Server
 */
app.listen(Config.PORT,()=>{
    console.log(`App is Running Locally on Port http://localhost:${Config.PORT}`)
})


/**
 * Establishing DataBase Connection
 */
const connect = ()=> {
    console.log('DB trying to connect on ' + new Date() + ' to url' + Config.DB)
    const options = {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    return mongoose.connect(Config.DB, options)
}
connect()