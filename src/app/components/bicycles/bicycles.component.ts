import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bicycles',
  templateUrl: './bicycles.component.html',
  styleUrls: ['./bicycles.component.css']
})
export class BicyclesComponent {
  private urlHost = 'http://localhost:3000/';
  public listBicycles: any[] = [];
  constructor(private http: HttpClient) {
    console.log("Servicio Listo para consumir");
    this.getAll();
  }

  private getAll() {
    this.http.get(this.urlHost + 'bicycle/').subscribe((listado: any) => {
      this.listBicycles = listado;
      console.log("All Bicycles");
      console.log(this.listBicycles);
    });

  }
}
