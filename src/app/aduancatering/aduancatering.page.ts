import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import {Observable, ReplaySubject, throwError} from "rxjs/index";
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-aduancatering',
  templateUrl: './aduancatering.page.html',
  styleUrls: ['./aduancatering.page.scss'],
})


export class AduancateringPage implements OnInit {
  FormAduanCatering:FormGroup;
  authenticationState = new ReplaySubject(); 
  authService: any;
  message:any;
  validations = {
    'lokasi': [
      { type: 'required', message: 'lokasi harus diisi.' }
    ],
    'deskripsi': [
      { type: 'required', message: 'deskripsi harus diisi.' }
    ],
    'kritik_saran': [
      { type: 'required', message: 'kritik dan saran harus diisi.' }
    ]
  };

  constructor(
    private formBuilder: FormBuilder, 
    private navCtrl: NavController, 
    public loadingController: LoadingController,
    public modalController: ModalController,
    private platform: Platform,
    public toastController: ToastController,
    private serviceService: ServiceService,
    private router: Router,
    public util: UtilService

  ) { }

  

  ngOnInit() {
    this.FormAduanCatering=this.formBuilder.group({
      lokasi:new FormControl('', Validators.compose([
        Validators.required
      ])),
      kritik_saran:new FormControl('', Validators.compose([
        Validators.required
      ])),
      deskripsi:new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  async submitAduanCatering(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.serviceService.submitaduan(this.FormAduanCatering.value, 'catering/add').subscribe(
      data => {
        this.presentToast("Aduan Catering Anda Terkirim");
        console.log(this.FormAduanCatering.value);
        this.FormAduanCatering.reset();
        loading.dismiss();
      },
      error => {
        console.log(error);
        this.presentToast("Gagal Terkirim, Silahkan Lengkapi Isi Aduan Catering!");
        console.log(this.FormAduanCatering.value);
        this.FormAduanCatering.reset();
        loading.dismiss();
      }
    );
   }

  async presentToast(Message) {
    const toast = await this.toastController.create({
      message: Message,
      duration: 2500,
      position: "bottom"
    });
    toast.present();
  }

  onBack() {
    this.router.navigate(['catering']);
  }

 // onBack(){
 //   this.router.navigate(['catering']);
  //}
}
