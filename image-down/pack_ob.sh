javascript-obfuscator background.js -o background.min.js
javascript-obfuscator js/tiktok.js -o js/tiktok.min.js
javascript-obfuscator js/showList.js -o js/showList.min.js

cd ../ 
rm -rf tiktik_downloader*zip
zip -r 'tiktik_downloader.zip' 'tiktik_downloader/' -x 'tiktik_downloader/pack.sh' -x 'tiktik_downloader/background.js' -x \
-x 'tiktik_downloader/js/tiktok.js' -x 'tiktik_downloader/js/showList.js' -x 'tiktik_downloader/tik-tok_shots/*'
