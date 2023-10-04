const AWS = require('aws-sdk');
const readline = require('readline');

// Initialize AWS SDK with your credentials and region
/* AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION',
}); */

// Create an S3 instance
const s3 = new AWS.S3();

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to check if the bucket exists
async function doesBucketExist(bucketName) {
  try {
    await s3.headBucket({ Bucket: bucketName }).promise();
    return true; // Bucket exists
  } catch (error) {
    if (error.statusCode === 404) {
      return false; // Bucket does not exist
    }
    throw error; // Handle other errors
  }
}

// Function to create the bucket if it doesn't exist
async function createBucketIfNotExists(bucketName) {
  const exists = await doesBucketExist(bucketName);

  if (!exists) {
    try {
      await s3.createBucket({ Bucket: bucketName }).promise();
      console.log(`Bucket "${bucketName}" created successfully.`);
    } catch (error) {
      console.error(`Error creating bucket: ${error.message}`);
    }
  } else {
    console.log(`Bucket "${bucketName}" already exists.`);
  }
}

// Prompt the user for the bucket name
rl.question('Enter the bucket name: ', (bucketName) => {
  createBucketIfNotExists(bucketName);
  rl.close();
});
