// coding challenge 1
const calcAverage= (a,b,c)=> (a+b+c)/3;

let avgDolphins=calcAverage(44,23,71);
let avgKoalas=calcAverage(65,54,49);

const checkWinner=(davg,kavg)=>{
    if (davg>=2*kavg) {
        console.log(`Team Dolphin win(${davg} vs. ${kavg})`);
    } else if(kavg>=2*davg){
        console.log(`Team Koalas win(${kavg} vs. ${davg})`);
    }
    else console.log(`No team wins :/ `);
}

checkWinner(avgDolphins,avgKoalas);
