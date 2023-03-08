const Ship = require("../models/Ship");

const existeBarco = async (req, res, next) => {
 
  const ship = await Ship.findOne({ shipname: req.body.shipname })
 
  if (ship) {
    res.status(400).json({ msg: "El barco ya existe en nuestros registros" })
  } else {
    next();
  }
}

module.exports = existeBarco;
