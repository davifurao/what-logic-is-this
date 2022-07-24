a=1
b=3
c=0

delta=(b*b)-4*a*c;

if(delta<0){
    console.log('não há raiz real para delta')
  
}else if(delta>0){
  raiz=0
  for(i=0;i<=(delta);i++){
    
    if((i*i)==delta){
        raiz=i
      
    }
}

  //x1=-b+i/a*2
   x1=(-b+raiz)/2*a

x2=(-b-raiz)/2*a


console.log('primeira raiz:',x1,'segunda raiz',x2)
}







