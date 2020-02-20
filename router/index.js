const router = require("express").Router()
const stdController = require("../controller/student")
const addrController = require("../controller/address")

router.post("/student", stdController.addStudent)
router.get("/student", stdController.getStudents)
router.get("/student/:id", stdController.getStudent)
router.put("/student/:id", stdController.updateStudent)
router.delete("/student/:id", stdController.deleteStudent)

router.post("/address", addrController.addAddress)
router.get("/address", addrController.getAddressList)
router.get("/address/:id", addrController.getAddress)
router.put("/address/:id", addrController.updateAddress)
router.delete("/address/:id", addrController.deleteAddress)

module.exports = router