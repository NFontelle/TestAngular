import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "username@mail.fr";
  password = "MotDePasse";
  email!: string;
  passwd!: string;
  validation: boolean = false;

  ngOnInit(): void {
  }

  onFormSubmit(login:NgForm){
    this.email = login.form.value.email;
    this.passwd = login.form.value.passwd;
    this.validation = true;
  }

}
