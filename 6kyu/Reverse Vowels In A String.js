// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// My Solution

function reverseVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const strArr = str.split('');
  
    let left = 0;
    let right = strArr.length - 1;
  
    while (left < right) {
      if (vowels.includes(strArr[left]) && vowels.includes(strArr[right])) {
        // Swap the vowels
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
        left++;
        right--;
      } else if (vowels.includes(strArr[left])) {
        // Only the right character is a consonant
        right--;
      } else {
        // Only the left character is a consonant
        left++;
      }
    }
  
    return strArr.join('');
  }
  