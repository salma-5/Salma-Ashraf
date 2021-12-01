# Instabug Challenge

This is a challenge where i wrote test cases for an application, detected six bugs at the same application after that i had to automate facebook registeration and login scenarios and at the end of the challenge i had to automate apis from a supporeted file

## Project Contents
```bash
test_plan -> Test Plan Document
fb_automation -> Facebook E2E Automation Project
rest_api -> Best-buy Restful API Automation Project
```

## Installation
- Extract all the folders in a single directory
- Inside the facebook e2e project folder, run the following commands
```bash
npm install testcafe --save-dev
npm install faker --save-dev
```
- Inside the API automation folder, run the following commands
```bash
npm install mocha --save-dev
npm install chai --save-dev
npm install chai-http --save-dev
npm install supertest --save-dev
```

## Execution
- Run the E2E automation project by executing the commands below
```bash
testcafe chrome tests
```
- Run the API automation project by executing the commands below
```bash
npm test
```

**Kindly make sure you are running the commands inside the target folder**

## License
[MIT](https://choosealicense.com/licenses/mit/)