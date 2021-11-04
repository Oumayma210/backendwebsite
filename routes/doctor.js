//require express
const express = require("express");
const doctor = require("../controllers/doctor");
const router = express.Router();
const isAuthdoc = require("../middleware/authdoc");
const { validation, loginValidation } = require("../middleware/validator");

//doctor
// add doctor
router.post("/add_doctor", doctor.addAdmin);
//signin
router.post("/signin", loginValidation(), validation, doctor.signin);
//current
router.get("/current", isAuthdoc, (req, res) => {
    res.send(req.doctor);
});
//doctor--patient
router.get("/", doctor.getAllPatient);
router.get("/:id", doctor.getPatient);
router.post("/add", doctor.addPatient);
router.delete("/:id", doctor.deletePatient);
//doctor--rendezvous
router.get("/getallrv", doctor.getAllRendezvous);
router.put("/:id", doctor.editRendez);
router.post("/addrdv", doctor.addrdv);
module.exports = router;
