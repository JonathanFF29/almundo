import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { mapaPage } from '../mapa/mapa';

@Component({
  selector: 'page-detalleHotel',
  templateUrl: 'detalleHotel.html'
})
export class detalleHomePage {

  hotel: any;
  lat: number = 6.153791;
  lng: number = -75.374354;
  constructor(public navCtrl: NavController, public http: Http,
    private params: NavParams, public modalCtrl: ModalController,
    private view: ViewController) {
    this.hotel = this.params.data.hotel;

  }


  verMapa() {
    let profileModal = this.modalCtrl.create(mapaPage);
    profileModal.present();

  }



  closeModal() {
    this.view.dismiss();
  }




}
