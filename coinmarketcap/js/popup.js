function truncNumber(num, fixed = 4) {
    return Number(num) && Number(num).toFixed(fixed).replace(/\-|\+/, '')
}
function calcSymbol(num) {
    if (/-/.test(num)) return 'minus'
    return 'plus'
}
function formatCap(cap) {
    //'10000.0'
    var cap = cap + '';
    cap = cap.split('.')[0];
    //'10000'
    var n = 1;
    var len = Math.floor(cap.length / 3);
    if (len == cap.length / 3) {
        len = len - 1;
    }
    //2
    var capArr = cap.split('');
    var recapArr = capArr.reverse();
    //['0','0','0','0','1']

    for (var a = 0; a < len; a++) {
        recapArr.splice(3 * n + a, 0, ',');
        n++;
    }
    return recapArr.reverse().join("");
}
function start() {
    var url = 'https://api.coincap.io/v2/assets';
    var totalCap = 'https://api.coinmarketcap.com/v1/global/';
    function httpRequest(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                callback(xhr.responseText);
            }
        }
        xhr.send();
    }
    function showResults(result) {
        result = JSON.parse(result);
        var list = result.data;
        console.log(list)
        let renderList = '<div class="render-list">'
        const head = `
        <div class="header">
            <span class="rank">rank</span>
            <span class="name">name</span>
            <span class="price">price</span>
            <span class="market-cap">market cap</span>
            <span class="change">change</span>
        </div>`
        renderList += head
        list.forEach(item => {
            let tmp =
                `
            <div class="item">
                <span class="rank">${item.rank}</span>
                <span class="name">${item.id}</span>
                <span class="price">$${truncNumber(item.priceUsd)}</span>
                <span class="market-cap">$${formatCap(truncNumber(item.marketCapUsd))}</span>
                <span class="change ${calcSymbol(item.changePercent24Hr)}">${truncNumber(item.changePercent24Hr, 2)}%</span>
            </div>
            `
            renderList += tmp
        })
        renderList += `</div>`
        document.getElementById('marketcap').innerHTML = renderList;
        // httpRequest(totalCap, showTotal);
    }
    httpRequest(url, showResults);


    document.getElementById('marketcap').innerHTML = '<div id="loading">' + 'Loading' + '</div>';
    var ld = document.getElementById('loading');

    var itv = setInterval(() => {
        if (ld.innerHTML.indexOf('...') != -1) {
            ld.innerHTML = 'Loading';
        } else {
            ld.innerHTML += '.';
        }
    }, 600);
}
start();