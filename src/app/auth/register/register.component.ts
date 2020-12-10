import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//props
registerTitle:string="ReGisTer";//logic
getTitle(event){
  console.log('helllo');
}
clickEvent(event){
  alert("Mission Successful")
}
  constructor() { }

  ngOnInit() {
  }

}
