n=1
y=Math.random(1,10)
y=y*10
y=Math.round(y)
console.log(y)
for (let i=0;i < 3; i++){
    x=prompt("Sisesta üks number 1-10-ni")
    c=x+1
    v=x-1
    n=n+1
    if (c==y){
        prompt("Ai, sa pakkusid väga lähedale.")
    }
    if (v==y){
        prompt("Ai, sa pakkusid väga lähedale.")
    }
    if (x==y){
        prompt(":)")
        break;
    } else {
        prompt(":(")
    }
    if (n==4){
        break;
    }
}
