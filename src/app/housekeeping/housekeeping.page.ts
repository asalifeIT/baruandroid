import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-housekeeping',
  templateUrl: './housekeeping.page.html',
  styleUrls: ['./housekeeping.page.scss'],
})
export class HousekeepingPage implements OnInit {

  aduanhkeeping: any[] = [
    {id: 1, name: '', src: '', background: '', page: ''},

  ];

  tugas: any[] = [
    {id: 1, name: '', src: '', background: '', page: ''},

  ];


  constructor(
    public loadingController: LoadingController,
    public util: UtilService,
    private router: Router
  ) { }


  ngOnInit() {
  }

  openAdhkeeping() {
    this.router.navigate(['aduanhk']);
  }
  openTugas() {
    this.router.navigate(['tugashk']);
  }
  onBack() {
    this.router.navigate(['home']);
  }


}
