const {Router} = require("express");
const {gettodos,settodos,updatetodo,deletetodo} =require("../controller/todocontroller")
const router= Router();


router.get("/get",gettodos);
router.post("/save",settodos);
router.put("/update/:id",updatetodo);
router.delete("/delete/:id",deletetodo);

module.exports =router;