const express = require("express");
const router = express.Router();
const { urlController } = require("../controllers");

router.route("/").get(urlController.getUrls);
router.route("/:name").get(urlController.getUrlByName);
router.route("/insert").post(urlController.insertUrl);
router.route("/delete").delete(urlController.deleteUrl);
router.route("/update").put(urlController.updateUrl);


module.exports = router;