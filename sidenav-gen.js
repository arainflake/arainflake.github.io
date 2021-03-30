
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
//var w = document.URL;
var z;

for (x = 0; x < sidenavMainSect.length; x++){
	y = sidenavMainSect[x].substring(sidenavMainSect.indexOf("\"") + 1, sidenavMainSect[x].lastIndexOf("\""));
	if ((w == "/" || w == "/index.html") && x == 0){
		z = "<p>" + sidenavMainSect[x].substring(sidenavMainSect[x].indexOf(">") + 1, sidenavMainSect[x].lastIndexOf("<")) + "</p>";
		document.getElementById("mainSect").insertAdjacentHTML("beforeend", z);
	} else if (w != "/" && w != "/index.html" && w == y){
		z = "<p>" + sidenavMainSect[x].substring(sidenavMainSect[x].indexOf(">") + 1, sidenavMainSect[x].lastIndexOf("<")) + "</p>";
		document.getElementById("mainSect").insertAdjacentHTML("beforeend", z);
	} else {
		document.getElementById("mainSect").insertAdjacentHTML("beforeend",sidenavMainSect[x]);
	}
}
for (x = 0; x < sidenavProjects.length; x++){
	y = sidenavProjects[x].substring(sidenavProjects.indexOf("\"") + 1, sidenavProjects[x].lastIndexOf("\""));
	if (w != "/" && w != "/index.html" && w == y){
		z = "<p>" + sidenavProjects[x].substring(sidenavProjects[x].indexOf(">") + 1, sidenavProjects[x].lastIndexOf("<")) + "</p>";
		document.getElementById("projects").insertAdjacentHTML("beforeend", z);
	} else{
		document.getElementById("projects").insertAdjacentHTML("beforeend",sidenavProjects[x]);
	}
}
document.getElementById("sidenav").style.minHeight = document.documentElement.clientHeight.toString() + "px";

//not sure why minHeight works and min-height doesnt, but if problems arrise try switching to just plain height
