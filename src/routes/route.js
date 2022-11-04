const express = require('express');
const router = express.Router();
const RegisterModel = require('../db/registerdb.js')
const LogicController = require('../logic_db/logic.js')
const middleware = require('../middleware/auth.js')


router.post('/createUser', LogicController.createUser)
router.get('/getUser', LogicController.getUser)
router.post('/logInUser',  LogicController.logInUser)
router.get('/createAuthorization/:userId',middleware.idValidation,middleware.headerValidation, middleware.tokenValidation,LogicController.createAuthorization)
router.put('/updateMobile/:userId',middleware.idValidation,middleware.headerValidation, middleware.tokenValidation, LogicController.updateMobile)
router.delete('/markDirty/:userId',middleware.idValidation,middleware.headerValidation, middleware.tokenValidation, LogicController.markDirty)
module.exports = router;

