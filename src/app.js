// Listas de pronombres, adjetivos, sustantivos y extensiones
let pronouns = ['the', 'our', 'my'];
let adjectives = ['great', 'big', 'cool'];
let nouns = ['jogger', 'racoon', 'website'];
let extensions = ['.com', '.net', '.us', '.io', '.es'];


function generateDomainCombinations() {
  let domainCombinations = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          let domain = pronouns[i] + adjectives[j] + nouns[k] + extensions[l];
          domainCombinations.push(domain);
        }
      }
    }
  }

  return domainCombinations;
}


let allDomainCombinations = generateDomainCombinations();


allDomainCombinations.forEach(domain => {
  console.log(domain);
});
