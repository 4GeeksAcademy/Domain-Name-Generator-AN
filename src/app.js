let pronoun = ["the", "our", "his"];
let adj = ["great", "big", "amazing"];
let noun = ["jogger", "racoon", "dogcom", "merchant", "driverus", "es"];
let ext = [".com", ".net", ".us", ".es"];
// generating the domains

// // for (let i = 0; i < pronoun.length; i++) {
//   for (let j = 0; j < adj.length; j++) {
//     for (let k = 0; k < noun.length; k++) {
//       for (let a = 0; a < ext.length; a++) {
//         let dominio = pronoun[i] + adj[j] + noun[k] + ext[a];
//         console.log(dominio);
//       }
//     }
//   }
// }

/** ESTA ES LA DEPURACIÓN DEL CÓDIGO 
 * Uso el For of para moverme sobre los arrays
 * Las variables [p,a,n,e], cada una representan cada elemento del array respectivo.
 * @dominio - aquí sumo las variables hechas en los for porque son los elementos de los arrays y con el método For of se van pasando todos los elementos.
*/

for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
          for(let e of ext){
          let dominio = p + a + n + e;
          console.log(dominio);       
      }
    }
  }
}
