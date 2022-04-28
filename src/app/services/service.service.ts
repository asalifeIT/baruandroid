import { AduancateringPage } from './../aduancatering/aduancatering.page';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, timeout } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { Platform, ToastController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService{
  [x: string]: any; 
  Data:any;
  DataLogin:any;
  DataResponse:any;
  DataCheckLogin:any;
  authenticationState = new ReplaySubject();
  token:any;

  API_URL = 'http://asabeta.com/api/';

  TOKEN_KEY = 'accesstoken';
  REFRESH_TOKEN_KEY = 'refreshtoken';
  ROLE = 'role';
  server: string;

  constructor(
    private http: HttpClient,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.checkToken();
    });
   }


  options(arg0: string, options: any) {
    throw new Error('Method not implemented.');
  }

  //jika token tidak ada maka authenticationState=false
  //jika token ada maka akan memanggil fungsi cekUser
  checkToken() {
    if(localStorage.getItem(this.TOKEN_KEY)==null || localStorage.getItem(this.TOKEN_KEY)=='') {
      this.authenticationState.next(false);
    }else{
      this.CekUser().subscribe(data => {
        this.DataCheckLogin=data;
        if(this.DataCheckLogin.status=="success"){
          this.authenticationState.next(true);
        }else{
          this.authenticationState.next(false);
        }
     },
     err => {
        this.authenticationState.next(false);
      });
    }
  }

  //cek user di sisi client
  CekUser(){
    //ambil data dari localstorage
    let dataStorage=JSON.parse(localStorage.getItem(this.TOKEN_KEY));
    this.token=dataStorage;
    console.log("token : " +this.token);
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+ this.token
      });
    return this.http.get(this.API_URL + 'users/my', { headers: headers, observe: 'response' }).pipe(
      timeout(8000),
      tap(Data => {
        return Data;
      }),

    );
  }

  //login
  loginApi(credentials, type){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.API_URL + type, credentials, { headers: headers, observe: 'response' }).pipe(
      tap(Data => {
        this.DataLogin=Data.body;

        if(Data.status==200){
          localStorage.setItem(this.TOKEN_KEY, JSON.stringify(this.DataLogin.access_token));
          localStorage.setItem(this.REFRESH_TOKEN_KEY, JSON.stringify(this.DataLogin.refresh_token));
          localStorage.setItem(this.ROLE, JSON.stringify(this.DataLogin.roles[1]));
          console.log(this.DataLogin.roles[1]);
          this.authenticationState.next(true);
        }else{
          this.authenticationState.next(false);
        }
        return Data;
      }),
      catchError((err, caught) => {
        let message = "error";

        if(err.status==400){
          message='User belum terdaftar. Silahkan hubungi admin.';
        } else if(err.status==401){
          message='nrp dan kata sandi yang Anda masukkan tidak cocok. Silahkan periksa dan coba lagi.';
        } else {
          message='Tidak ada koneksi internet. Silakan periksa koneksi Anda.';
        }
        return throwError(message);
      })
    );
  }

  //register
  RegisterApi(credentials, type){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.API_URL + type, credentials, { headers: headers }).pipe(
      tap(Data => {
        this.DataLogin=Data;
        if(this.DataLogin.status=="success"){
          localStorage.setItem(this.TOKEN_KEY, JSON.stringify(Data));
          this.authenticationState.next(true);
        }else{
          this.authenticationState.next(false);
        }
        return Data;
      }),
    );
  }

  submitaduan(form, url){
    let dataStorage=JSON.parse(localStorage.getItem(this.TOKEN_KEY));
    this.token=dataStorage;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+ this.token
    });
    return this.http.post(this.API_URL + url , form, { headers: headers, observe: 'response' }).pipe(
      tap(Data => {
        this.DataLogin=Data;
        let message='Aduan Anda terkirim.';
        return message;
      }),
      catchError((err, caught) => {
        let message = "Gagal Terkirim, Mohon Aduan Diisi Lengkap!";
        return throwError(message);
      })
    );
  }

  submitaduanhk(form, url){
    let dataStorage=JSON.parse(localStorage.getItem(this.TOKEN_KEY));
    this.token=dataStorage;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+ this.token
    });
    return this.http.post(this.API_URL + url , form, { headers: headers, observe: 'response' }).pipe(
      tap(Data => {
        this.DataLogin=Data;
        let message='Aduan Anda terkirim.';
        return message;
      }),
      catchError((err, caught) => {
        let message = "Gagal Terkirim, Mohon Aduan Diisi Lengkap!";
        return throwError(message);
      })
    );
  }

  submitaduanlaundry(form, url){
    let dataStorage=JSON.parse(localStorage.getItem(this.TOKEN_KEY));
    this.token=dataStorage;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+ this.token
    });
    return this.http.post(this.API_URL + url , form, { headers: headers, observe: 'response' }).pipe(
      tap(Data => {
        this.DataLogin=Data;
        let message='Aduan Anda terkirim.';
        return message;

      }),
      catchError((err, caught) => {
        let message = "Gagal Terkirim, Mohon Aduan Diisi Lengkap!";
        return throwError(message);
      }),
      catchError((err, caught) => {
        let message = "Gagal Terkirim, Mohon Aduan Diisi Lengkap!";
        return throwError(err);
      }),

    );
  }

  getRecord(url){
    let dataStorage=JSON.parse(localStorage.getItem(this.TOKEN_KEY));
    this.token=dataStorage;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+ this.token
    });
    return this.http.get(this.API_URL + url,{ headers: headers, observe: 'response' }).pipe(
      tap(Data => {
        this.DataRecord=Data;
        let message='Rating Anda terkirim.';
        return message;

      }),
      catchError((err, caught) => {
        let message = "Gagal Terkirim, Mohon Rating Diisi Lengkap!";
        return throwError(message);
      }),
       );
  }




  //logout
  signout() {
      this.authenticationState.next(false);
      


  }




}
