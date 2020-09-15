import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
    templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  firstName="PATEL";

  valid = false;

  model = {
    name:"Srinivas"
  }

  constructor() { }

  ngOnInit(): void {
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


}
