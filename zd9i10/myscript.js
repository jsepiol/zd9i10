//zd9

var promise = new Promise((resolve, reject) =>
{
    setTimeout(() => { 
    resolve("Udało się!");
} ,5000);
});
promise.then(wynik => { console.log("zadanie 9 " + wynik)});


//zd10
tekst = "porazka";
var multiplyAsync = (x , y) => 
{ 
return new Promise((resolve, reject) => {
if(typeof x !== 'number' || typeof y !== 'number'){
    
    reject(wynik);
}
else{
    
    resolve(x * y);
}
})

}
multiplyAsync(11,11).then(console.log).catch((error) => {
console.log(tekst);
})
multiplyAsync(11, "tekst").then(console.log).catch((error) => {
console.log(tekst);
})