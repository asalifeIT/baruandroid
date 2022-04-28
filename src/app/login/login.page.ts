import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  FormLogin:FormGroup;
  showPasswordText:any;
  dataLogin:any;

  validations = {
    'nrp': [
      { type: 'required', message: 'nrp harus diisi.' }
    ],
    'password': [
      { type: 'required', message: 'password harus diisi.' }
    ]
  };
  authService: any;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private platform: Platform,
    public toastController: ToastController,
    private serviceService: ServiceService,
  ) { }

  ngOnInit() {
    //setting form login
    this.FormLogin=this.formBuilder.group({
      nrp:new FormControl('', Validators.compose([
        Validators.required
      ])),
      password:new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  //fungsi login
  async login(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    this.serviceService.loginApi(this.FormLogin.value,'signin').subscribe(
      data => {
        this.dataLogin=data;
        loading.dismiss();
      },
      error => {
        this.presentToast(error);
        loading.dismiss();
      }
    );
  }

  //menampilkan halaman register
  async registerModal() {
    const modal = await this.modalController.create({
      component: RegisterPage
    });
    return await modal.present();
  }

  async presentToast(Message) {
    const toast = await this.toastController.create({
      message: Message,
      duration: 2500,
      position: "bottom"
    });
    toast.present();
  }

  Login() {
    console.log("anda sekarang login")
    this.authService.login(this.nrp, this.password)
    }
  nrp(nrp: any, password: any) {
    throw new Error('Method not implemented.');
  }
  password(nrp: any, password: any) {
    throw new Error('Method not implemented.');
  }



}
