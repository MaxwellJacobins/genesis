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
		this.x *= fac
		this.y *= fac
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
		this.x /= fac
		this.y /= fac
	}
	return this
}

Vec.prototype.getMag = function()
{
	return Math.sqrt(this.x * this.x + this.y * this.y)
}

Vec.prototype.getNorm = function()
{
	var mag = this.getMag()
	return new Vec(this.x/mag, this.y/mag)
}
