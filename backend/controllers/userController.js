const User = require("../models/userModel");
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
    const { firstName, genderInterest } = req.body;
    if (firstName) user.firstName = firstName;
    if (genderInterest) user.personelDetails.genderInterest = genderInterest;

    await user.save();
    res.status(200).json({ message: "User updated successfully!", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
