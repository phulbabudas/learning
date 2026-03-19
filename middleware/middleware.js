const { z } = require("zod");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const sizeLimit = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024 
  }
});

fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "application/pdf",   // PDF
      "video/mp4",         // video
      "image/jpeg",        // image
      "image/png"
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, Video, Image allowed"), false);
    }
  };


const upload = multer({ storage });
const teacherSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  phone: z.string().length(10, "Phone number must be 10 digits"),
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

module.exports = {validateTeacher, teacherSchema, upload,sizeLimit };
