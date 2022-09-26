const router = require("express").Router();
const GetItems=require("../Controller/GetItems");
const GetItem=require("../Controller/GetItem");
const PostItem=require("../Controller/PostItem");
const PutItem=require("../Controller/PutItem");
const DeleteItem=require("../Controller/DeleteItem");

router.get("/",GetItems);
router.get("/:id",GetItem);
router.post("/",PostItem);
router.put("/:id",PutItem);
router.delete("/:id",DeleteItem);

module.exports = router;
