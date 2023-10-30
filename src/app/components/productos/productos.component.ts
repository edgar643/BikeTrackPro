import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarcaDTO } from '../marcas/marcaDTO';
import { ThrowStmt } from '@angular/compiler';
import {ProductoService} from 'src/app/servicios/producto.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  private producto: any[];
  private marca: any = 0;
  private url: string;
private servicioProductos:ProductoService;

  constructor(private http: HttpClient) {

    this.mainlist();
  }

  ngOnInit() {

  }
  private mainlist() {
    this.producto= this.servicioProductos.getProductosAll();
  }
  private listByParams(termino: string, idFiltro: number) {
    this.producto=this.servicioProductos.getlistByParams(termino,idFiltro);
  }
  public getOne(termino: string) {
        this.marca = this.servicioProductos.getOne(termino);
    }





}

