(function(){
	var drawArc = function(posX, posY, R, fillStyle, ctx)
	{
		ctx.beginPath()
		ctx.arc(posX, posY, R, 0, Math.PI * 2)
		ctx.fillStyle = fillStyle
		ctx.fill()
	}
	
	var drawLine = function(posX1, posY1, posX2, posY2, thick, strokeStyle, ctx)
	{
		ctx.beginPath()
		ctx.moveTo(posX1, posY1)
		ctx.lineTo(posX2, posY2)
		ctx.lineWidth = thick
		ctx.strokeStyle = strokeStyle
		ctx.stroke()
	}

	window.Drawer = {
		drawArc: drawArc,
		drawLine: drawLine
	}
})()
