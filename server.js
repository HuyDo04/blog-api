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

async function checkConnectDB() {
    try {
      await sequelize.authenticate();
      console.log("Connect DB successfully");
    } catch (error) {
      console.log("Connect DB fail");
    }
}

checkConnectDB();

app.use(cors())

app.use(handleResponse)

app.use(handlePagination)

app.use("/api/v1", router)

app.listen(3000, () => {
    console.log("App running on  port 3000")
})