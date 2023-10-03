const lambda = require('./presignedURL'); // Import your Lambda function

const event = {}; // Define your test event here
const context = {}; // Define a test context object if needed

lambda.handler(event, context)
  .then((response) => {
    console.log('Lambda execution result:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
