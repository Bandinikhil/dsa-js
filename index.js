
let start = 0, maxLength = 1;
function longestPalindrome(s){
if(s.length < 2) return s;


function searchSubstring(left,right){

  while (left >=0 && right < s.length && s[left] == s[right]){
    
    if(right-left +1 > maxLength){
     start = left;
     maxLength = right-left+1; 
    }
    right++;
    left--;

  }

}
for(let i=0; i<s.length; i++){
  searchSubstring(i-1,i+1); // odd length palindromes
  searchSubstring(i,i+1);// even length palindromes

}

return s.substring(start, maxLength+start );

}

console.log(longestPalindrome("abacabbacdad"));

