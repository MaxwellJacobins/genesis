(function(){
	var Phys = {}

	function Entity(props)
	{
		this.pos = new Vec(props.posX, props.posY) //Vec is required
		this.vel = new Vec(props.velX, props.velY)
		this.accel = new Vec(0, 0)
		this.fric = props.fric
		this.R = props.R
		this.col = props.col
	}

	Entity.prototype.run = function(dt)
	{
		this.vel.add(this.accel.copy().mult(dt))
		this.pos.add(this.vel.copy().mult(dt))
	}

	Entity.prototype.render = function(worldCtx)
	{
		Drawer.drawArc(this.pos.x, this.pos.y, this.R, this.col, worldCtx)
	}

	function World(props)
	{
		this.timestep = props.timestep
		this.gravDown = props.gravDown
		this.drawCtx = props.drawCtx
		this.entities = []
	}

	World.prototype.addEntity = function(props)
	{
		props = props || {}
		props.fric = props.fric || 1
		props.R = props.R || 3
		props.col = props.col || "grey"

		var newEntity = new Entity(props)
		this.entities.push(newEntity)
		return newEntity
	}

	World.prototype.clearEntities = function()
	{
		this.entities = []
	}

	World.prototype.run = function(dt)
	{
		dt = dt || this.timestep
		for (var i in this.entities)
			this.entities[i].run(dt)
	}

	World.prototype.render = function()
	{
		for (var i in this.entities)
			this.entities[i].render(this.drawCtx)
	}

	Phys.newWorld = function(props)
	{
		props = props || {}
		props.timestep = props.timestep || 0.04
		props.gravDown = props.gravDown || 9.8

		return new World(props)
	}

	window.Phys = Phys
})()
