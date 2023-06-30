const { Router } = require("express");
const { check } = require("express-validator");
const usuariosController = require("../controllers/usuarios.controller");
const checkFields = require("../middlewares/validateFields");

const router = Router();
router.get("/", usuariosController.getUsuarios); //GET USUARIOS

router.post(
  "/",
  [
    check("email").not().isEmpty(),
    check("password").not().isEmpty(),
    checkFields,
  ],
  usuariosController.createUsuario
); //POST USUARIOS
router.post(
  "/login",
  [
    check("email").not().isEmpty(),
    check("password").not().isEmpty(),
    checkFields,
  ],
  usuariosController.login
);

module.exports = router;
