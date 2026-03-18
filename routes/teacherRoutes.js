const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');
const { validateTeacher, teacherSchema } = require('../middleware/middleware');
router.post('/', validateTeacher, teacherController.createTeacher);
router.post('/login', teacherController.loginTeacher);
router.post('/auth', teacherController.logoutTeacher);    
router.get('/', teacherController.getTeachers);
router.get('/:id', teacherController.getTeacher);
router.put('/:id', teacherController.updateTeacher);

router.delete('/:id', teacherController.deleteTeacher);

module.exports = router;