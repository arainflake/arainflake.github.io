function nightDayMode()
{
	var x = document.getElementById("day-night-png");	
	var y = document.getElementById("day-css");
	var z = document.getElementById("night-css");
	
	if (x.src.match("sun.svg") == "sun.svg")
	{
		//night mode
		x.src = "./moon.svg";
		y.disabled = false;
		z.disabled = true;
	}
	else
	{
		//day mode
		x.src = "./sun.svg";
		y.disabled = true;
		z.disabled = false; 
	}
}

