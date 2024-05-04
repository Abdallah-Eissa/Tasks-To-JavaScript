    let userName = "Elzero";
      console.log(userName[0].toLowerCase()); // e
      console.log(userName.charAt(0).toLowerCase()); // e
      console.log(userName.slice(0, 1).toLowerCase()); // e
      console.log(userName.substring(0, userName.length - 5).toLowerCase()); // e
      console.log(userName.substr(0, 1).toLowerCase()); // e
      console.log(userName.substring(0, 1).toLowerCase().repeat(3)); // eee
// -----------------------------------------------------------------------------------------
    let word = "Elzero";
    let letterZ = "z";
    let letterE = "e";
    let letterO = "O";
      console.log(word.toUpperCase().includes("Z")); // True
      console.log(word.startsWith("e",3)); // True
      console.log(word.toUpperCase().endsWith("O")); // True
