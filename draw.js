function mos() {
    var ctx = document.getElementById('mos').getContext('2d');
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.strokeRect(30, 70, 240, 130)
    ctx.strokeRect(30, 70, 70, 50)
    ctx.strokeRect(200, 70, 70, 50)
    //ctx.fillRect(0, 20, 100, 50)
    //ctx.fillRect(200, 20, 100, 50)

    ctx.strokeRect(100, 50, 100, 10)
    ctx.strokeRect(100, 60, 100, 10)
    ctx.font = "20px serif"
    ctx.fillText("Vd", 170, 20)
    ctx.fillText("n+", 50, 100)
    ctx.fillText("n", 145, 100)
    ctx.fillText("n+", 220, 100) 

    ctx.strokeRect(10, 20, 0, 75);
    ctx.strokeRect(10, 95, 20, 0);
    ctx.strokeRect(10, 20, 130, 0);
    ctx.strokeRect(140, 10, 0, 20)
    ctx.strokeRect(160, 0, 0, 40)
    ctx.strokeRect(160, 20, 130, 0)

    ctx.strokeRect(270, 95, 20, 0);
    ctx.strokeRect(290, 20, 0, 75);

    ctx.setLineDash([15, 5]);
    ctx.strokeRect(100, 120, 100, 0)
    return;
}
function pn() {
    var ctx = document.getElementById('mos').getContext('2d');
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.strokeRect(30, 70, 240, 70)
    ctx.strokeRect(150, 70, 0, 70)
    //ctx.fillRect(0, 20, 100, 50)
    //ctx.fillRect(200, 20, 100, 50)

    ctx.font = "30px serif"
    ctx.fillText("V", 170, 20)
    ctx.fillText("p", 75, 110)
    ctx.fillText("n", 200, 110) 

    ctx.strokeRect(10, 20, 0, 85);
    ctx.strokeRect(10, 105, 20, 0);
    ctx.strokeRect(10, 20, 130, 0);
    ctx.strokeRect(140, 0, 0, 40)
    ctx.strokeRect(160, 10, 0, 20)
    ctx.strokeRect(160, 20, 130, 0)

    ctx.strokeRect(270, 105, 20, 0);
    ctx.strokeRect(290, 20, 0, 85);
    return;
}