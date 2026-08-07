const temp = 380; 
const freioPress = true; 
const Perigo = temp >= 267;
const uso_Intenso = temp > 300 && freioPress === true;
const freio_Seguro = temp < 400 && temp >= 50;
const alerta_Painel = temp > 400 || temp < 0;
const Inativo = !freioPress;

console.log("Alerta de Perigo:", Perigo);    
console.log("Uso Intenso:", uso_Intenso);          
console.log("Freio Seguro:", freio_Seguro);        
console.log("Alerta no Painel:", alerta_Painel);    
console.log("Estado Inativo:", Inativo);
