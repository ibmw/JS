//Recursion & permutation (FR)
function doPerm(num) {
  //var global pour stocker le résultat des différentes recursions
  var results = [];
  
  //passe d'un int à un string puis à un array
  var numToArr = num.toString().split('');
  
  //var qui nous donne le nombre de recursion (pour le fun)
  var n = 0;
  
  //fonction recursive qui ajoute une solution lorsque arr.length = 0
  function permute(arr, memo) {
    var cur; memo = memo || [];
    n++;
    
    // boucle d'itération pour fixer le curseur sur un chiffre puis
    // on permute les autres chiffres.
    // ex : 123 => 1 23 et 1 32 (1 en première position sur la var "memo")
    //      puis 2 13 et 2 31,  (puis 2)
    //      puis 3 12 et 3 21.  (enfin 3)
    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      
      // lorsque l'on a tous les chiffres contenus 
      // dans notre variable memo,
      // cela veut dire que l'on a une permutation, 
      // on l'enregistre donc dans l'array results.
      if (arr.length === 0) {
        results.push(memo.concat(cur).join(''));
      }
      // petite aide pour decrypter/debugger le fonctionnement de la recursion.
      console.log(">>> permute("+arr.slice()+";"+memo.concat(cur)+")");
      
      // RECURSION
      permute(arr.slice(), memo.concat(cur));
      
      // permet de permuter les chiffres dans l'array
      // reinsert à l'emplacement i de l'array le dernier chiffre retiré
      // /!\ recursion /!\
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  return permute(numToArr);
}
