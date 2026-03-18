const { z } = require("zod");

const teacherSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  phone: z.number().min(8).max(10, "Phone number must be 10 digits"),
  salary: z.number().positive("Salary must be positive"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

const validateTeacher = (req, res, next) => {
  try {

    teacherSchema.parse(req.body);

    next();

  } catch (error) {

    return res.status(400).json({
      message: "Validation Error",
      errors: error.errors
    });

  }
};

module.exports = {validateTeacher, teacherSchema};
