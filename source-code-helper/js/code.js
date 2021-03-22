async function startInsert(debug){
	var _$ = document.querySelector.bind(document)
	var goToBtn = _$('.d-none.d-md-block')
    var sel = 'go-to-first-commit'
	if (!goToBtn || goToBtn.innerText != 'Go to file') return debug && console.log('[source-code-helper]:not github first page')
	if (_$(`.${sel}`)) return debug && console.log(`[source-code-helper]:${sel} exists!`)
	var project = location.href.match(/com\/(.*?\/[\d\w-\.]+)\/?/) && location.href.match(/com\/(.*?\/[\d\w-\.]+)\/?/)[1]
	if(!project) return debug && console.log('[source-code-helper]:no valid project')
    var branch = _$('summary span.css-truncate-target').innerText
    var latestCommit = ''
    var max = 0
    try {
        max = Math.trunc(_$('span.d-none.d-sm-inline strong').innerText.replace(/\,/,'') / 35) * 35
    } catch(err){
        console.log(err)
    }
    var html = document.createElement('html')
    debug && console.log(`[source-code-helper]:fetching project: ${project} commit messages`)
	await fetch(`https://github.com/${project}/commits/${branch}`)
	.then(res=>res.text())
	.then(res=>{
        html.innerHTML = res
        try{
            latestCommit = html.querySelector('.TimelineItem-body li .BtnGroup a').href.match(/\/commit\/(.*)/)[1]
        } catch(err){
            console.log(err)
        }
	})
    debug && console.log(`[source-code-helper]:set first commit url`)
	var firstCommit = `https://github.com/${project}/commits/${branch}?after=${latestCommit}+${max}`
	if(max < 36) {
        firstCommit = `https://github.com/${project}/commits/${branch}`
    }
	var newNav = goToBtn.cloneNode(true)
	for(let i of newNav.getAttributeNames()){
		if(i != 'class') newNav.removeAttribute(i)
	}
	newNav.onclick = () => {}
	newNav.className += ' '+sel
	newNav.innerText = 'Go To First Commit'
	newNav.href = firstCommit
	goToBtn.parentNode.insertBefore(newNav,goToBtn)
}

window.addEventListener('load', () => {
    runTask()
});
window.onpopstate = (e) => {
    runTask()
}
history.pushState({},'','')

function runTask(){
    var debug = true
    debug && console.log('[source-code-helper]:run source-code-helper startInsert()')
    startInsert(debug)
}