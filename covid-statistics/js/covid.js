const apiUrl = 'http://logger.devdapps.top:9538/api-covid';

const fetchReponse = () => fetch(apiUrl).then(res=>res.json())

const startApp = async () => {
  let response = await fetchReponse();
  console.log(response)
  paddingTable(response)
}

const paddingTable = (response) => {
  response = response.sort((a,b)=>a.confirmedCount > b.confirmedCount)
  let container = document.querySelector('#covid');
  let table = '<table><tr><th>#Rank</th><th>Country</th><th>Total</th><th>Today</th><th>Cured</th><th>Dead</th></tr>';
  response.forEach((res,index)=>{
    table += '<tr>';
    table += '<td>'+(index+1)+'</td>';
    table += '<td>'+res.countryFullName+'</td>';
    table += '<td>'+res.confirmedCount+'</td>';
    table += '<td>'+res.incrVo.confirmedIncr+'</td>';
    table += '<td>'+res.curedCount+'</td>';
    table += '<td>'+res.deadCount+'</td>';
    table += '</tr>';
  })
  table += '</table>';

  container.innerHTML = table ;
}
setTimeout(startApp,200)