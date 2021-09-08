var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/register", function (req, res, next) {
  res.render("register");
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.post("/register",
  [
    check("email", "กรุณาป้อนอีเมล").isEmail(),
    check("name", "กรุณาป้อนชื่อของท่าน").not().isEmpty(),
    check("password", "กรุณาป้อนรหัสผ่าน").not().isEmpty(),
  ],
  function (req, res, next) {
    const result = validationResult(req);
    var errors = result.errors;

    //Validation Data
    if (!result.isEmpty()) {
      //Return error to view
      res.render("register", { 
        errors: errors 
      });
    }else{
      //Insert Data
    }
  }
);

module.exports = router;
