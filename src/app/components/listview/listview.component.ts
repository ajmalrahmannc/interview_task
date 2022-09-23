import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  userDatas:any = []

  constructor(private users:UserService) { }

  ngOnInit(): void {
    this.userDatas = this.users.database;
  }

}
