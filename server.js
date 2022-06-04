/**
 * Importing Modules
 */
const constants = require('./app/common/constants');
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
const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`App is Running Locally on Port http://localhost:${port}`)
})


/**
 * Establishing DataBase Connection
 */
const DB = "mongodb+srv://raghuKumar2662:2662@raghu-works.jrqtw.mongodb.net/studyPortal?retryWrites=true&w=majority"
const connect = ()=> {
    console.log('DB trying to connect on ' + new Date() + ' to url' + DB)
    const options = {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    return mongoose.connect(DB, options)
}
connect()