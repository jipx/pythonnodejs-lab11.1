{"filter":false,"title":"presignedURL.js","tooltip":"/presignedURL.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":26,"column":2},"action":"insert","lines":["const AWS = require('aws-sdk');","const s3 = new AWS.S3();","","exports.handler = async (event, context) => {","  const bucketName = 'c81790a1735462l4885374t1w228832519392-s3bucket-1gk016gl7wah3';","  const objectName = 'report.html';","  const expirationInSeconds = 120;","","  try {","    const params = {","      Bucket: bucketName,","      Key: objectName,","      Expires: expirationInSeconds,","    };","","    const presignedUrl = await s3.getSignedUrlPromise('getObject', params);","","    const response = {","      presigned_url_str: presignedUrl,","    };","","    return response;","  } catch (error) {","    console.error(error);","    return null;","  }","};"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":22},"end":{"row":11,"column":22},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1696302531426,"hash":"7fb4c2e37e318ca7b40529224a918c1c9b74bcdb"}