//python generated section between '///'
///
var sidenavMainSect = [
'<a href="../">Home</a>',
'<a href="./Links/Links.html">Links</a>',
'<a href="./Notes/Notes.html">Notes</a>',
'<a href="./Videos/Videos.html">Videos</a>'
];

var sidenavProjects = [
'<a href="./project1/project1.html">project1</a>',
'<a href="./project2/project2.html">project2</a>'
];
///
//python generated section between '///'

var y = window.location.pathname;
var w = document.URL;
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
