import boto3
import json

S3API = boto3.client("s3", region_name="us-east-1") 
bucket_name = "c81790a1735462l4885374t1w228832519392-s3bucket-1eiq5ript6x3t"

policy_file = open("/home/ec2-user/environment/resources/public_policy.json", "r")


S3API.put_bucket_policy(
    Bucket = bucket_name,
    Policy = policy_file.read()
)
print ("Setting Permissions - DONE")