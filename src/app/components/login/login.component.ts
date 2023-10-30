import { UserDTO, UserDTOAuth } from './userDTO';
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }
  private HOST = 'http://192.168.20.23';
  private PORT = '3000';
  private URL = this.HOST + ':' + this.PORT + '/v1/auth';
  constructor(private http: HttpClient, private router: Router) {

  }

  public auhtenticate(nombre: string, password: string) {
    console.log("Autenticar");
    this.userDTOA.username = nombre;
    this.userDTOA.password = password;
    console.log("nombre", nombre)
    console.log("password", password);
    localStorage.setItem('acces_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsInVzZXJuYW1lIjoiYyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5ODQ5MDgwMiwiZXhwIjoxNjk4NTEyNDAyfQ.1dOzJ8dwEcKXO__ltUOdjc89tCK__Oig3lZ5t5jm53o");

    this.http.post(this.URL, this.userDTOA).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem('acces_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsInVzZXJuYW1lIjoiYyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5ODQ5MDgwMiwiZXhwIjoxNjk4NTEyNDAyfQ.1dOzJ8dwEcKXO__ltUOdjc89tCK__Oig3lZ5t5jm53o");
      this.router.navigateByUrl('/bicycles');
    });
  }

  public userDTO: UserDTO = {
    id: 0,
    username: "",
    password: "",
    role: ""
  }
  public userDTOA: UserDTOAuth = {

    username: "",
    password: "",

  }

}
