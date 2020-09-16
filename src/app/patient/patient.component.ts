import { Component, OnInit } from '@angular/core';
import { AdminService} from '../admin.service';

@Component({
  selector: 'app-patient',
    templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  firstName="PATEL";

  patientData: any;

  drugData: any;

  perscriberData: any;

  valid = false;

  model = {
    name:"Srinivas"
  }

  constructor(private admin: AdminService) { }

  ngOnInit(): void {

    this.getData();
    this.getDrugData();
    this.getPrscriberData();
  }


  getName(event){

    console.log("reached or", event.target.value )

    let name =event.target.value;

    if(name != undefined || name === '' || name === null )
    {
this.valid = true;
    }else{
      this.valid = false;
    }



  }

  getData(){
    this.admin.getPatientDetails().subscribe((res)=>{
      this.patientData = res['data'][0];

      console.log("display data", this.patientData);

    })
  }

  getDrugData(){
    this.admin.getDrugDetails().subscribe((res)=>{
      this.drugData = res['data'][0];

      console.log("display data", this.drugData);

    })
  }

  getPrscriberData(){
    this.admin.getPerscriberDetails().subscribe((res)=>{
      this.perscriberData = res['data'][0];

      console.log("display data", this.perscriberData);

    })
  }


}
