import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class mapaPage {
 
  lat: number = -12.0907516;
  lng: number = -77.0291872;
  constructor(public navCtrl: NavController,
    private params: NavParams,private view: ViewController) {
    
  }

  closeModal() {
    this.view.dismiss();
}


}
