const fs = require('fs');
const path = require('path');
var rimraf = require('rimraf');
const pathBuilder = path.join.bind(path, __dirname);

exports.getSpecs = (pattern) => {
	if (!(pattern instanceof RegExp)) {
		pattern = new RegExp(pattern, 'gi');
	}
	const files = fs.readdirSync(path.resolve(__dirname, 'specs'))
		.filter((filename) => {
			return pattern.test(filename)
		})
		.map(filename => path.resolve(__dirname, 'specs', filename));
	return files;
};
exports.ensureDirSync = (absPath) => {
	try {
		const isExist = fs.existsSync(absPath);
		if (!isExist) {
			fs.mkdirSync(absPath);
		}
	} catch (e) {
		console.error('Error while creating dir', e);
	}
};
exports.cleanDir = (dir, cb) => {
	const isExist = fs.existsSync(dir);
	if(isExist){
		return rimraf(path.resolve(__dirname, dir), cb);
	}
	return cb(null);
};
exports.pathBuilder =  pathBuilder;