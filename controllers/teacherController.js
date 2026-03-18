const jwt = require("jsonwebtoken");
const Teacher = require("../models/teacherModel");

// CREATE TEACHER
exports.createTeacher = async (req, res) => {
  try {
    console.log("req.body");
    console.log(req.body);
    console.log(req.body);
    const teacher = await Teacher.create(req.body);

    res.status(201).json({
      message: "Teacher created",
      data: teacher,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL TEACHERS
exports.getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();

    res.json(teachers);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET SINGLE TEACHER
exports.getTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);

    res.json(teacher);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE TEACHER
exports.updateTeacher = async (req, res) => {
  try {
    await Teacher.update(req.body, {
      where: { id: req.params.id },
    });

    res.json({ message: "Teacher updated" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE TEACHER
exports.deleteTeacher = async (req, res) => {
  try {
    await Teacher.destroy({
      where: { id: req.params.id },
    });

    res.json({ message: "Teacher deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.loginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;

    const teacher = await Teacher.findOne({
      where: { email, password },
    });

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }

    if (teacher.password !== password) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }
 const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    id: teacher.id,
    email: teacher.email
  },
  "phulbabu_secret_key",
  {
    expiresIn: "1h"
  }
);

    
  

    res.json({
      message: "Login successful",
      teacher,
      token,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.logoutTeacher = async (req, res) => {
  try {
     //For simplicity, just return a logout message
    // In a real app, you might invalid
    res.json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json(error);
  }
};
