import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;


  setValue() {
    this.username = "username@mail.fr";
    this.password = "MotDePasse";
  }

  ngOnInit(): void {
  }

  onFormSubmit(login:NgForm){
    console.log(login);
  }

}
