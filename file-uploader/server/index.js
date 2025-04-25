//index.js
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");


const port = 8080;

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use(cors());
app.use("/uploads", express.static(uploadDir)); // serve uploaded images

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

app.post("/image/upload", upload.single("image"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  // You would store file.filename (or full path) in your DB here
  console.log("Uploaded file:", file.filename);

  res.json({
    message: "Image uploaded successfully!",
    filename: file.filename,
    url: `http://localhost:${port}/uploads/${file.filename}`,
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

