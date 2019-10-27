/* pixel renderer */
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
ctx.canvas.width = 600
ctx.canvas.height = 500
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

function setPoint(x, y, edge=1, line_helper=0){

    if(line_helper){
        x_position = x *dot
        y_position = (ctx.canvas.height-dot)-y *dot
    }else{
        x_position = (x+center[0]) *dot
        y_position = (ctx.canvas.height-dot)-(y+center[1]) *dot
    }

    if(edge){
        // with +1 dot edge
        x_position = x_position -dot/2
        y_position = y_position -dot/2
        ctx.fillRect(x_position, y_position, dot*2, dot*2)
    }else{
        // without edge
        ctx.fillRect(x_position, y_position, dot, dot)
    }

}

/* variable for each pixel */
dot_color = 'white'
line_color = 'gray'
const dot = 2
/* variable for each pixel */

/* coordinat line */
center=[12,12]
ctx.fillStyle = line_color
for(ix=0; ix<ctx.canvas.width/dot; ix++)
    setPoint(ix, center[1], 0, 1)
for(iy=0; iy<ctx.canvas.height/dot; iy++)
    setPoint(center[0], iy, 0, 1)
/* coordinat line */

ctx.fillStyle = dot_color
/* end pixel renderer */