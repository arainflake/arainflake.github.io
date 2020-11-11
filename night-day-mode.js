function nightDayMode()
{
	var x = document.getElementById("day-night-png");	
	var y = document.getElementById("day-css");
	var z = document.getElementById("night-css");
	
	if (x.src.match("sun.png") == "sun.png")
	{
		//night mode
		x.src = "./moon.png";
		y.disabled = false;
		z.disabled = true;
	}
	else
	{
		//day mode
		x.src = "./sun.png";
		y.disabled = true;
		z.disabled = false; 
	}
}

