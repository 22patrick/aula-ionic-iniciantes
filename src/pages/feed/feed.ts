import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  //Variavel
  public nome_usuario: string = "Patrick Lemo do codigo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  //Função Aula 1
  public SomaDoisNumeros(): void {
    alert("Minha função funcinou...");
  }

  public SomaDoisNumeross(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    //Mostra funçao em tela  
    //this.SomaDoisNumeross(10 ,99);
    //this.SomaDoisNumeros();
    //alert("Patrick lindo");
  }

}

