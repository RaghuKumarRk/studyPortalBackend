/**
 * Importing Modules
 */
const notesModule = require('./app/modules/notesModule');
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
//-----------------------------USER ROUTES-------------------------------------//
app.put("/update-user", new userModule().updateUser);
app.post("/create-user", new userModule().createUser);
app.get("/get-users-list", new userModule().getUsers);
app.delete("/delete-user", new userModule().deleteUser);
//-----------------------------NOTES ROUTES-------------------------------------//
app.put("/update-notes", new notesModule().updateNotes);
app.post("/create-notes", new notesModule().createNotes);
app.get("/get-notes-list", new notesModule().getNotesList);
app.delete("/delete-notes", new notesModule().deleteNotes);




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