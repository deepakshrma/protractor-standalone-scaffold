## Protractor e2e standalone
A stand-alone scaffolding project for e2e testing. So that individual tester can start testing without going through source code.
It supports jasmine and cucumber out of box. Developer can choose either jasmine or cucumber on base of their needs. 

## Clone Project and rename to your project name
git clone https://github.com/deepakshrma/protractor-standalone-scaffold.git ./MyAwesomeProject
### Install dependency
```bash
cd MyAwesomeProject
npm install
```
### Update Web-Drivers
```bash
npm run webdriver:clean
npm run webdriver:update
```
**Note:** You may have to retry for 3-5 times, because of proxy issue.  

### Configure protractor
**open and configure protractor.conf.js**  
_Change baseUrl_

### Start Web-Drivers
```bash
npm run webdriver:start
```
### Start protractor
```bash
npm run test
```
### Where to create specs/feature files
### Jasmine
protractor-standalone\
<space><space><space>|--specs\
<space><space><space><space><space><space>|--your_new.spec.js

### Cucumber
#### Specs files
protractor-standalone   
<space><space><space>|--cucumber    
<space><space><space><space><space><space>|--your_new.spec.js   

#### Feature files
protractor-standalone\
<space><space><space>|--cucumber\
<space><space><space><space><space><space>|--your_new.feature

### Where to add newly added specs file
It is done automatically. However file name should end with **specs.js** inside **specs** folder.

### Where to find html results
protractor-standalone   
<space><space><space>|--e2e_reports     
<space><space><space><space><space><space>|--html   
<space><space><space><space><space><space><space><space><space>|--index.html    

### Authors:
* __@deepakshrma(deepak.m.shrma@gmail.com.com)__

## License
MIT 

