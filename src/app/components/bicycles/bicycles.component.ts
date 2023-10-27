import { Component, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bicycles',
  templateUrl: './bicycles.component.html',
  styleUrls: ['./bicycles.component.css']
})
export class BicyclesComponent {

  private urlHost = 'http://localhost:3000/';
  public listBicycles: any[] = [];
  modalRef?: BsModalRef;

  constructor(
    private http: HttpClient,
    private modalService: BsModalService
  ) {
    console.log("Servicio Listo para consumir");
    this.getAll();
  }

  private getAll() {
    /* this.http.get(this.urlHost + 'bicycle/').subscribe((listado: any) => {
      this.listBicycles = listado;
      console.log("All Bicycles");
      console.log(this.listBicycles);
    }); */
    this.listBicycles = [
      {id: 1, brand: 'BMC', type: 'Ruta', color: 'Azul'},
      {id: 1, brand: 'BMC', type: 'Ruta', color: 'Azul'},
      {id: 1, brand: 'BMC', type: 'Ruta', color: 'Azul'},
      {id: 1, brand: 'BMC', type: 'Ruta', color: 'Azul'},
      {id: 1, brand: 'BMC', type: 'Ruta', color: 'Azul'},
      {id: 1, brand: 'BMC', type: 'Ruta', color: 'Azul'}
    ];
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
