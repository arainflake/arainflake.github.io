from subprocess import check_output

files = str(check_output(["ls","-go"])).split("\\n")
files.pop(0)
files.pop(len(files) - 1)

parts1 = []
parts2 = []
parts3 = []
mainSect = ""
projects = ""

#takes the output from ls and finds which files are directories
for x in files:
    if (x.startswith("d")):
        parts2.append(x.split(" ")[-1])

#uppercase folders are added to the main section, lowercase to the other
parts1.clear()
for x in parts2:
    if x.endswith("m"):
        parts1.append(x)
    else:
        parts3.append(x)

#builds the respective href tags, excluding the m on the end of the main section directories for the href name
for x in parts1:
    mainSect += "'<a href=\"/" + x + "/\">" + x[:-1].capitalize() + "</a>',\n"

for x in parts3:
    projects += "'<a href=\"/" + x + "/\">" + x + "</a>',\n"

mainSect = mainSect.rstrip(",\n") + "\n"
projects = projects.rstrip(",\n") + "\n"

#opens the js file, splits into 3 parts; before the /// block, inside, and after the block
f = open("sidenav-gen.js", "r")
ham = f.read().split("///")

#index[1] is inside the block. rewrite with updated values
ham[1] = (
"///\n" +
"var sidenavMainSect = [\n" +
"'<a href=\"/\">Home</a>',\n" +
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
