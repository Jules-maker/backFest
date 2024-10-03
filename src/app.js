const express = require('express')
const path = require("path");
const router = require("./routes");
const cors = require('cors');
require('dotenv').config();
require("./database");

const app = express();

app.use("/api/public", express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
