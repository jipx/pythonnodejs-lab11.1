const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.handler = async (event, context) => {
  const bucketName = "jipx-04-10-2023-s3bucket";
  const objectName = "report.html";
  const expirationInSeconds = 120;

  try {
    const params = {
      Bucket: bucketName,
      Key: objectName,
      Expires: expirationInSeconds,
    };

    const presignedUrl = await s3.getSignedUrlPromise("getObject", params);

    const response = {
      presigned_url_str: presignedUrl,
    };

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
