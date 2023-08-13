const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const { handleErrors } = require("./middleware/errorMiddleware");
//create web server
const app = express();

app.use(cors());

app.use(express.json());

app.use(router);
// use error middleware at the end
app.use(handleErrors);
const PORT = 80;
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:80");
});

// app.use(express.json())// parse JSON requests
//app.use(express.urlencoded({extended:true}))//parse URL-encoded requests
//app.use(cors())
//app.use(authMiddleware);// custom authentication middleware
//app.use(routes)// route handlers
//app.use(handleErrors)// error handling middleware (at the end)
