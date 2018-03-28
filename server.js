//Dependencies
const express         = require ( 'express' );
const mongoose        = require ( 'mongoose' );
const app             = express();
const db              = mongoose.connection;

//Environment Variables
const mongoURI        = process.env.MONGODB_URI || 'mongodb://localhost/karolin_waters_app';
const PORT            = process.env.PORT || 3003;


// Connect to Mongo
mongoose.connect ( mongoURI );

// Error / success
db.on( 'error', ( err ) => console.log( err.message + ' is Mongod not running?' ));
db.on( 'connected', () => console.log( 'mongo connected: ', mongoURI ));
db.on( 'disconnected', () => console.log( 'mongo disconnected' ));

// Open the connection to mongo
db.on( 'open' , ()=>{});

// Middleware
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON

// use public directory
app.use( express.static( 'public' ));


//Routes
const waterController = require( './controllers/waterController.js' );
app.use ( '/waters' , waterController );

app.listen( PORT , () =>{
  console.log(   '💧💦🚰⛲️🚰💦💧' , 'water pouring on port' , PORT);
});
