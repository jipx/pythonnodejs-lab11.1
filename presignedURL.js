const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event, context) => {
  const bucketName = 'c81790a1735462l4885374t1w228832519392-s3bucket-1gk016gl7wah3';
  const objectName = 'report.html';
  const expirationInSeconds = 120;

  try {
    const params = {
      Bucket: bucketName,
      Key: objectName,
      Expires: expirationInSeconds,
    };

    const presignedUrl = await s3.getSignedUrlPromise('getObject', params);

    const response = {
      presigned_url_str: presignedUrl,
    };

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};