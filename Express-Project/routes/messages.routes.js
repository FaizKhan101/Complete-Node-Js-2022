const express = require("express")

const messagesController = require("../controllers/messages.controller");

const router = express.Router()


router.get("/", messagesController.getMessages);

router.post("/", messagesController.postMessage);

module.exports = router
