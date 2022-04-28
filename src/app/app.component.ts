import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UtilService } from 'src/app/services/util.service';
import { ServiceService } from './services/service.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})


export class AppComponent {
  Username:any;
  DataLogin:any;
  loadingController: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private serviceService: ServiceService,
    private navCtrl: NavController,
    private router: Router,
    public util: UtilService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.Auth();
    });
  }

  Auth(){
    this.serviceService.authenticationState.subscribe((data) => {
      if (data==true) {
          this.navCtrl.navigateRoot(['home']);
        } else {
          this.navCtrl.navigateRoot(['login']);
        }
   });
  }



  home() {
    this.router.navigate(['home']);
  }

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

  
   logout(){
    this.router.navigate(['login']);

   }

}
