import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  nome:String;
  resultado:String;

  saudacao(){
    this.resultado = "Boa noite "+this.nome;

  }
}
