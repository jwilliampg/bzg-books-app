import { Component, OnInit } from '@angular/core';
import { User } from "./user";

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.styl']
})
export class AsideLeftComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    this.user = {
      name: "usuario",
      lastname: "prueba",
      username: "pruebaUser",
      email: "usuario@prueba.com",
      urlImage: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
    }
  }

}
