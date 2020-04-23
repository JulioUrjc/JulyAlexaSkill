

function getPersistenceAdapter(tableName) {
 // This function is an indirect way to detect if this is part of an Alexa-Hosted skill
 function isAlexaHosted() {
     return process.env.S3_PERSISTENCE_BUCKET;
 }
   if (isAlexaHosted()) {
       const {S3PersistenceAdapter} = require('ask-sdk-s3-persistence-adapter');
       return new S3PersistenceAdapter({
           bucketName: process.env.S3_PERSISTENCE_BUCKET
       });
   } else {
       var awsSdk = require('aws-sdk');
       var myDynamoDB = new awsSdk.DynamoDB({
           endpoint: 'http://localhost:8000',
           accessKeyId: 'Julio',
           secretAccessKey: 'july',
           region: 'eu-west-1',
           apiVersion: 'latest'
       });
       // IMPORTANT: don't forget to give DynamoDB access to the role you're using to run this lambda (via IAM policy)
       const {DynamoDbPersistenceAdapter} = require('ask-sdk-dynamodb-persistence-adapter');
       return new DynamoDbPersistenceAdapter({
           tableName: tableName || 'happy_birthday',
           createTable: true,
           dynamoDBClient: myDynamoDB
       });
   }
 }

module.exports =
{
  getPersistenceAdapter
}