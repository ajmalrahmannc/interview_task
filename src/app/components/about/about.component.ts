import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  version=true;
  demo=false;
  documentation=false;
  pro=false

  constructor() { }

  ngOnInit(): void {
  }

  versions(){
    this.version=true
    this.demo=false
    this.documentation=false
    this.pro=false
  }

  demos(){
    this.version=false
    this.demo=true
    this.documentation=false
    this.pro=false
  }

  docs(){
    this.demo=false
    this.demo=false
    this.documentation=true
    this.pro=false
  }

  pros(){
    this.demo=false
    this.demo=false
    this.documentation=false
    this.pro=true

  }

}
