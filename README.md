# pythonnodejs-lab11.1

![image](https://github.com/jipx/pythonnodejs-lab11.1/assets/4178277/be70e960-5181-4b0b-b136-c5b504abadb5)
The following table describes the steps that are labeled in the diagram.

Step in Diagram	Explanation
## 1	A user (Frank) requests a report by using the create_report REST API endpoint. You created this REST API in a previous lab. The request invokes a Step Functions state machine that you will build.
## 2	The state machine first invokes a Lambda function that looks up the latest coffee supply information. The information is in a MySQL database hosted on Amazon Relational Database Service (Amazon RDS).
## 3	The state machine then invokes two Lambda functions to run in parallel.
## 4	One of the functions transforms the JSON data from the database into an HTML report that is nicely formatted for readability. The report is uploaded to an S3 bucket.
## 5	The other function generates a presigned URL to access the report and then sends the presigned URL to an SNS topic.
## 6	Frank is subscribed to the SNS topic, so he receives an email with the presigned URL. He can then access the report from Amazon S3. Only he knows the presigned URL, and it will expire after a short period.
