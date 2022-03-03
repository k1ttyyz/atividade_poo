class Retangulo{
    constructor (altura,largura){
        this.altura=altura;
        this.largura=largura;

    }
 calcularArea(){
   return this.altura * this.largura
 }
  MostrarArea(){
   return this.altura * this.largura
  
 }
  }
let retangulo1 = new Retangulo(50,100)
console.log(retangulo1.calcularArea())

let retangulo2 = new Retangulo(50,100)
console.log(retangulo2.calcularArea())

let retangulo3 = new Retangulo(50,100)
console.log(retangulo2.MostrarArea())



