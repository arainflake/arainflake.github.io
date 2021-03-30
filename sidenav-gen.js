
//python generated section between '///'
///
var sidenavMainSect = [
'<a href="/index.html">Home</a>',
'<a href="/Links/index.html">Links</a>',
'<a href="/Bookmarks/index.html">Bookmarks</a>',
'<a href="/Notes/index.html">Notes</a>',
'<a href="/Videos/index.html">Videos</a>'
];

var sidenavProjects = [
'<a href="/project1/index.html">project1</a>',
'<a href="/project2/index.html">project2</a>'
];
///
//python generated section between '///'

var w = window.location.pathname;

var z;

for (x = 0; x < sidenavMainSect.length; x++){
	if (w == sidenavMainSect[x].match(w)){
		z = "<p>" + sidenavMainSect[x].substring(sidenavMainSect[x].indexOf(">") + 1, sidenavMainSect[x].lastIndexOf("<")) + "</p>";
		document.getElementById("mainSect").insertAdjacentHTML("beforeend", z);
		continue;
	}
	document.getElementById("mainSect").insertAdjacentHTML("beforeend", (w == "") ? sidenavMainSect[x] : sidenavMainSect[x].replace('"./', '"../'));
}
for (x = 0; x < sidenavProjects.length; x++){
	if (w == sidenavProjects[x].match(w)){
		z = "<p>" + sidenavProjects[x].substring(sidenavProjects[x].indexOf(">") + 1, sidenavProjects[x].lastIndexOf("<")) + "</p>";
		document.getElementById("projects").insertAdjacentHTML("beforeend", z);
		continue;
	} 
	document.getElementById("projects").insertAdjacentHTML("beforeend", (w == "") ? sidenavProjects[x] : sidenavProjects[x].replace('"./', '"../')); 
}
document.getElementById("sidenav").style.minHeight = document.documentElement.clientHeight.toString() + "px";

//not sure why minHeight works and min-height doesnt, but if problems arrise try switching to just plain height
