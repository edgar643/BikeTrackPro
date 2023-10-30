import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarcaDTO } from '../marcas/marcaDTO';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  private list: any[];
  private uno: any = 0;
  private url: string;


  constructor(private http: HttpClient) {
    console.log("Servicio Listo para consumir");
    this.mainlist();
  }

  ngOnInit() {

  }
  private mainlist() {
    this.http.get('http://23.106.215.110:8080/p_persona/all1').subscribe((listado: any) => {
      this.list = listado;
      console.log("mainList");
      console.log(this.list);
    });

  }
  private listByParams(termino: string, idFiltro: number) {
    this.http.get('http://23.106.215.110:8080/p_producto/list?id=' + idFiltro + '&dato=' + termino).subscribe((listado: any) => {
      this.list= listado;

    });

  }
  public getOne(termino: string) {
    this.url = "http://23.106.215.110:8080/p_persona/uno?id=";
    this.http.get(this.url + termino).subscribe((listado: any) => {
      console.log("getOne");
      console.log("Servicio consultado: " + this.url + termino);
      this.uno = listado;
      console.log(this.uno);
    });



  }


}
