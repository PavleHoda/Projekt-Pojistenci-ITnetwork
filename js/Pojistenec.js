'use strict';

class Pojistenec {

  constructor(jmeno, prijmeni, vek, telefon) {
      this.jmeno = jmeno;
      this.prijmeni = prijmeni;
      this.vek = vek;
      this.telefon = telefon;
      this.pojistenci = [];
  }

  toString() {

    // mezi bunkami, byly čárky 
    return `<td>${ this.jmeno + " " + this.prijmeni}</td>  <td> ${this.telefon}</td> <td> ${this.vek}</td>`;
}
}


