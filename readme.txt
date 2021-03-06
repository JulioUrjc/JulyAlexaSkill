/////////////////////////////////////
////                             ////
////       Install steps         ////
/////////////////////////////////////

0. Install nodejs

1. To create a package.json
	npm init
	 (name, version, main, etc)

2. To create main code (index.js)
    ```
	exports.printMsg = function() {
  		console.log("This is a message from the demo package");
	} 
	```
3. Publish your package to npm:

	npm login (npm user page)

    For private packages and unscoped packages, use npm publish.
    For scoped public packages, use npm publish --access public
    ```
    mkdir test-directory
    cd /path/test-directory (different to module path)
    npm install <your-module-name>
    ```

    test.js
    ```
      var demo = requier('quienviveencasa');
      demo.printMsg();
    ```

4. Create code index.js
   export.handler

5. Install "npm install --save ask-sdk" (Alexa SDK)

6. Configure console Alexa app (and build)
      http://developer.amazon.com/alexa

      Name, Invocation, Intent (HelloWorldIntent ), JSON

7. Create asl-config.json
  ```
  {
    "skillId" : "your_skill_id_here",     (View skill id, console page)
    "stage" : "stage_of_the_skill"        (development)
  }
  ```

8. Install  "npm install -g alexa-skill-local"
   ```
   and run: "alexa-skill-local"   (can use "-p numberPORT")
   ```

9. Enter this url as HTTPS endpoint in your Alexa console

10. npm install (download modules in package.json)


/////////////////////////////////////
////                             ////
////            DATA BASE        ////
/////////////////////////////////////

1. Install AWS CLI
   git clone https://github.com/aws/aws-cli
   cd .\aws-cli\
   python -m pip install --user awscli
   python -m pip install --upgrade awscli
   python setup.py install
   
2. aws configure  (%userprofile%/.aws/credential)

/////////////////////////////////////
////                             ////
////            DINAMO DB        ////
/////////////////////////////////////

1. Download web: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html

2. java -D"java.library.path=./DynamoDBLocal_lib" -jar DynamoDBLocal.jar -sharedDb

3. aws dynamodb list-tables --endpoint-url http://localhost:8000

4. Change in code: 
    data base credentials
    data base path endpoint
    data base region

    Once that you have configure your local DynamoDB and check that it is working. You have to edit the persistence.js, to fill it with your personal configuration. Your code should look similar to:

    var myDynamoDB = new awsSdk.DynamoDB({
        endpoint: 'http://localhost:8000', // This is the default one
        accessKeyId: 'your-aws-acces-key-id', //i.e. July
        secretAccessKey: 'your-aws-secret-acces-key', //i.e. july
        region: 'your-region', //eu-west-1
        apiVersion: 'latest'
    });