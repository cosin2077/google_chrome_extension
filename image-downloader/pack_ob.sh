javascript-obfuscator background.js -o background.min.js
javascript-obfuscator js/tiktok.js -o js/tiktok.min.js
javascript-obfuscator js/showList.js -o js/showList.min.js

cd ../ 
rm -rf image-downloader*zip
zip -r 'image-downloader.zip' 'image-downloader/' \
-x 'image-downloader/pack*.sh' \
-x 'image-downloader/writeLocales.js' \
-x 'image-downloader/vue*' \
-x 'image-downloader/shots'
