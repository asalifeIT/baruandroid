/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.page.html',
  styleUrls: ['./catering.page.scss'],
})
export class CateringPage implements OnInit {
  [x: string]: any;

  aduan: any[1] = [
    {id: 1, name: '', src: '', background: '', page: ''},
     ];

     rating: any[2] = [
      {id: 1, name: '', src: '', background: '', page: ''},
       ];


   constructor(
    public loadingController: LoadingController,
    private router: Router,
    public util: UtilService
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['home']);
  }

  openAduancat () {
  this.router.navigate(['aduancatering']);
  }

  openRatingcat() {
    this.router.navigate(['ratingcatering']);
    }
}
