import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data=[{
    name:"akash",
    age:25,
    company:"microsoft",
    salary:55000,
    designation:'developer',
    doj: new Date('1/2/2020'),
    location:'US',
    education:"MCA",
    stream:"CS"
  },
  {
    name:"paritosh",
    age:25,
    company:"google",
    salary:59999,
    designation:'web designer',
    doj: new Date('1/2/2019'),
    location:'NY',
    education:"MCA",
    stream:"CS"
  },
  {
    name:"bunty",
    age:24,
    company:"yahoo",
    salary:69696,
    designation:'helper',
    doj: new Date('1/2/2018'),
    location:'California',
    education:"Btech",
    stream:"CS"
  },
  {
    name:"sourav",
    age:26,
    company:"amazon",
    salary:49999,
    designation:'manager',
    doj: new Date('1/2/2017'),
    location:'Iceland',
    education:"Mtech",
    stream:"CS"
  }];
  userprofile="https://picsum.photos/id/237/536/354";
  userprofile1="https://picsum.photos/seed/picsum/200/300"

  isActive=true;

  colSpan=12345;

  Color= false;

  clickEvent(event){
    alert("hello akki!");
  };
  
  hoverEvent(event){
    console.log(event);
  };

  typeEvent(event){
    if(event.keyCode===13){
    console.log(event.target.value);}//this is javascript way & also event filtering is included
  }
  angularWayTypeEvent(event){
    console.log(event.target.value);
  }
  enterEmail(email){
    console.log('my email addres is' , email);
  }
  checkUsername(event){
    console.log('my name is',event.target.value);
  }

  //ngFor Directives example..
employee=[
  { empId:'ty1',
   empName:'Akki',
   empPhoto:'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__480.png',
   empCompany:'TestYantra',
   empLoc:'Blr',
   empSalary:'20000',
   empDoj:new Date('10/7/2018'),
   empDesignation:'Developer',
   empEdu:'MCA',
   empClg:'ITER'
 },
 {
   empId:'ty2',
   empName:'Ranjan',
   empPhoto:'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__480.png',
   empCompany:'HGS',
   empLoc:'Blr',
   empSalary:'25000',
   empDoj:new Date('12/8/2018'),
   empDesignation:'Developer',
   empEdu:'MCA',
   empClg:'KIIT'
 },
 {
   empId:'ty3',
  empName:'Ranjan',
   empPhoto:'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__480.png',
   empCompany:'HGS',
   empLoc:'Blr',
   empSalary:'25000',
   empDoj:new Date('12/8/2018'),
  empDesignation:'Developer',
  empEdu:'MCA',
   empClg:'KIIT'
 },
 {
   empId:'ty4',
   empName:'Ranjan',
  empPhoto:'https://cdn.pixabay.com/photo/2016/04/26/07/20/woman-1353803__480.png',
   empCompany:'HGS',
   empLoc:'Blr',
   empSalary:'25000',
   empDoj:new Date('12/8/2018'),
   empDesignation:'Developer',
   empEdu:'MCA',
   empClg:'KIIT'
 }
];

addEmp(){
  this.employee.unshift({
  empId:'ty4',
  empName:'Dibya',
  empPhoto:'https://cdn.pixabay.com/photo/2016/04/26/07/20/woman-1353803__480.png',
  empCompany:'HGS',
  empLoc:'Blr',
  empSalary:'35000',
  empDoj:new Date('12/9/2018'),
  empDesignation:'Web',
  empEdu:'Btech',
  empClg:'RCB'
});
}

removeEmp(emp){
  let index=this.employee.indexOf(emp);//checking index
  this.employee.splice(index,1);

}

color='lund';


  constructor() { }

  ngOnInit() {
  }

}
