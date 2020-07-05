const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareaController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//Crea una Tarea
// api/tareas
router.post(
  "/",
  auth,
  [check("nombre", "El Nombre es obligatorio").not().isEmpty()],
  tareaController.crearTarea
);

//Obtener tareas por proyecto
router.get("/", auth, tareaController.obtenerTareas);

//Actualizar Tareas
router.put("/:id", auth, tareaController.actualizarTarea);

//Eliminar una Tarea
router.delete("/:id", auth, tareaController.eliminarTarea);
module.exports = router;
