import { LifecycleEventsPage } from './../lifecycle-events/lifecycle-events';
import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage():void{
    this.navCtrl.push(ContactPage, {
      type: 'push'
    });
  }

  lifeCycle():void{
    this.navCtrl.push(LifecycleEventsPage)
    .then((authorizedAccess: boolean) => {
         
      if(authorizedAccess) {        
        console.log('Page pushed!');
      } else {
        console.log('Acesso não autorizado!');
      }
    
    }).catch(error => {
      console.log('Mensagem se houver erro.', error);        
    });
  }

  setRoot():void{
    this.navCtrl.setRoot(ContactPage,{
      type: 'setRoot'
    });
  }

}
