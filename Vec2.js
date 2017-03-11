function Vec(x, y)
{
	this.x = x
	this.y = y
}

Vec.prototype.copy = function()
{
	return new Vec(this.x, this.y)
}

Vec.prototype.set = function(vec)
{
	this.x = vec.x
	this.y = vec.y
	return this
}

Vec.prototype.reverse = function()
{
	this.x *= -1
	this.y *= -1
	return this
}

Vec.prototype.add = function(vec)
{
	this.x += vec.x
	this.y += vec.y
	return this
}

Vec.prototype.sub = function(vec)
{
	this.x -= vec.x
	this.y -= vec.y
	return this
}

Vec.prototype.mult = function(val)
{
	if (val instanceof Vec)
	{
		this.x *= val.x
		this.y *= val.y
	} else
	{
		this.x *= val
		this.y *= val
	}
	return this
}

Vec.prototype.div = function(val)
{
	if (val instanceof Vec)
	{
		this.x /= val.x
		this.y /= val.y
	} else
	{
		this.x /= val
		this.y /= val
	}
	return this
}

Vec.prototype.getMag = function()
{
	return Math.sqrt(this.x * this.x + this.y * this.y)
}

Vec.prototype.getAngle = function()
{
	return Math.atan2(this.y, this.x)
}

Vec.prototype.getNorm = function()
{
	var mag = this.getMag()
	return new Vec(this.x/mag, this.y/mag)
}

Vec.prototype.setMag = function(toMag)
{
	var angle = this.getAngle()
	this.x = Math.cos(angle) * toMag
	this.y = Math.sin(angle) * toMag
	return this
}

Vec.prototype.setAngle = function(toAngle)
{
	var mag = this.getMag()
	this.x = Math.cos(toAngle) * mag
	this.y = Math.sin(toAngle) * mag
	return this
}
