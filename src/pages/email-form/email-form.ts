import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { EmailServiceProvider } from "../../providers/email-service/email-service";
import { LoaderProvider } from "../../providers/loader/loader";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the EmailFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-email-form",
  templateUrl: "email-form.html"
})
export class EmailFormPage {
  private comments: string = "";
  private email: string = "";
  private name: string = "";

  public emailForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private emailService: EmailServiceProvider,
    private notification: AlertController,
    private loader: LoaderProvider,
    public formBuilder: FormBuilder,
    private storage: Storage
  ) {
    this.emailForm = formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, this.emailValidator]],
      comments: [""]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EmailFormPage");
  }

  public sendEmail() {
    this.loader.show();
    const body = {
      product: this.navParams.get("product").name,
      platform: this.navParams.get("platform").name,
      topic: this.navParams.get("topic").name,
      issue: this.navParams.get("issue").name,
      name: this.name,
      email: this.email,
      comments: this.comments
    };
    this.emailService.sendEmail(body).subscribe(
      res => {
        this.loader.hide();
        const alert = this.notification.create({
          title: "Email Sent!",
          subTitle: "Email sent successfully",
          buttons: ["Okay"]
        });
        alert.present();
        alert.onDidDismiss(() => {
          this.storage.clear();
          this.navCtrl.pop();
        });
      },
      () => {
        this.loader.hide();
        const alert = this.notification.create({
          title: "Ooops!!!",
          subTitle: "Something went wrong, please try again!",
          buttons: ["Okay"]
        });
        alert.present();
      }
    );
  }

  private emailValidator(control) {
    // RFC 2822 compliant regex
    if (
      control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }
}
