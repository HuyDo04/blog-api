require("module-alias/register");
require("dotenv").config();

const express = require("express");
const app = express();
const sequelize = require("@/config/database");
const router = require("@/routes")
const cors = require("cors");
const handlePagination = require("@/middleware/handlePagination");
const handleResponse = require("@/middleware/handleResponse")
app.use(express.json());

app.use(handleResponse)
app.use(cors())
app.use(handlePagination)

async function checkConnectDB(req, res) {
  try {
    await sequelize.authenticate();
    res.success(200,{
      success: true,
      message: "Connect DB successfully"
    });
  } catch (error) {
    res.error(500, {
      success: false,
      name: error.name,
      message: error.message,
      stack: error.stack
    });
  }
}
app.get("/check-db", checkConnectDB);

app.use("/api/v1", router)

app.listen(3000, () => {
    console.log("App running on  port 3000")
})