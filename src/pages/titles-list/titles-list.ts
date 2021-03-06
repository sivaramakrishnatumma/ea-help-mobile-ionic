import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { IProduct, IPlatform, ITopic } from "../../types/ea-help.types";
import { DataServiceProvider } from "../../providers/data-service/data-service";
import { Storage } from "@ionic/storage";
import { LoaderProvider } from "../../providers/loader/loader";

/**
 * Generated class for the TitlesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-titles-list",
  templateUrl: "titles-list.html"
})
export class TitlesListPage {
  public type: string;
  public items: IProduct[] | IPlatform[] | ITopic[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataService: DataServiceProvider,
    private storage: Storage,
    private loader: LoaderProvider
  ) {
    this.type = this.navParams.get("type");
  }

  async ionViewDidLoad() {
    console.log("ionViewDidLoad TitlesListPage");
    this.loader.show();
    if (this.type === "product") {
      this.dataService.getProducts().subscribe((res: IProduct[]) => {
        this.items = res;
        this.loader.hide();
      });
    } else if (this.type === "platform") {
      const product: IProduct = await this.storage.get("product");
      this.dataService
        .getPlatforms(product.platforms)
        .subscribe((platforms: IPlatform[]) => {
          this.items = platforms;
          this.loader.hide();
        });
    } else if (this.type === "topic") {
      const product: IProduct = await this.storage.get("product");
      this.dataService.getTopics(product.topics).subscribe((res: ITopic[]) => {
        this.items = res;
        this.loader.hide();
      });
    } else if (this.type === "issue") {
      const topic: ITopic = await this.storage.get("topic");
      this.dataService.getIssues(topic.issues).subscribe((res: ITopic[]) => {
        this.items = res;
        this.loader.hide();
      });
    }
  }

  public itemSelected(item) {
    this.storage.set(this.type, item);
    switch (this.type) {
      case "product":
        this.storage.set("platform", null);
        this.storage.set("topic", null);
        this.storage.set("issue", null);
        break;
      case "platform":
        this.storage.set("topic", null);
        this.storage.set("issue", null);
        break;
      case "topic":
        this.storage.set("issue", null);
        break;
      default:
        "";
    }
    this.navCtrl.pop();
  }
}
