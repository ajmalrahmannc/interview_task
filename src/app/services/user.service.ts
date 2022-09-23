import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public viewData : any;
  newuser:any

  editFname="";
  editLname="";
  editEmail="";
  editCity="";
  editAddress="";

  constructor() { }

  database:any = [
    {id:1,fname:"Ted James",lname:"john",place1:"Phoenix",place2:"Arizona",address:"abc street",total:"1,699.89"},
    {id:2,fname:"Michelle Thompson",lname:"Antony",place1:"Encinitas",place2:"California",address:"kbc lane 2",total:"1,235.66"},
    {id:3,fname:"Zed Bishop",lname:"JO",place1:"Seattle",place2:"Washingtone",address:"ar lane",total:"2,846.56"},
    {id:4,fname:"Tina Adams",lname:"roy",place1:"Chandler",place2:"Arizona",address:"house 4 ,123 street",total:"1,254.21"},
    {id:5,fname:"Igor Minar",lname:"tom",place1:"Dellas",place2:"Texas",address:"lane 5",total:"1,547.58"},
    {id:6,fname:"Brad Green",lname:"smith",place1:"Ornaldo",place2:"Florida",address:"1Atomic St",total:"2,5321.78"},
    {id:7,fname:"Misko Every",lname:"loother",place1:"Carey,North",place2:"Carolina",address:"12 Ocean view",total:"4,873.21"},
    {id:8,fname:"Heady Wahlin",lname:"Marry",place1:"Anahem",place2:"California",address:"346 credar Ave",total:"3,287.87"},
    {id:9,fname:"John papa",lname:"joy",place1:"Ornaldo",place2:"Florida",address:"5468Jefferson way",total:"5,287.25"},
    {id:10,fname:"Toniya Smith",lname:"Adams",place1:"Atlanta",place2:"Georgia",address:"78 manchester",total:"3,219.97"},    
  ]

  addnewuser(){
    this.database.push(this.newuser)
  }

}
