
cd ../ 
rm -rf tiktik_downloader*zip
zip -r 'tiktik_downloader.zip' 'tiktik_downloader/' \
-x 'tiktik_downloader/pack.sh' \
-x 'tiktik_downloader/pack_ob.sh' \
-x 'tiktik_downloader/tik-tok_shots/*'
