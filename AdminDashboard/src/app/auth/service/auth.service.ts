import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = 'http://localhost:3000/api/admin'

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  loginApiCall(payload:any){
    return this.http.post(`${this.loginUrl}/login`,payload);
  }

  isLoggedIn(){
    return localStorage.getItem('token')
   }
   getToken(){
    return localStorage.getItem('token')
   }
   
   getStorelistApiCall(){
    return this.http.get(`${this.loginUrl}/getallstore`)
   }

   acceptRequestApiCall(storeId:any){
    return this.http.put(`${this.loginUrl}/acceptrequest/${storeId}`, {})
   }

   rejectRequestApiCall(storeId:any){
    return this.http.put(`${this.loginUrl}/rejectrequest/${storeId}`, {})
   }
}
