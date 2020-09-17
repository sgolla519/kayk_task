import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }



  getPatientDetails(){
    return this.http.get('http://localhost:3000/patient/get');
  }
  getDrugDetails(){
    return this.http.get('http://localhost:3000/drug/get');
  }

  getPerscriberDetails(){
    return this.http.get('http://localhost:3000/prescriber/get');
  }

  getRxDetails(){
    return this.http.get('http://localhost:3000/rx/get')
  }


}
