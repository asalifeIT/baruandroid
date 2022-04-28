import { Component, OnInit } from '@angular/core';
import { Platform, NavController,LoadingController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  features: any[] = [
    {id: 1, name: 'Catering', src: 'assets/svg/dining.svg', background: '', page: ''},
  ]; 

  laundry: any[] = [
    {id: 1, name: 'Laundry', src: 'assets/svg/washing-machine.svg', background: '', page: ''},
  ];

  housekeeping: any[] = [
    {id: 1, name: 'HouseKeeping', src: 'assets/svg/handyman.svg', background: '', page: ''},
  ];

  admaintan: any[] = [
    {id: 1, name: 'Maintenance', src: 'assets/svg/builder.svg', background: '', page: ''},
  ];


  Username:any;
  DataLogin:any;
  constructor(
    public loadingController: LoadingController,
    private serviceService: ServiceService,
    private router: Router,
    public util: UtilService

  ) {}

  ngOnInit() {
    //ambil data dari localstorage
    let dataStorage=JSON.parse(localStorage.getItem(this.serviceService.TOKEN_KEY));
    // this.Username=dataStorage.data.Username;
    this.serviceService.CekUser().subscribe(
      data => {
        this.DataLogin=data;
        console.log(this.DataLogin)
        this.Username=this.DataLogin.body.name;
      },
      error => {
        console.log("error");
      }
    );
  }




async signout(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    localStorage.clear();
    this.serviceService.signout();
    loading.dismiss();
   }


openRest() {
  this.router.navigate(['catering']);
}

openHkeeping() {
  this.router.navigate(['housekeeping']);
}

openLaundry(){
  this.router.navigate(['aduanlaundry']);
}

openAdmaintan(){
  this.router.navigate(['aduanmaintenance']);
}


}






