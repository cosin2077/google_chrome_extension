const _0x2c49=['exports','url_list','httpGetLocation','getTrueVideoSrc','string','indexOf','getItemIdAndDytk','https','get','push','match','getContentFromUrl','location','EventEmitter','play_addr','startMultiTask','events','log','&dytk=','start','parameter\x20must\x20be\x20array!','headers','replace','request-promise-native','filter','video','handleRes'];(function(_0x30dced,_0x2c498c){const _0x4719f9=function(_0x405006){while(--_0x405006){_0x30dced['push'](_0x30dced['shift']());}};_0x4719f9(++_0x2c498c);}(_0x2c49,0x131));const _0x4719=function(_0x30dced,_0x2c498c){_0x30dced=_0x30dced-0x0;let _0x4719f9=_0x2c49[_0x30dced];return _0x4719f9;};let EventEmitter=require(_0x4719('0x8'))[_0x4719('0x5')];let request=require(_0x4719('0xf'));let https=require(_0x4719('0x1a'));let http=require('http');const headers={'user-agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2013_2_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/13.0.3\x20Mobile/15E148\x20Safari/604.1'};let options={'headers':headers};class DouyinParser extends EventEmitter{async[_0x4719('0x7')](_0x5ac58b){if(!Array['isArray'](_0x5ac58b))throw new Error(_0x4719('0xc'));let _0xb2ca47=[];for(let _0x1717ab of _0x5ac58b){let _0x31d1fa=await this[_0x4719('0xb')](_0x1717ab);_0xb2ca47[_0x4719('0x1')](_0x31d1fa);}console[_0x4719('0x9')](_0xb2ca47);}async[_0x4719('0xb')](_0xee6da){let _0x2dc3c5=await this['httpGetLocation'](_0xee6da);let _0x13c2be=await this[_0x4719('0x3')](_0x2dc3c5);let _0x498a5e=this[_0x4719('0x19')](_0x13c2be);let _0x1dfddb=await this[_0x4719('0x16')](_0x498a5e);let _0x48e9f3=await this[_0x4719('0x12')](_0x1dfddb);_0x48e9f3=_0x48e9f3[_0x4719('0x10')](_0x37d978=>_0x37d978);return _0x48e9f3;}async[_0x4719('0x15')](_0x1f0ff3){return new Promise((_0x2adb93,_0x3873ed)=>{let _0x498640=_0x1f0ff3[_0x4719('0x18')](_0x4719('0x1a'))!=-0x1?https:http;_0x498640[_0x4719('0x0')](_0x1f0ff3,options,_0x382e65=>{_0x2adb93(_0x382e65[_0x4719('0xd')][_0x4719('0x4')]);});});}async[_0x4719('0x3')](_0x30d8e1){return request(_0x30d8e1,options);}[_0x4719('0x19')](_0x54efa3){let _0x2f9af3=/itemId:\s"(.*?)",/gi;let _0x363968=/dytk:\s"(.*?)"/gi;let _0x1500e3=_0x54efa3[_0x4719('0x2')](_0x2f9af3)&&_0x54efa3[_0x4719('0x2')](_0x2f9af3)[0x0];let _0x5eff30=_0x54efa3[_0x4719('0x2')](_0x363968)&&_0x54efa3[_0x4719('0x2')](_0x363968)[0x0];if(!_0x1500e3||!_0x5eff30)return{};_0x1500e3=_0x1500e3[_0x4719('0xe')](/itemId:\s"/,'');_0x5eff30=_0x5eff30[_0x4719('0xe')](/dytk:\s"/,'');if(!_0x1500e3||!_0x5eff30)return{};_0x1500e3=_0x1500e3[_0x4719('0xe')](/",\s*/,'');_0x5eff30=_0x5eff30[_0x4719('0xe')](/"/,'');if(!_0x1500e3||!_0x5eff30)return{};return{'itemId':_0x1500e3,'dytk':_0x5eff30};}[_0x4719('0x16')](_0x32f8b2){let {itemId,dytk}=_0x32f8b2;let _0x29a83a='https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids='+itemId+_0x4719('0xa')+dytk;return request(_0x29a83a,options);}async[_0x4719('0x12')](_0x27536b){let _0x3dc710=[];let _0x15929d=[];let _0x106e96=_0x27536b;if(typeof _0x27536b==_0x4719('0x17')){try{_0x106e96=JSON['parse'](_0x27536b);}catch(_0x2e9413){console[_0x4719('0x9')](_0x2e9413);}}try{_0x3dc710=_0x106e96['item_list'][0x0][_0x4719('0x11')][_0x4719('0x6')][_0x4719('0x14')];}catch(_0x8e7eb7){console[_0x4719('0x9')](_0x8e7eb7);};for(let _0x534d55 of _0x3dc710){let _0x7dafcb=await this[_0x4719('0x15')](_0x534d55);_0x15929d[_0x4719('0x1')](_0x7dafcb);}return _0x15929d;}};module[_0x4719('0x13')]={'DouyinParser':DouyinParser};