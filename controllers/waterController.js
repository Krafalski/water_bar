const express           = require ( 'express' );
const waters          = express.Router();

const Water          = require ( '../models/waters.js' );


// INDEX
waters.get ( '/' , async ( req , res ) => {
  try {
    const waters = await Water.find();
    res.status( 200 ).json( waters );
  } catch ( error ) {
    res.status( 400 ).json({error : err.message});
  }
});

//CREATE
waters.post ( '/' , async ( req , res ) => {
  try {
    const newWater = await Water.create( req.body );
    res.status( 200 ).json( newWater );
  } catch ( error ) {
    res.status( 400 ).json({error : error.message});
  }
});

//DELETE
waters.delete ( '/:id' , async ( req , res ) => {
  try {
    const deleteWater = await Water.findByIdAndRemove( req.params.id );
    res.status( 200 ).json( deleteWater );
  } catch ( error ) {
    res.status( 400 ).json({error : error.message});
  }
});

//EDIT
waters.put ( '/:id' , async ( req , res ) => {
  try {
    const updateWater = await Water.findByIdAndUpdate( req.params.id, req.body, { new : true } );
    res.status( 200 ).json( updateWater );
  } catch ( error ) {
    res.status( 400 ).json({error : error.message});
  }
});

module.exports           = waters;
