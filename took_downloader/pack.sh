
cd ../ 
rm -rf took_downloader*zip
zip -r 'took_downloader.zip' 'took_downloader/' \
-x 'took_downloader/pack.sh' \
-x 'took_downloader/pack_ob.sh' \
-x 'took_downloader/tik-tok_shots/*'
