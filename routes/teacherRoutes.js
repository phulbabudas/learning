const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');
const { validateTeacher, teacherSchema,upload, uploadFile } = require('../middleware/middleware');
router.post("/upload", upload.array("files", 5), teacherController.uploadFile);
// router.post('/upload', upload.single('profilePic'), teacherController.uploadFile);
router.post('/', validateTeacher, teacherController.createTeacher);
router.post('/login', teacherController.loginTeacher);
router.post('/auth', teacherController.logoutTeacher);    
router.get('/', teacherController.getTeachers);
router.get('/:id', teacherController.getTeacher);
router.put('/:id', teacherController.updateTeacher);

router.delete('/:id', teacherController.deleteTeacher);

module.exports = router;