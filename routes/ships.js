const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const shipController = require("../controllers/shipController");
const existeBarco = require("../middlewares/existeBarco");


//CRUD
// OBTENER DATOS
router.get("/", shipController.getShips);
router.get("/buscar", shipController.getShipByName);
router.get("/:id", shipController.getShipById);

// CREAR 
router.post(
  "/registro", existeBarco,
  
  [
    check("shipname")
      .not()
      .isEmpty()
      .withMessage("El nombre del barco es obligatorio"),

    check("price")
      .not()
      .isEmpty()
      .withMessage("El precio es obligatorio")
     
  ],
  shipController.postShip
);

// ACTUALIZAR 
router.put(
  "/actualizar/:id",
  [
    check("shipname")
      .not()
      .isEmpty()
      .withMessage("El nombre del barco es obligatorio"),
      check("price")
      .not()
      .isEmpty()
      .withMessage("El precio es obligatorio")
  ],
  shipController.updateShip
);

//BORRAR 
router.delete("/borrar/:id", shipController.deleteShip);

module.exports = router;
