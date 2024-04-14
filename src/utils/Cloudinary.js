import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const fileUploader = async (filePath) => {
  try {
    if (!filePath) return;
    const response = cloudinary.uploader.upload(filePath, {
      resource_type: `auto`,
    });
    console.log(`file resposne ${response}`);
    return null;
  } catch (error) {
    fs.unlink(filePath);
    return null;
  }
};

export default fileUploader;

cloudinary.uploader.upload(
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" },
  function (error, result) {
    console.log(result);
  }
);
