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