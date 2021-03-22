cd ../ 
rm -rf image-downloader*zip
zip -r 'image-downloader.zip' 'image-downloader/' \
-x 'image-downloader/pack*.sh' \
-x 'image-downloader/writeLocales.js' \
-x 'image-downloader/vue*' \
-x 'image-downloader/shots'
