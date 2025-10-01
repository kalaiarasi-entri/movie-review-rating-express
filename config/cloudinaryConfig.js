const cloudinary = require("cloudinary").v2;

// Configuration
// cloudinary.config({
//   cloud_name: process.env.cloudinary_cloud_name,
//   api_key: process.env.cloudinary_api_key,
//   api_secret: process.env.cloudinary_api_secret,
// });
cloudinary.config({
  cloud_name: "dlsnwlpsv",
  api_key: "292974266834487",
  api_secret: "bnlw5zU7-iDjeYwCQj6Ae12RgPw",
});

module.exports = cloudinary;
