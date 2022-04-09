let a = 10;
function Outer() {
    let b = 20;
    const inner = () => {
        let c=30;
        console.log(a,b,c);
    }
    inner();
}
Outer();