import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { ServiceService } from '../services/service.service';
import {Observable, ReplaySubject, throwError} from "rxjs/index";
import { catchError } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-aduanlaundry',
  templateUrl: './aduanlaundry.page.html',
  styleUrls: ['./aduanlaundry.page.scss'],
})
export class AduanlaundryPage implements OnInit {
  FormAduanLaundry:FormGroup;
  authenticationState = new ReplaySubject(); 
  authService: any;
  message:any;
  validations = {
     'mess': [
      { type: 'required', message: 'pilihan mess harus di isi' }
    ],
    'no_kamar': [
      { type: 'required', message: 'nomor kamar harus di isi' }
    ],
    'jenis_pakaian': [
      { type: 'required', message: 'jenis pakaian harus diisi.' }
    ],
    'jenis_deviasi': [
      { type: 'required', message: 'jenis deviasi harus diisi.' }
    ],
    'tanggal_laundry': [
      { type: 'required', message: 'pilihan tanggal harus diisi.' }
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
    this.FormAduanLaundry=this.formBuilder.group({
      mess:new FormControl('', Validators.compose([
        Validators.required
      ])),
      no_kamar:new FormControl('', Validators.compose([
        Validators.required
      ])),
      jenis_pakaian:new FormControl('', Validators.compose([
        Validators.required
      ])),
      jenis_deviasi:new FormControl('', Validators.compose([
        Validators.required
      ])),
      tanggal_loundry:new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  async submitAduanLaundry(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.serviceService.submitaduanlaundry(this.FormAduanLaundry.value, 'laundry/add').subscribe(
      data => {
        this.presentToast("Aduan Laundry Anda Terkirim");
        console.log(this.FormAduanLaundry.value);
        this.FormAduanLaundry.reset();
        loading.dismiss();
      },
      error => {
        console.log(error);
        this.presentToast("Gagal Terkirim, Silahkan Lengkapi Isi Aduan Laundry!");
        console.log(this.FormAduanLaundry.value);
        this.FormAduanLaundry.reset();
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
    this.router.navigate(['home']);
  }
}
