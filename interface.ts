interface IArithmeticclass {
    Add(x:number,y:number):void;
    Sub(x:number,y:number):void;
}
class Arithmetic implements IArithmeticclass{
    Sub(x: number, y: number): void {
        console.log("Addition is :"+(x-y)); 
    }
    Add(x: number, y:number):void{
        console.log("Addition is :"+(x+y));

    }
}
let res:Arithmetic;
res= new Arithmetic();
res.Add(100,200);
res.Sub(100,50);