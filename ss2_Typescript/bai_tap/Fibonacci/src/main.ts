
function fibonacci(n: number) :number{
        if (n <= 2){
            return (n-1);
        }
        return fibonacci(n-2) + fibonacci(n-1);

}


let n = 5;
let sum = 0 ;
function f() {
    for (let i = 1 ; i<=n ; i++){
        console.log(" " + fibonacci(i));
        sum+=fibonacci(i);
    }
    console.log(sum);
}
f();

