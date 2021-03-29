const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type=true) {
    this.type = type;
  }
  
  encrypt(message, key, type) {
    const alphabit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result='';
    let newKey='';
    let newMessage = message.toUpperCase();
    if(key.length < message.length) {
      newKey = (key.padEnd(message.length, key)).toUpperCase();
    }
    else {
      newKey = key.toUpperCase();
    }
    for(let i = 0, j = 0; i < newMessage.length; i++, j++) {
      if(alphabit.includes(newMessage[i])) {
        result = result + alphabit[(alphabit.indexOf(newMessage[i]) + alphabit.indexOf(newKey[j])) % alphabit.length];
      }
      else {
        result = result + newMessage[i];
        j--;        
      }
    }
    return this.type ? result : result.split('').reverse().join('');
  }    
  decrypt(message, key, type) {
    const alphabit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result='';
    let newKey='';
    let newMessage = message.toUpperCase();
    if(key.length < message.length) {
      newKey = (key.padEnd(message.length, key)).toUpperCase();
    }
    else {
      newKey = key.toUpperCase();
    }
    for(let i = 0, j = 0; i < newMessage.length; i++, j++) {
      if(alphabit.includes(newMessage[i])) {
        result = result + alphabit[(alphabit.indexOf(newMessage[i]) + alphabit.length - alphabit.indexOf(newKey[j])) % alphabit.length];
      }
      else {
        result = result + newMessage[i];
        j--;        
      }
    }
    return this.type ? result : result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
