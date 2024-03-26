import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name:string = 'brian';
  public generd :'male'|'famele' = 'male';
  public invitationMap = {
    'male':'invitarlo',
    'famele':'invitarla',
  };

  changeClient():void{
    this.name = 'silvia';
    this.generd = 'famele';
  };

  // i18Plural
  public clients: String[] = ['brian','emanuel','daiana','dario','matias','silvia','elsa','miguel'] 
  public clientMap = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }


  deletClient():void{
    this.clients.shift();
  }

  //KeyValue pipe
  public person = {
    name:'brian',
    age:'24',
    address:'Buenos Aires, Argentina'
  }

  //Async pipe
  // public myObservableTimer: Observable<number> = interval(2000).pipe(
  //   tap(value => console.log('tap:',value))
  // )

  /*public promiseValue:Promise<string> = new Promise( (resolve, reject) =>{
    setTimeout(()=>{
      resolve('tenemos data en la promesa.')
    },3500)
  } )*/
}
