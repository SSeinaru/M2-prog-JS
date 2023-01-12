class App
{
    runApplication()
    {
        
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);
        this.tekenhuis(g);
    }

         tekenhuis(g)
    {   
        
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(150,50);
        g.lineTo(100,150);
        g.lineTo(300,200);
        g.lineTo(350,100);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(350,100);
        g.lineTo(400,150);
        g.lineTo(400,250);
        g.lineTo(300,300);
        g.lineTo(100,250);
        g.lineTo(100,150);
        g.lineTo(300,200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(400,150);
        g.lineTo(300,200);
        g.lineTo(300,300);
        g.lineTo(400,250);
        g.closePath();
        g.stroke();

        g.beginPath()
        g.moveTo(125,175);
        g.lineTo(275,212,5);
        g.lineTo(275,262,5);
        g.lineTo(125,225);
        g.closePath();
        g.stroke();

        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(125,175);
        g.lineTo(275,212,5);
        g.lineTo(275,262,5);
        g.lineTo(125,225);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(200,193,5);
        g.lineTo(200,243,5);
        g.closePath();
        g.stroke();

        g.beginPath()
        g.moveTo(125,200);
        g.lineTo(275,237,5);
        g.closePath();
        g.stroke();

        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(325,217,5);
        g.lineTo(380,190);
        g.lineTo(380,260);
        g.lineTo(325,287,5);
        g.closePath();
        g.stroke();
        g.fill()
    }


    
}

let app = new App();
app.runApplication();