import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular";

/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaderProvider {
  private loader;

  constructor(public http: HttpClient, private loadingCtrl: LoadingController) {
    console.log("Hello LoaderProvider Provider");
  }

  public show() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    this.loader.present();
  }

  public hide() {
    this.loader ? this.loader.dismiss() : "";
  }
}
