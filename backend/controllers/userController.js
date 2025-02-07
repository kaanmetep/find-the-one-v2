const User = require("../models/userModel");
const { uploadToCloudinary } = require("../cloudinary");
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }
    const { firstName, genderInterest, imageDeleted } = req.body;
    if (firstName) user.firstName = firstName;
    if (genderInterest) user.personelDetails.genderInterest = genderInterest;
    if (imageDeleted) user.photos.pop();
    if (req.files.length > 0) {
      const files = req.files;
      const imageUrls = await Promise.all(
        files.map((file) => uploadToCloudinary(file.buffer))
      );
      req.files.forEach((file, index) => {
        const photoIndex = parseInt(file.originalname) - 1; // '1', '2', '3' -> 0, 1, 2

        if (photoIndex >= 0 && photoIndex < user.photos.length) {
          user.photos[photoIndex] = imageUrls[index];
        }
        if (photoIndex === user.photos.length) {
          // this means user adding a BRAND NEW third photo
          user.photos.push(imageUrls[0]);
        }
      });
    }
    await user.save();
    res.status(200).json({ message: "User updated successfully!", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const { password } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(401).json({ result: "User not found!" });
    }
    if (!password || !(await user.correctPassword(password))) {
      return res.status(401).json({ result: "Incorrect password!" });
    }
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ result: "User deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      return res.status(200).json({ result: users });
    }
    return res.status(401).json({ result: "Users couldnt fetched!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
