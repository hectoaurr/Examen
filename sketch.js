let puntoPP, puntoDDA, puntoBH
let puntoInicioPP, puntoInicioDDA, puntoInicioBH
let puntoFinalPP, puntoFinalDDA, puntoFinalBH
let partes, angulo, valor, valorX, valorY, i
let diametro = 200;
let circulo=0;

function setup() {
	createCanvas(windowWidth, windowHeight)
	input = createInput()
	input.position(windowWidth/2-105, 70)

	button = createButton('Partir')
	button.position(input.x + input.width, 70)
	button.mousePressed(greet)
	titulo = createElement('h2', 'Algoritmos PP, DDA, BH')
	titulo.position(windowWidth/2-120, 20)
	etiquetaPP = createElement('h3', 'Circulo PP')
	etiquetaPP.position(windowWidth/4-55, 100)
	etiquetaDDA = createElement('h3', 'Circulo DDA')
	etiquetaDDA.position(windowWidth/4*2-15, 100)
	etiquetaBH = createElement('h3', 'Circulo BH')
	etiquetaBH.position(windowWidth/4*3-40, 100)
	circle(windowWidth/4, 170, diametro)
	circle(windowWidth/4*2, 170, diametro)
	circle(windowWidth/4*3, 170, diametro)

	puntoPP={x:0, y:0}
	puntoDDA={x:0, y:0}
	puntoBH={x:0, y:0}

	frameRate(30)
}|

function draw() {
	

	if(angulo<radians(360) && partes > 1){
		puntoInicioPP={x: windowWidth/4, y:600}
		puntoInicioDDA={x: (windowWidth/4)*2, y:600}
		puntoInicioBH={x: (windowWidth/4)*3, y:600}
		if (circulo<1) {
			circle(puntoInicioPP.x, puntoInicioPP.y,diametro)
			circle(puntoInicioDDA.x, puntoInicioDDA.y,diametro)
			circle(puntoInicioBH.x, puntoInicioBH.y,diametro)
		}
		circulo++;
		valorX=Math.floor(diametro/2*cos(angulo));
		valorY=Math.floor(diametro/2*sin(angulo));
		puntofinalPP={x:Math.floor(puntoInicioPP.x+valorX),y:Math.floor(puntoInicioPP.y+valorY)};
		puntofinalDDA={x:Math.floor(puntoInicioDDA.x+valorX),y:Math.floor(puntoInicioDDA.y+valorY)};
		puntofinalBH={x:Math.floor(puntoInicioBH.x+valorX),y:Math.floor(puntoInicioBH.y+valorY)};

		algoritmoDDA(puntoInicioDDA,puntoFinalDDA);
		algoritmoDDA(puntoFinalDDA,puntoInicioDDA);
		algoritmoBH(puntoInicioBH,puntoFinalBH);

		angulo+= valor;

	}
	
}

function algoritmoPP(p1,p2) {
	var dx=p2.x-p1.x;
	var dy=p2.y-p1.y;

	let x;
    let m,b,y;
    
    m=dy/dx;
    b=p1.y-m*p1.x;

    x=p1.x;
    y=p1.y;
     
    while(x<(p2.x+1)) {
        
        point(x,p1.y)
        x++;
        y=m*x+b; 
    }
}

function algoritmoDDA(p1, p2) {
	var p, xi, yi, k;
	var dx=p2.x-p1.x;
	var dy=p2.y-p1.y;

	point(p1.x, p1.y)

	let y=p1.y,x=p1.x;
	
	if (dx>dy||dy==0) {
		p=dx;
	} else {
		p=dy;
	}

	xi=dx/p;
    yi=dy/p;

	for(k=0;k<p;k++){
		x+=xi;
		y+=yi;
		point(x, y);
	}
}


function algoritmoBH(p1, p2){
	var inicioX=p2.x-p1.x;
	var inicioY=p2.y-p1.y;
	point(p1.x, p1.y)
	var m,b
	let y,x,puntoX,puntoY,p,incE,incNE

	  if (inicioY<0) { 
	    inicioY=-inicioY;
	    puntoY=-1; 
	  } 
	  else{
	  	puntoY=1;
	  }  
	  if (inicioX<0) {  
	    inicioX=-inicioX; 
	    puntoX=-1; 
	  } 
	  else{
	  	puntoX=1;
	  } 
	    
	  x=p1.x;
	  y=p1.y;
	  point(p1.x, y)


	  if(inicioX>inicioY){
	    p=2*inicioY-inicioX;
	    incE=2*inicioY;
	    incNE=2*(inicioY-inicioX);
	    while(x!=p2.x){
	      x+=puntoX;
	      if(p<0){
	        p+=incE;
	      }
	      else {
	        y+=puntoY;
	        p+=incNE;
	      }
	      point(x,y)
	    }
	  }else{
	    p=2*inicioX-inicioY;
	    incE=2*dx;
	    incNE=2*(inicioX-inicioY);
	    while(y!=p2.y){
	      y+=puntoY;
	      if(p< 0){
	        p+=incE;
	      }else {
	        x+=puntoX;
	        p+=incNE;
	      }
	      point(x,y);
	    }
	  }
	}


function greet() {
	background('white');
	circulo=0;
	puntoInicioPP={x: windowWidth/4, y:400};
	puntoInicioDDA={x: (windowWidth/4)*2, y:400};
	puntoInicioBH={x: (windowWidth/4)*3, y:400};
	partes=input.value();
	valor=radians(360/partes);
	angulo=0;
}
	