const express = require("express");
const axios = require("axios");
const highlineRouter = require("./highline");
const messageRouter = require("./message");
const profileRouter = require("./profile");
const cardsRouter = require("./cards");
const requestRouter = require("./request");
//create router
const router = express.Router();

router.use("/highline", highlineRouter);
router.use("/message", messageRouter);
router.use("/profile", profileRouter);
router.use("/cards", cardsRouter);
router.use("/request", requestRouter);

// /api/request    get request
// http://localhost/api/request
// http://localhost:8000/request
router.get("/request", async function (req, res) {
  try {
    const url = "http://localhost:8000/request";
    const request = await axios.get(url);
    console.log("request", request);
    res.status(200).json({
      msg: "get request succeed",
      data: request.data,
    });
  } catch (error) {
    res.status(500).send("server error");
  }
});

module.exports = router;
