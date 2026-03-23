const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');
const { validateTeacher, teacherSchema,upload, uploadFiles, sizeLimit } = require('../middleware/middleware');
const fileValidator = require('../middleware/fileValidator');

router.post("/upload", fileValidator.array('file'), teacherController.uploadFiles);
router.get("/download/:filename", teacherController.downloadFile);
// router.post('/upload', upload.single('profilePic'), teacherController.uploadFile);
router.post('/', validateTeacher, teacherController.createTeacher);
router.post('/login', teacherController.loginTeacher);
router.post('/auth', teacherController.logoutTeacher);    
router.get('/', teacherController.getTeachers);
router.get('/:id', teacherController.getTeacher);
router.put('/:id', teacherController.updateTeacher);

router.delete('/:id', teacherController.deleteTeacher);

module.exports = router;