import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularz';
  imieNazwisko:string = "";
  email:string = "Prosze podac email";
  produkt:string = "";
  ilosc:number = 1;
  wiadomosc:string = "Jesli masz uwagi wpisz je tutaj";

  /* 
  gdy mamy click onSubmit w buttonie 
  onSubmit(){
    console.log(this.imieNazwisko,"dziekujemy za zamowienie",this.produkt,"w ilosci",this.ilosc,"Szczegoły wysłane na maila", this.email,"dziekujemy za uwagi:",this.wiadomosc);
  }
  
  
  */
  

}
