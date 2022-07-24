//Implementar um programa capaz de:
//Computar a distância entre dois pontos tridimensionais;


//utilizarei o método Math.sqrt()

//dados dois pontos A(xa,ya,za) e B(xb,yb,zb)
//a distância é dada por : 
//  d=√(xb-xa)²+(yb-ya)²+(zb-za)²



xa=4;
ya=-8;
za=-9;

xb=2;
yb=-3;
zb=-5;


x=(xb-xa)*(xb-xa);
y=(yb-ya)*(yb-ya);
z=(zb-za)*(zb-za);


soma=x+y+z;

d=Math.sqrt(soma);

console.log(d)

