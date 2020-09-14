import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  firstName="HARSHAL PATEL";

  valid = false;

  constructor() { }

  ngOnInit(): void {
  }


  getName(event){

    console.log("reached or", event.target.value )

    let name =event.target.value;

    if(this.firstName === name )
    {
this.valid = false;
    }else{
      this.valid = true;
    }

  }


}
