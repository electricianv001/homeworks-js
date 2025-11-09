function isPalindrome(s = "") {
  const clean = s.toLowerCase().replace(/[^\p{L}\p{N}]/gu, ""); 
  const rev = [...clean].reverse().join("");
  return clean.length > 0 && clean === rev;
}

function report(word) {
  console.log(
    isPalindrome(word)
      ? `Слово ${word} является палиндромом`
      : `Слово ${word} не является палиндромом`
  );
}


report('привет');                    
report('Сантимент');                 
report('Довод');                     
report('А роза упала на лапу Азора'); 

