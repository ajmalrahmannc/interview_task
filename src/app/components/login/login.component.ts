import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm = this.fb.group({
    email:["",[Validators.required,Validators.email]],
    pass:["",[Validators.required]]
  })

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.LoginForm.valid){
      alert("login success");
      this.router.navigateByUrl("/home")
    }
    else{
      alert('invalid form')
    }
  }

}
