import {UserDTO} from './userDTO';
import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }

  private urlHost = 'http://localhost:3000/';
    constructor(private http: HttpClient) {

  }

  public   auhtenticate(nombre: string, password:string) {
    console.log("Autenticar");
    this.userDTO.username =nombre;
    this.userDTO.password=password;
    this.http.post(this.urlHost + 'v1/auth/',this.userDTO).subscribe((response: any) => {
 console.log(response);
    alert(response);
    });}

    public userDTO: UserDTO = {
      id: 0,
     username: "",
     password:"",
      role: ""
    }

}
