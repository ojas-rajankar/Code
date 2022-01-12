const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid")

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	const filePath = path.join(__dirname, "blogs.json");

	const fileData = fs.readFileSync(filePath);
	const storedBlogs = JSON.parse(fileData);

	res.render("index", { blogs: storedBlogs });
});

app.post("/", (req, res) => {
	const filePath = path.join(__dirname, "blogs.json");
	const fileData = fs.readFileSync(filePath);
	const storedBlogs = JSON.parse(fileData);
    req.body.id = uuid.v4()
	storedBlogs.push(req.body);
	fs.writeFileSync(filePath, JSON.stringify(storedBlogs));
	res.redirect("/");
});

app.listen(3001);
