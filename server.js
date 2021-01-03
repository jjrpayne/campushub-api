require("dotenv").config();
const express = require("express");

const app = express();

//----------------------- routes -------------------------
app.get("/", (req, res) => {
	return res.send("Hello Campushub! 🌝");
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
	console.log(`server is up and listening on port ${port}`);
});
