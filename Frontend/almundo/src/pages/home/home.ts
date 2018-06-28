import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { detalleHomePage } from '../detalleHotel/detalleHotel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hoteles: any = [];
  hoteles2: any = [];
  hoteles3: any = [];
  nombre: any;
  estrellas: any = { todas: false, cinco: false, cuatro: false, tres: false, dos: false, una: false }

  constructor(public navCtrl: NavController, public http: Http, public modalCtrl: ModalController, ) {
    this.consultarHoteles();
  }


  // Metodo para consultar los hoteles que tiene la pagina
  consultarHoteles() {
    this.hoteles = this.http.get('http://localhost:8001/hoteles');
    this.hoteles.subscribe(data => {
      console.log('hoteles ', data.json());
      this.hoteles2 = data.json();
      this.hoteles3 = data.json();
    })
  }

  // Metodo para filtrar los hoteles por palabra clave con la variable "name"
  filtrarHoteles() {

    this.hoteles2 = this.hoteles3.filter((location) => {
      return location.name.toLowerCase().indexOf(this.nombre.toLowerCase()) > -1;
    });
  }

  // Metodo para filtrar los hoteles por la cantidad de estrellas
  filtrarHotelesEstrella(int) {
    if (int == 1) {
      this.estrellas.cinco = false;
      this.estrellas.cuatro = false;
      this.estrellas.tres = false;
      this.estrellas.dos = false;
      this.estrellas.una = false;
      this.hoteles2 = this.hoteles3;
    } else if (int == 2) {
      this.estrellas.todas = false;
      this.filtracion();
    }
    /* this.hoteles2 = this.hoteles3.filter((location) => {
       return location.stars.toLowerCase().indexOf(this.nombre.toLowerCase()) > -1;
     });*/
  }

  filtracion() {
    this.hoteles = [];
    this.hoteles2 = this.hoteles3;
    let valor;
    if (this.estrellas.cinco == true) {
      valor = 5;
      this.hoteles3.forEach(element => {
        if (element.stars == valor) {
          this.hoteles.push(element);
        }
      });

    } if (this.estrellas.cuatro == true) {
      valor = 4;
      this.hoteles3.forEach(element => {
        if (element.stars == valor) {
          this.hoteles.push(element);
        }
      });

    }
    if (this.estrellas.tres == true) {
      valor = 3;
      this.hoteles3.forEach(element => {
        if (element.stars == valor) {
          this.hoteles.push(element);
        }
      });

    }
    if (this.estrellas.dos == true) {
      valor = 2;
      this.hoteles3.forEach(element => {
        if (element.stars == valor) {
          this.hoteles.push(element);
        }
      });


    }
    if (this.estrellas.una == true) {
      valor = 1;
      this.hoteles3.forEach(element => {
        if (element.stars == valor) {
          this.hoteles.push(element);
        }
      });

    }
    this.hoteles2 = this.hoteles;

  }

  verHotel(hotel) {
    let profileModal = this.modalCtrl.create(detalleHomePage, { hotel: hotel });
    profileModal.present();

  }


}
