
function start(){
    var url = 'https://api.coinmarketcap.com/v1/ticker/?limit=100';
    var totalCap = 'https://api.coinmarketcap.com/v1/global/';

function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4&&xhr.status==200) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}
function color(node){
    var str = node.innerText;
    var strArr = str.split('');
    var colors = [
        '#FF0000',
        '#FF7F00',
        '#7DFFFF',
        '#00FF00 ',
        '#00FFFF',
        '#0000FF',
        '#8B00FF',
    ]
    var spans = '';
    for(var a in strArr){
        spans+= '<span style="color:'+colors[a%7]+'"'+'>'+
        strArr[a]+'</span>';
    }
    node.innerHTML = spans;
}

function showTotal(result){
    clearInterval(itv);
    var res = JSON.parse(result);
    var title = document.getElementById('title');
    var div = document.createElement('div');
    div.style.textAlign="center";
    div.style.fontSize="0.65em";
    div.style.color="steelblue";
    div.style.fontWeight="normal";
    div.innerHTML = 'Marketcap: '+'<strong>$'+formatCap(res.total_market_cap_usd)+'</strong>'+' | 24h Vol: '+'<strong>$'+formatCap(res.total_24h_volume_usd)+'</strong>'+' | BTC Dominance: '+'<strong>'+formatCap(res.bitcoin_percentage_of_market_cap)+'</strong>'+"%";
    title.appendChild(div);
}

function showResults(result){
    result = JSON.parse(result);
    var list = result;
    var title = document.getElementById('title');
    color(title);
    title.style.display="block";
    var table = '<table><tr><th>#</th><th>Name</th><th>Price</th><th>Market Cap</th><th>Change</th></tr>';
    var num =1;
    for(var i of list){
        table += '<tr>';
        table += '<td>'+num+'</td>';
        table += '<td>'+i.name+'</td>';
        //price
        table += '<td style="font-weight:bold">'+'$'+i.price_usd+'</td>';
        //marketcap
        table += '<td>'+'$'+formatCap(i.market_cap_usd)+'</td>';

        if(i.percent_change_24h>0){
            table += '<td style="color:green;text-align:right">'+i.percent_change_24h+'%'+'</td>';
        }else{
            table += '<td style="color:red;text-align:right">'+i.percent_change_24h+'%'+'</td>';
        }
        
        table += '</tr>';
        num++;
    }
    
    table += '</table>';
    document.getElementById('marketcap').innerHTML = table;
    httpRequest(totalCap, showTotal);
}

//can use toLocalString format
function formatCap(cap){
        //'10000.0'
        var cap = cap+'';
        cap = cap.split('.')[0];
        //'10000'
        var n = 1;
        var len = Math.floor(cap.length/3);
        if(len==cap.length/3){
            len = len-1;
        }
        //2
        var capArr = cap.split('');
        var recapArr = capArr.reverse();
        //['0','0','0','0','1']

        for(var a=0;a<len;a++){
            recapArr.splice(3*n+a,0,',');
            n++;
        }
        return recapArr.reverse().join("");
}

httpRequest(url, showResults);


document.getElementById('marketcap').innerHTML='<div id="loading">'+'Loading'+'</div>';
var ld = document.getElementById('loading');

var itv = setInterval(function(){
    if(ld.innerHTML.indexOf('...')!=-1){
        ld.innerHTML = 'Loading';
    }else{
        ld.innerHTML+='.';
    }
}, 500);
