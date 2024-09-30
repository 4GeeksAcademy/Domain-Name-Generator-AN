let pronoun = ["the", "our", "his"];
let adj = ["great", "big", "amazing"];
let noun = ["jogger", "racoon", "dogcom", "merchant", "driverus","es"];
let ext = [".com",".net",".us",".es"];
// generating the domains

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let a = 0; a < ext.length; a++){
       
       let dominio = pronoun[i] + adj[j] + noun[k] + ext[a];
       console.log(dominio);
       }
  }
}
}
