import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable()
export class ProductoService {
private  productos:any[] ;
private url: string;
private producto: any = 0;
private urlHost = 'http://23.106.215.110:8080/';
constructor(private http: HttpClient) {
  console.log("Servicio de Productos Listo para consumir");
}
public getProductosAll(){
  this.http.get(this.urlHost+'p_producto/all').subscribe((listadoProductos: any) => {
    this.productos = listadoProductos;
    console.log(this.productos);
  });
return this.productos;
}

public getlistByParams(termino: string, idFiltro: number) {
  this.http.get(this.urlHost+'p_producto/list?id=' + idFiltro + '&dato=' + termino).subscribe((listado: any) => {
      this.productos = listado; });
return this.productos;
}
  public getOne(termino: string){
    this.url = this.urlHost+"p_producto/uno?id=";
    this.http.get(this.url + termino).subscribe((listado: any) => {
      console.log("getOne");
      console.log("Servicio consultado: " + this.url + termino);
      this.producto = listado;  });
return this.producto;
  }

}
