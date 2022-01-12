const express = require("express");
const path = require("path");

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const cssFilePath = path.join(
	__dirname,
	"view",
	"public",
	"index.html",
);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
	const filePath = path.join(
		__dirname,
		"view",
		"index.html",
	);
	res.sendFile(filePath);
});

app.get("/places", function (req, res) {
	const filePath = path.join(
		__dirname,
		"view",
		"places.html",
	);
	res.sendFile(filePath);
});

app.post("/recommend", function (req, res) {});

app.listen(3000);
