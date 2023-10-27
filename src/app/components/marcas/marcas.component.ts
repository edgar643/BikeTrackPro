import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarcaDTO } from '../marcas/marcaDTO';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  private marcas: any[];
  private marca: any = 0;
  private url: string;
  private marcaDTO: MarcaDTO;

  constructor(private http: HttpClient) {
    console.log("Constructor 1");
    console.log("Servicio Listo para consumir");
    this.mainlist();
  }

  ngOnInit() {

  }
  private mainlist() {
    this.http.get('http://23.106.215.110:8080/p_marca/all').subscribe((listado: any) => {
      this.marcas = listado;
    });
  }
  public getOne(termino: string) {
    this.url = "http://23.106.215.110:8080/p_marca/uno?id=";
    this.http.get(this.url + termino).subscribe((listado: any) => {
      console.log("getOne");
      console.log("Servicio consultado: " + this.url + termino);
      this.marca = listado;
      console.log(this.marca);
    });



  }
  public createOne(nombre: string, codigo: number) {
    console.log("Create One " + nombre + " " + codigo);
    this.DataMarca.nombre = nombre;
    this.DataMarca.codigo = codigo;
    this.http.post('http://23.106.215.110:8080/p_marca/create', this.DataMarca).subscribe();
    this.mainlist();
    console.log("Guardado");
  }
  public updateOne(id: number, nombre: string) {
    this.DataMarca.nombre = nombre;
    this.DataMarca.id = id;
    this.http.post('http://23.106.215.110:8080/p_marca/update', this.DataMarca).subscribe();
    this.mainlist();

  }
  public DataMarca: MarcaDTO = {
    codigo: 0,
    nombre: '',
    id: 0
  }
}
