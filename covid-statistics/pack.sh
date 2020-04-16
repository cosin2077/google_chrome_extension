cd ../ 
rm -rf covid-statistics.zip
zip -r covid-statistics.zip ./covid-statistics -x "./covid-statistics/shots" -x "covid-statistics/pack.sh" -x "covid-statistics/.DS_Store"