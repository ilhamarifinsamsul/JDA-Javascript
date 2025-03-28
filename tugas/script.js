function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedStr = cleanedStr.split("").reverse().join("");
  // Check if the string is equal to its reverse
  return cleanedStr === reversedStr ? "benar" : "salah";
}

// Example usage
console.log(isPalindrome("wadidaw"));
console.log(isPalindrome("12/02/2021"));
console.log(isPalindrome("jabar"));
console.log(isPalindrome("dont't nod"));
console.log(isPalindrome("forwards"));
