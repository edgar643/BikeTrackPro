import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Component({
  selector: 'app-rutero',
  templateUrl: './rutero.component.html',
  styleUrls: ['./rutero.component.css']
})
export class RuteroComponent implements OnInit {
  private listado:any[];
  private listadoFrecuencias:any[];
  private listadoClientes:any[];
  private url:string;
  private nombreVendedor:string;
  private rutaCliente:any;
  private dias:string='0000000';
  private nombreCliente:string = "";
  private mostrarListadoPrincipal:boolean = true;

  constructor(private http: HttpClient) {
console.log("Servicio Listo para consumir: Listado Vendedores");
this.listaVendedores();
this.getFrecuenciasVisitas();
//this.getClientsByVendedor(1);
  }

  ngOnInit() {
  }
  private listaVendedores() {
    this.url = "http://23.106.215.110:8080/p_vendedor/all1";
    this.http.get(this.url).subscribe((listado: any) => {
      this.listado = listado;
      console.log(this.listado);
    });

  }
  private getClientsByVendedor(idVendedor:number) {
    this.mostrarListadoPrincipal = false;
    this.url = "http://23.106.215.110:8080/p_persona/vendedor?id="+idVendedor;
    this.http.get(this.url).subscribe((listado: any) => {
      this.listadoClientes = listado;
      for (let entry of listado) {
        this.nombreVendedor = entry.nombreVendedor;
        break;
      }
      console.log(this.listadoClientes);
    });
  }
  private getRutaCliente(idCliente:number) {
    this.url = "http://23.106.215.110:8080/p_persona/cliente_ruta?id="+idCliente;
    this.http.get(this.url).subscribe((ruta: any) => {

      this.rutaCliente = ruta;
      this.dias = this.rutaCliente.dias;
      console.log(this.rutaCliente);
    });
  }
  private getFrecuenciasVisitas() {
    this.url = "http://23.106.215.110:8080/r_tipo_periodo/all";
    this.http.get(this.url).subscribe((periodo: any) => {
      this.listadoFrecuencias = periodo;
      console.log(this.rutaCliente);
    });
  }


  private volver(){
    this.mostrarListadoPrincipal=true;
  }
  private dameDias(diasCodificados:string,dia:number){
    let charDia = diasCodificados.charAt(dia);
   if(diasCodificados!='undefined'){
    if(charDia =='1'){
      return true;
    }else{
return false;
    }
  }else{
return false;

  }
    }




}
