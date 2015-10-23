var path = require('path');
var AdmZip = require('adm-zip');

try {
	var zip = new AdmZip(path.join(__dirname, process.platform+'.zip'));
	zip.extractAllTo(path.join(__dirname, '..', 'libs'), true);
	console.log('Giffler installed successfully, neat!');
}
catch (e) {
	console.log(e);
	console.log('No platform specific package found.');
	console.log('You will need to install ffmpeg and ImageMagick convert yourself.');
}