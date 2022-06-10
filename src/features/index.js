// 添加router
module.exports = function createFeatures(featuresTemplate,detailFeatures) {
	const fs = require("fs");
	const path = require("path");
	// eslint-disable-next-line no-undef
  console.log(__dirname);
	const fliename = path.join(__dirname, `../../src/${detailFeatures}`);
	fs.mkdir(fliename, { recursive: true }, (err) => {
		if (err) {
			throw err;
		} else {
			console.log("ok!");
			fs.writeFileSync(`../../src/${detailFeatures}/index.js`, `${featuresTemplate}`, function (err) {
				if (err) {
					return console.log(err);
				}
			});
		}
	});
};

