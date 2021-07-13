const router = require("express").Router();
const TodoController = require("../controllers/TodoController");

router.get("/", TodoController.getAll);
router.get("/:id", TodoController.get);
router.post("/", TodoController.add);
router.put("/:id", TodoController.update);
router.delete("/:id", TodoController.delete);

module.exports = router;
