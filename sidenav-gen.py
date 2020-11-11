from subprocess import check_output

files = str(check_output(["ls","-go"])).split("\\n")
files.pop(0)
files.pop(len(files) - 1)

parts1 = []
parts2 = []
parts3 = []
mainSect = ""
projects = ""

for x in files:
    parts1.append(x.split(" "))

for x in parts1:
    parts2.append(x[0] + " " + x[-1])

parts1.clear()
for x in parts2:
    parts1.append(x.split(" "))

parts2.clear()
for x in parts1:
    if x[0].find("d") != -1:
        parts2.append(x[1])

parts1.clear()
for x in parts2:
    if x[0].isupper() == True:
        parts1.append(x)
    else:
        parts3.append(x)

for x in parts1:
    mainSect += "'<a href=\"./" + x + "/" + x + ".html\">" + x + "</a>',\n"

for x in parts3:
    projects += "'<a href=\"./" + x + "/" + x + ".html\">" + x + "</a>',\n"

mainSect = mainSect.rstrip(",\n") + "\n"
projects = projects.rstrip(",\n") + "\n"

f = open("sidenav-gen.js", "r")
ham = f.read().split("///")

ham[1] = (
"///\n" +
"var sidenavMainSect = [\n" +
"'<a href=\"../index.html\">Home</a>',\n" +
mainSect +
"];\n" +
"\n" +
"var sidenavProjects = [\n" +
projects +
"];\n" +
"///"
)

f.close()

f = open("sidenav-gen.js", "w")
f.write(ham[0] + ham[1] + ham[2])
f.close()
