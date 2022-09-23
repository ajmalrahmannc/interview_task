import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {

  usersData:any = []
  name:any
  

  public viewDatas = <any>[];
  data = <any>[];

  editForm = this.fb.group({
    fname:[this.users.editFname,[Validators.required,Validators.pattern('[A-Za-z ]*')]],
    lname:["",[Validators.required,Validators.pattern('[A-Za-z ]*')]],
    email:["",[Validators.required,Validators.pattern('[A-Za-z0-9 ]*'),Validators.email]],
    city:["",[Validators.required,Validators.pattern('[A-Za-z0-9 ]*')]],
    address:["",[Validators.required,Validators.pattern('[A-Za-z0-9 ]*')]]
  })



  constructor(private users:UserService,private offcanvasService: NgbOffcanvas,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.usersData = this.users.database
    console.log("qwer",this.users.editFname);
    
    // this.viewDatas = this.users.getDataById(this.id.id)
    // this.data.push(this.users.viewData)
  }

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  openView(view: TemplateRef<any>,user:any){
    this.offcanvasService.open(view, { position: 'end'})
    console.log("user",user);
    this.data.push(user)
  }
  
  pop(){
    this.data.pop()
    console.log(this.data);
    
  }

  edit(){
    var fname = this.editForm.value.fname;
    var lname = this.editForm.value.lname;
    var email = this.editForm.value.email;
    var city = this.editForm.value.city;
    var address = this.editForm.value.address;

    var newuser = {fname,lname,email,city,address}
    console.log(newuser);
    
  }

  edituser(user:any){   
    this.editForm.value.fname = user.fname
    console.log(user);
    this.users.editFname = user.fname;
    console.log(this.users.editFname);
    
    
  }


}
