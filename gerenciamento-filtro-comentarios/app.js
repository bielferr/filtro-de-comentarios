
// filtrar as palavras

function filterWords(words = "" ){
  if(typeof words != "string") return []


  var lowerCase = words.toLowerCase();
  var normaliza = lowerCase.replace(/,/g, " ")

  var score = normaliza.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
  var separate = score.split(/\s+/)
  var bigger = separate.filter(words => words.length > 0);
  
  var unique = [...new Set(bigger)]
  return unique ;
  
}

//lista de palavras banidas 

const wordsBan = ["puta", "burro", "fdp", "idiota", "caralho", "tnc"];

function analisingComent(coment = ""){
  const words = filterWords(coment);
  const ofesing = words.some(p => wordsBan.includes(p))

  
  if  (ofesing){
    return " 🚫 PALAVRA BLOQUEADA PELO FILTRO"
  }else {
    return words.join(" ")
  }
  

}

function checkcoment(){
  const check = document.getElementById("comentario").value;
  const result = analisingComent(check);
  document.getElementById("result").innerText = result;


}

console.log(analisingComent())
