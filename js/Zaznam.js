'use strict';

class Zaznam {
    /* 
      vytvořil konstruktor pro záznam 
    */
    constructor() {
      // nastavení atributů pro vytvoření záznamu
      this.jmeno = document.getElementById('jmeno');
      this.prijmeni = document.getElementById('prijmeni');
      this.vek = document.getElementById('vek');
      this.telefon = document.getElementById('telefon');
      const data = localStorage.getItem('pojistenci');
      this.pojistenci = data ? JSON.parse(data) : [];
      this.tlacitko = document.getElementById('submit');
      this.nacistData();
    }
  
    pridat() {
      // vytvoření objektu 
      // úprava načítání dat z inputů 
      const obsahRadku = new Pojistenec(this.jmeno.value, this.prijmeni.value, this.vek.value, this.telefon.value);
     
      // přidání záznamu do pole
      this.pojistenci.push(obsahRadku);
    
      // uložení dat do localStorage
      localStorage.setItem('pojistenci', JSON.stringify(this.pojistenci));
      
      // tvoříme řádek tabulky
      const radekTabulky = document.createElement('tr');
    
      // nastavení obsahu řádku
      radekTabulky.innerHTML = obsahRadku;
    
      // přidání řádku do tabulky
      const tabulka = document.querySelector('table');
      tabulka.appendChild(radekTabulky);
    }
    
  
    novyZaznam() {
      this.tlacitko.addEventListener('click', (e) => {
        e.preventDefault();
        this.pridat();
      });
    }
  
    nacistData() {
      // načtení dat z localStorage
      const data = localStorage.getItem('pojistenci');
      if (data) {
        const seznam = JSON.parse(data);
    
        for (let i = 0; i < seznam.length; i++) {
          const radekTabulky = document.createElement('tr');
          const pojistenec = seznam[i];
  
          // vytvoření nového objektu s načtenými daty
          const obsahRadku = new Pojistenec(pojistenec.jmeno, pojistenec.prijmeni, pojistenec.vek, pojistenec.telefon);
          
          // nastavení obsahu řádku
          radekTabulky.innerHTML = obsahRadku;
         
          const tabulka = document.querySelector('table');
          tabulka.insertAdjacentHTML('beforeend', radekTabulky.outerHTML);
        }
      }
    }
  }
  