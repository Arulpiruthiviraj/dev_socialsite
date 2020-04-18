const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

router.get("/me", auth, async (req, res) => {
  console.log(req.user);
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);
    console.log(profile);

    if (!profile) {
      return res.status(400).json({ message: "there is no profile" });
    }
    res.json(profile);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }

  res.send("profile route");
});

router.post(`/`, [
  auth,
  [
    check("status", "status is required").not().isEmpty(),
    check("skills", "skills is required").not().isEmpty,
  ],
  async (req, res) => {
    const errors = validationResult(req);
  },
]);

module.exports = router;
