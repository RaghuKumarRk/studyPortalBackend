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
//----------------------------LANDING-PAGE------------------------------------//
app.get("/",(res)=> res.send(constants.stringConstants.SERVICE_STATUS_HTML));
//-----------------------------USER-ROUTES-------------------------------------//
app.put("/user/update", new userModule().updateUser);
app.post("/user/create", new userModule().createUser);
app.get("/user/list", new userModule().getUsers);
app.delete("/user/delete", new userModule().deleteUser);
app.get('/user/details', new userModule().getUserDetails);
//-----------------------------NOTES-ROUTES-------------------------------------//
app.put("/notes/update", new notesModule().updateNotes);
app.post("/notes/create", new notesModule().createNotes);
app.get("/notes/list", new notesModule().getNotesList);
app.delete("/notes/delete", new notesModule().deleteNotes);
app.get("/notes/details", new notesModule().getNotesDetails);




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