## Protractor e2e standalone

### Proxy Setup
```bash
npm config set proxy http://bcproxy.sgp.dbs.com:8080
npm config set https-proxy http://bcproxy.sgp.dbs.com:8080
npm config set http-proxy http://bcproxy.sgp.dbs.com:8080
```
**Artifactory**- Requires to install dbs specific modules
```bash
npm config set registry http://artifactory.dev.sys.cs.sgp.dbs.com/artifactory/api/npm/dbs-npm
```
### Install dependency
```bash
npm install
```
### Update Web-Drivers
```bash
npm run webdriver:clean
npm run webdriver:update
```
### Configure protractor
```bash
#open and configure protractor.conf.js
#Change baseUrl 
```
### List all command
```bash
npm run list
#OR
npm run list:full
```
**Note:** Project uses a small utility module, batman-cli to list command. Batman can be use for other purpose. Please visit developer page for more info: [batman-cli](https://github.com/deepakshrma/batman-cli)
### Start Web-Drivers
```bash
npm run webdriver:start
```
### Start protractor
```bash
npm run test
```
### Where to create specs files
protractor-standalone\
<space><space><space>|--specs\
<space><space><space><space><space><space>|--your_new.spec.js

### Where to add newly added specs file
It is done automatically. However file name should end with **specs.js** inside **specs** folder.

### Where to find html results
protractor-standalone\
<space><space><space>|--e2e_reports\
<space><space><space><space><space><space>|--html\
<space><space><space><space><space><space><space><space><space>|--index.html

### Authors:
* Deepak V<deepak@dbs.com>

## License
MIT 

