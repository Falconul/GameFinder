import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("🚀 ~ DESTINATION IN MULTER file:", file);

    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log("🚀 ~ FILENAME METHOD: file:", file);

    const uniqueSuffix = Date.now();
    console.log("🚀 ~ uniqueSuffix:", uniqueSuffix);

    const extension = file.mimetype.slice(6);
    console.log("🚀 ~ extension:", extension);

    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

const upload = multer({ storage: storage });

export default upload;