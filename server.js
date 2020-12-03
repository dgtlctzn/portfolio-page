const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static("client/build"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
    res.json({
        success: true
    })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
})

app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`)
})