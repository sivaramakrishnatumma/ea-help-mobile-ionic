import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { IProduct, IPlatform, ITopic, IIssue } from "../../types/ea-help.types";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private product: IProduct = null;
  private platform: IPlatform = null;
  private topic: ITopic = null;
  private issue: IIssue = null;

  constructor(public navCtrl: NavController, private storage: Storage) {}

  ionViewDidEnter() {
    this.loadInitialData();
  }

  private async loadInitialData() {
    this.product = await this.storage.get("product");
    this.platform = await this.storage.get("platform");
    this.topic = await this.storage.get("topic");
    this.issue = await this.storage.get("issue");
  }

  public sendEmail() {
    const { product, platform, topic, issue } = this;
    this.navCtrl.push("EmailFormPage", {
      product,
      platform,
      topic,
      issue
    });
  }
}
