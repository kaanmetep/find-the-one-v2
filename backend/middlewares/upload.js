const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // MAX 5MB,
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("You can only upload image files!"));
    }
    cb(null, true);
  },
}).array("photos", 3); // Maxium 3 photos

module.exports = { upload };
