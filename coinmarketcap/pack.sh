
cd ../ 
rm -rf coinmarketcap*zip
zip -r 'coinmarketcap.zip' 'coinmarketcap/' \
-x 'coinmarketcap/pack*.sh' \
-x 'coinmarketcap/writeLocales.js' \
-x 'coinmarketcap/css/style.less' \
-x 'coinmarketcap/shots/*'
