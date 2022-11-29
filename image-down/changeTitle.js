var path = require('path')
var fs = require('fs')


var dirs = fs.readdirSync('_locales')

dirs.forEach(dir=>{
	if(dir != '.DS_Store'){
		var ct = fs.readFileSync(path.resolve('_locales',dir,'messages.json'),'utf8');
		ct = JSON.parse(ct);
		if(ct.appName && ct.appName.message){
			ct.appName.message = ct.appName.message.replace(/Tiktok\sdownloader/gi,'TikTik')
		}
		if(ct.appName && ct.appName.description){
			ct.appName.description = ct.appName.description.replace(/Tiktok\sdownloader/gi,'TikTik')
		}
		if(ct.appDesc && ct.appDesc.message){
			ct.appDesc.message = ct.appDesc.message.replace(/Tiktok\sdownloader/gi,'TikTik')
		}
		if(ct.appDesc && ct.appDesc.description){
			ct.appDesc.description = ct.appDesc.description.replace(/Tiktok\sdownloader/gi,'TikTik')
		}
		fs.writeFileSync(path.resolve('_locales',dir,'messages.json'),JSON.stringify(ct,null,2),'utf8');
	}
})