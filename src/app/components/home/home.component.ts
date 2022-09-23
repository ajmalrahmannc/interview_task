import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  grid=true
  list=false

  addForm = this.fb.group({
    fname:["",[Validators.required,Validators.pattern('[A-Za-z ]*')]],
    lname:["",[Validators.required,Validators.pattern('[A-Za-z ]*')]],
    email:["",[Validators.required,Validators.pattern('[A-Za-z0-9 ]*'),Validators.email]],
    city:["",[Validators.required,Validators.pattern('[A-Za-z0-9 ]*')]],
    address:["",[Validators.required,Validators.pattern('[A-Za-z0-9 ]*')]]
  })

  constructor(private offcanvasService: NgbOffcanvas,private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
  }

  card(){
    this.grid = true
    this.list = false
  }

  lists(){
    this.grid = false
    this.list = true
  }

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  add(){
    var fname = this.addForm.value.fname;
    var lname = this.addForm.value.lname;
    var email = this.addForm.value.email;
    var city = this.addForm.value.city;
    var address = this.addForm.value.address;

    this.user.newuser = {fname,lname,email,city,address}
    this.user.addnewuser();
    console.log(this.user.newuser);
    console.log(this.user.database);
    alert("user added successfully..")
    
    
  }

}
