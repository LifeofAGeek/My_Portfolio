
class dot{
	constructor(x, y, xSpeed, ySpeed, mass, color)
	{
		this.x = x;
		this.y = y;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
		this.xAcc = 0;
		this.yAcc = 0;
		this.mass = mass;
		this.color = color;
	}
	
	shape()
	{	
		pen.arc(this.x, this.y, 3, 0, 2*Math.PI);
		pen.fillStyle = this.color;
		pen.fill();	
	}
	
	update()
	{
		// this.xSpeed += this.xAcc;
		// this.ySpeed += this.yAcc;
		this.x++;
		this.y++;
		
	}
	updateCol()
	{
		this.colorR = Math.random()*225;
		this.colorB = Math.random()*225;
		this.colorG = Math.random()*225;
	}
	check()
	{
		if(this.x <= 0 || this.x >= canvas.width)
			this.xSpeed = -this.xSpeed;
		else if(this.y >= canvas.height || this.y <= 0)
			this.ySpeed = -this.ySpeed;
	}
}


function mapThese(thisVal, thisMin, thisMax, thatMin, thatMax)
{
	return (((thisVal - thisMin)/((thisMax - thisMin))*(thatMax - thatMin)) + thatMin);
}

function calcGravityForce(m1, m2, d){
	return (G*m1*m2)/(d*d);
}

function interact()
{
	var count = 0;
	dots.sort((a, b) => a.x - b.x);
	for(var i = 0; i < dots.length; ++i){
		dots[i].xAcc = 0;
		dots[i].yAcc = 0;
        for(var j = i + 1;(j < dots.length && dots[j].x <= (dots[i].x + maxDist)); ++j){
            var distance = (dots[i].x-dots[j].x)*(dots[i].x-dots[j].x)+(dots[i].y-dots[j].y)*(dots[i].y-dots[j].y);
			count++;
            if(distance <= maxDist*maxDist){
				let force = calcGravityForce(dots[i].mass, dots[j].mass, distance), sinTheta = (dots[i].y - dots[j].y)/distance, cosTheta = (dots[i].x - dots[j].x)/distance;
				dots[i].xAcc += (force*cosTheta)/dots[i].mass;
				// dots[j].xAcc += (force*cosTheta)/dots[j].mass;
				dots[i].yAcc += (force*sinTheta)/dots[i].mass;
				// dots[j].yAcc += (force*sinTheta)/dots[j].mass;
                let wt = mapThese(distance, 0, maxDist*maxDist, 0.5, 0);
				pen.beginPath();
				pen.moveTo(dots[i].x, dots[i].y);
				pen.lineTo(dots[j].x, dots[j].y);
				pen.lineWidth = wt;
                pen.strokeStyle = 'rgb(' + 225 + ',' + 225 + ',' + 225 + ')';
				pen.stroke();
            }
        }
    }
}

function setup()
{
	var numberOfParticles = 2 || Math.floor(mapThese(window.innerWidth, 350, 1400, 20, 70));
	// for(var i = 0; i < numberOfParticles; ++i)
		dots.push(new dot(canvas.height/2, canvas.width/2, 0, 0, 10000000000000000000000, "#ffba00"));
		dots.push(new dot(500, 800, 50, 50, 1000000000000, "#058391"));
	console.log(numberOfParticles);
}

function draw()
{
	colorCount++;
	var count = 0;
	for(var i = 0; i < dots.length; ++i)
	{
		if(dots[i].x < 0 || dots[i].x > canvas.width || dots[i].y < 0 || dots[i].y > canvas.height)
			count++;
	}
	pen.clearRect(0, 0, canvas.width, canvas.height);
	for(var i = 0; i < dots.length; ++i)
	{
		pen.beginPath();
		pen.moveTo(dots[i].x, dots[i].y);
		dots[i].shape();
	}
	// interact();
	for(var i = 0; i < dots.length; ++i)
	{
		for(int i = 0zzzz)
		dots[i].update();
		dots[i].check();
	}
}
setup();
setInterval(draw, 45);