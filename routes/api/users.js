const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Enter Valid Email").isEmail(),
    check("password", "Please Enter a Password with 6 or more Chars").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ errors: [{ msg: "Already User exists" }] });
      }
      const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });

      user = new User({ name, email, avatar, password });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();
      res.send("user registered");
    } catch (err) {
      console.log(err);

      res.status(500).send("ServerError");
    }
  }
);

module.exports = router;
