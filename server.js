/**
 * Importing Modules
 */
const userModule = require('./app/modules/userModule');
const constants = require('./app/common/constants');
const Config = require('./config/env');
const mongoose = require('mongoose');
const Express = require('express');
const app = new Express();

/**
 * Express use
 */
app.use(Express.json());


/**
 * Creating Routes
 */
app.get("/",(req,res)=> res.send(constants.stringConstants.SERVICE_STATUS_HTML));
app.get("/get-users", new userModule().getUsers);
app.post("/create-user", new userModule().createUser);
// app.put("/update-user", new userModule().updateUser);
// app.delete("/delete-user", new userModule().deleteUser);


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
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    return mongoose.connect(Config.DB, options)
}
connect()