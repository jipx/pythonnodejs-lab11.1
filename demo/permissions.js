const AWS = require('aws-sdk');
const fs = require('fs');

// Initialize AWS SDK with your credentials and region
AWS.config.update({
  region: 'us-east-1', // Replace with your desired AWS region
});

// Create an S3 instance
const s3 = new AWS.S3();

const bucketName = 'jipx-04-10-2023-s3bucket';
const policyFilePath = './public_policy.json';

// Read the policy file
const policy = fs.readFileSync(policyFilePath, 'utf8');

// Define the parameters for putBucketPolicy
const params = {
  Bucket: bucketName,
  Policy: policy,
};

// Set the bucket policy
s3.putBucketPolicy(params, (err, data) => {
  if (err) {
    console.error('Error setting bucket policy:', err);
  } else {
    console.log('Setting Permissions - DONE');
  }
});
