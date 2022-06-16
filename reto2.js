const TOTAL_CASILLAS = 20; 
 
let b = "ingr usuario por defevto"; 
 
for (let i = 1 ; i <= TOTAL_CASILLAS ; i++){ 
    document.querySelector("#casillas").innerHTML+=` 
    <input id="casillas${i}" type="checkbox"> casilla ${i} <br> 
    `; 
} 
function alternar(){ 
    b = Number(document.querySelector("#alternar_casillas").value); 
    for (let n = 1 ; n <= TOTAL_CASILLAS ; n = n + b){ 
        document.querySelector(`#casillas${n}`).checked = true; 
    } 
}