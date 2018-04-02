import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-lifecycle-events',
  templateUrl: 'lifecycle-events.html',
})
export class LifecycleEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter(): Promise<any> {
    console.log('01 - ionViewCanEnter LifecycleEventsPage');
    //return true;  

    return new Promise((resolve, reject) => {
      console.log('Aguardando 2 segundos...');

      setTimeout(() => {
        let number = Math.round(Math.random() * 100);

        if(number % 2 == 0){
          resolve();
          console.log(`${number} - Autorizado`);        
        } else {
          reject();
          console.log(`${number} - Não Autorizado`);  
        }
      },2000);   
    });
  }

  ionViewDidLoad() {
    console.log('02 - ionViewDidLoad LifecycleEventsPage');
  }

  ionViewWillEnter() {
    console.log('03 - ionViewWillEnter LifecycleEventsPage');
  }

  ionViewDidEnter() {
    console.log('04 - ionViewDidEnter LifecycleEventsPage');
  }

  ionViewCanLeave(): boolean {
    console.log('05 - ionViewCanLeave LifecycleEventsPage');
    return true;   
  }

  ionViewWillLeave() {
    console.log('06 - ionViewWillLeave LifecycleEventsPage');
  }

  ionViewDidLeave() {
    console.log('07 - ionViewDidLeave LifecycleEventsPage');
  }

  ionViewWillUnload() {
    console.log('08 - ionViewWillUnload LifecycleEventsPage');
  }

  onPop(): void {
    this.navCtrl.pop()
    .then((authorizedAccess: boolean) => {
         
      if(authorizedAccess) {        
        console.log('Page popped!');
      } else {
        console.log('Saída não autorizada!');
      }
    
    }).catch(error => {
      console.log('Mensagem se houver erro.', error);        
    });
  }
}
