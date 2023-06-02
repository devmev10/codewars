// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// My Solution

function validatePIN(pin) {
    if (pin.length === 4 || pin.length === 6) { // Check if the PIN length is either 4 or 6 digits
      if (/^\d+$/.test(pin)) { // Check if the PIN consists of only digits
        return true;
      }
    }
    return false;
  }