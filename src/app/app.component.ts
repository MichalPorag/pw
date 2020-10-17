import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = "";
  isLettersIncludes = false;
  isNumbersIncludes = false;
  isSymbolsIncludes = false;
  passwordLength = 0;

  onButtonClick() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";
    let validChars = "";

    if (this.isLettersIncludes) {
      validChars += letters;
    }
    if (this.isNumbersIncludes) {
      validChars += numbers;
    }
    if (this.isSymbolsIncludes) {
      validChars += symbols;
    }

    let generatedPassword = "";
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onCheckboxChange(dataToChagne) {
    switch (dataToChagne) {
      case "letters":
        this.isLettersIncludes = !this.isLettersIncludes;
        break;
      case "numbers":
        this.isNumbersIncludes = !this.isNumbersIncludes;
        break;
      case "symbols":
        this.isSymbolsIncludes = !this.isSymbolsIncludes;
        break;
    
      default:
        console.error("Params not work");
        break;
    }
  }

  onChangeLength(e: string) {
    const parsedValue = parseInt(e);
    console.log("parsedValue: ", parsedValue);
    
    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    }
    if (isNaN(parsedValue)) {
      this.passwordLength = 0;
    }
  }

  getPassword() {
    return this.password;
  }

  getIsLettersIncludes() {
    return this.isLettersIncludes;
  }

  getIsNumbersIncludes() {
    return this.isNumbersIncludes;
  }

  getIsSymbolsIncludes() {
    return this.isSymbolsIncludes;
  }

  getPasswordLength() {
    return this.passwordLength;
  }
}
