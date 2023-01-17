let goc = document.getElementById("góc")
let v0 = document.getElementById("v0")
let btn = document.getElementById("btn")
let g = 10
let a = document.getElementById("params_a")
let b = document.getElementById("params_b")
let c = document.getElementById("params_c")
let info = document.getElementById("info")
let h =document.getElementById("docao")
btn.addEventListener("click", function(){
  if(
    goc.value>180 || goc.value<0
  ){
    alert("Bạn phải nhập số góc từ 0 tới 180")
  }
  else if(
    v0.value<0
  ){
    alert("Bạn phải nhập vận tốc là số dương")
  }
  else if(
    h.value<0
  ){
    alert("Độ cao vật phải là số dương")
  }
  else{
    let vx = v0.value*Math.cos(goc.value*Math.PI/180)
    let vy = v0.value*Math.sin(goc.value*Math.PI/180)   
    let t = ((2*v0.value*Math.sin(goc.value*Math.PI/180))/g)
    let H = ((v0.value**2 * Math.sin(goc.value*Math.PI/180)**2)/2*g)/100
    let L = (v0.value**2 * Math.sin(2*goc.value*Math.PI/180))/g
    a.value=-g/(2*v0.value**2*Math.cos(goc.value*Math.PI/180)**2)
    b.value = Math.tan(goc.value*Math.PI/180)
    c.value = h.value
    console.log("Góc : " + goc.value + " độ")
    console.log("Vận tốc ban đầu : " + v0.value + " m/s")
    console.log("Độ cao lúc vật bị ném : " + h.value + "m")
    console.log("Vận tốc ban đầu trên trục x : " + vx+ " m/s")
    console.log("Vận tốc ban đầu trên trục y : " + vy + " m/s")
    console.log("Thời gian chuyển động : " + t + " s")
    console.log("Độ cao cực đại : " + H + " m")
    console.log("Tầm xa tính theo phương ngang : "+ L + " m")
    
    
    h.value= ""
    goc.value =""
    v0.value = ""
  }

    
})



class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    toRelative() {
      return new Point(
        (this.x - width / 2) / cellSide,
        -(this.y - height / 2) / cellSide
      );
    }
  
    toAbsolute() {
      return new Point(
        this.x * cellSide + width / 2,
        -this.y * cellSide + height / 2
      );
    }
  }
  
  class Parabola {
    constructor(a, b, c) {
      [a, b, c] = [a, b, c].map((value) => [null, Infinity, -Infinity, undefined, NaN].includes(value) ? 0 : value);
  
      [this.a, this.b, this.c] = [a, b, c];
    }
  
    value(x) {
      return this.a * x * x + this.b * x + this.c;
    }
  
    static fromThreePoints(p1, p2, p3) {
      const a =
        (p3.y - (p3.x * (p2.y - p1.y) + p2.x * p1.y - p1.x * p2.y) / (p2.x - p1.x)) 
        /
        (p3.x * (p3.x - p1.x - p2.x) + p1.x * p2.x);
  
      const b = (p2.y - p1.y) / (p2.x - p1.x) - a * (p1.x + p2.x);
      const c = (p2.x * p1.y - p1.x * p2.y) / (p2.x - p1.x) + a * p1.x * p2.x;
  
      return new Parabola(a, b, c);
    }
  }
  
  CanvasRenderingContext2D.prototype._line = function (p1, p2) {
    this.beginPath();
    this.moveTo(p1.x, p1.y);
    this.lineTo(p2.x, p2.y);
    this.stroke();
  };
  
  CanvasRenderingContext2D.prototype.line = function (x1, y1, x2, y2) {
    const [p1, p2] =
      x2 != undefined && y2 != undefined
        ? [new Point(x1, y1), new Point(x2, y2)]
        : [x1, y1];
  
    this._line(p1, p2);
  };
  
  CanvasRenderingContext2D.prototype.point = function (point, radius) {
    this.beginPath();
    this.arc(point.x, point.y, radius, 0, 2 * Math.PI);
    this.fill();
  };
  
  document.addEventListener("DOMContentLoaded", main);
  
  const [width, height] = [800, 800];
  const center = new Point(width / 2, height/ 2);
  const cellSide = 20;
  const points = [];
  
  function main() {
    const canvas = document.querySelector("canvas");
    [canvas.width, canvas.height] = [width, height];
    const context = canvas.getContext("2d");
  
    const inputs = "abc"
      .split("")
      .map((letter) => document.querySelector(`#params_${letter}`));
  
    function drawAxis(lengthX, lengthY) {
      context.fillStyle = "#000000";
      context.strokeStyle = "#000000";
      context.lineWidth = 3;
  
      context.line(center.x - lengthX, center.y, center.x + lengthX, center.y);
      context.line(center.x, center.y - lengthY, center.x, center.y + lengthY);
  
      for (let i = 1, offset = cellSide; offset < lengthX; i++, offset += cellSide) {
        // x+
        context.line(
          center.x + i * cellSide,
          center.y + 4,
          center.x + i * cellSide,
          center.y - 4
        );
        context.fillText(i, center.x + offset - 3, center.y - 5);
        // x-
        context.line(
          center.x - i * cellSide,
          center.y + 4,
          center.x - i * cellSide,
          center.y - 4
        );
        context.fillText(-i, center.x - offset - 3, center.y - 5);
      }
  
      for ( let i = 1, offset = cellSide; offset < lengthY; i++, offset += cellSide ) {
        // y-
        context.line(
          center.x + 4,
          center.y + offset,
          center.x - 4,
          center.y + offset
        );
        context.fillText(-i, center.x + 6, center.y + offset + 3);
        // y+
        context.line(
          center.x + 4,
          center.y - offset,
          center.x - 4,
          center.y - offset
        );
        context.fillText(i, center.x + 6, center.y - offset + 3);
      }
    }
  
    function drawParabola(parabola, pointsPerCell) {
      const points = new Array(Math.floor((width / cellSide) * pointsPerCell))
        .fill()
        .map((_, x, points) => x - Math.floor(points.length / 2))
        .map((x) => x / pointsPerCell)
        .map((x) => new Point(x, parabola.value(x)))
        .map((p) => p.toAbsolute());
  
      context.strokeStyle = "#333333";
      for (let i = 1; i < points.length; i++)
        context.line(points[i - 1], points[i]);
    }
  
    canvas.addEventListener("click", function (event) {
    //   
      if (points.length > 3) points.shift();
  
    //   if (points.length == 3) {
    //     parabola = Parabola.fromThreePoints(...points.map((p) => p.toRelative()));
  
    //     inputs.forEach((input) => {
    //       input.value = parabola[input.placeholder].toFixed(3);
    //       input.setAttribute("size", input.value.length);
    //     });
    //   }
  
      frame();
    });
  
    document.querySelectorAll(".input--resizable").forEach((input) => {
      input.addEventListener("input", () => {
        input.setAttribute("size", input.value.length);
        frame();
      });
    });
  
    function frame() {
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      drawAxis(360, 360);
  
      const parabola = new Parabola(...inputs.map((input) => +input.value));
      drawParabola(parabola, 4);
  
      context.fillStyle = "#ff0000";
      points.forEach((point) => context.point(point, 4));
  
      // setTimeout(() => requestAnimationFrame(frame), 100);
    }
  
    frame();
  }
  
