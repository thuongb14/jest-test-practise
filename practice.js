function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
  
  function reverseString(str) {
    if (typeof str !== 'string') {
      return 'Not a string';
    }
    const splitStringArray = str.split('');
    const reverseArray = splitStringArray.reverse();
    const newString = reverseArray.join('');
    return newString;
  }
  
  const calculator = {
    add(a, b) {
      if (isValidNumber(a, b)) {
        return a + b;
      }
      return 'Arguments contain non-number';
    },
    substract(a, b) {
      if (isValidNumber(a, b)) {
        return a - b;
      }
      return 'Arguments contain non-number';
    },
    divide(a, b) {
      if (isValidNumber(a, b)) {
        return a / b;
      }
      return 'Arguments contain non-number';
    },
    multiply(a, b) {
      if (isValidNumber(a, b)) {
        return a * b;
      }
      return 'Arguments contain non-number';
    },
  };
  
  function isValidNumber(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return false;
    } else {
      return true;
    }
  }
  
  function caesarCipher(str) {
    let output = '';
  
    // Go through each character
    for (let i = 0; i < str.length; i++) {
      let c = str[i];
  
      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        let code = str.charCodeAt(i);
  
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + 1) % 26) + 65);
        }
  
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + 1) % 26) + 97);
        }
      }
      output += c;
    }
  
    return output;
  }
  
  function analizeArray(arr) {
    if (!isValidArray(arr)) {
      return 'Not an array';
    }
    const sum = arr.reduce((prev, cur) => {
      return prev + cur;
    });
    const avg = sum / arr.length;
    const min = arr.reduce((prev, cur) => {
      return Math.min(prev, cur);
    });
    const max = arr.reduce((prev, cur) => {
      return Math.max(prev, cur);
    });
    const finalArr = {
      average: avg,
      min: min,
      max: max,
      length: arr.length,
    };
    return finalArr;
  }
  
  const isValidArray = (array) => {
    if (Array.isArray(array)) {
      for (let item of array) {
        if (typeof item !== 'number') {
          return false;
        }
      }
    } else {
      return false;
    }
    return true;
  };
  
  export { capitalise, reverseString, calculator, caesarCipher, analizeArray };
  