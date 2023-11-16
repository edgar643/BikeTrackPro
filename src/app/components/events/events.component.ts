import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { EventDTO, Event } from './eventDTO';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import axios from 'axios';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  private HOST = 'http://192.168.1.2';
  private PORT = ':5001';
  private URL = this.HOST + this.PORT + '/api/v1/events';
  public listEvent: any[] = [];

  public xEvent: EventDTO = {
    id: 0,
    name: "",
    date: new Date(),
    location: "",
    competition: false,
    prize: 0.0
  };
  public event: EventDTO = {
    id: 0,
    name: "",
    date: new Date(),
    location: "",
    competition: false,
    prize: 0.0
  };
  public get bicycleC(): EventDTO {
    return this.event;
  }
  public set bicycleC(value: EventDTO) {
    this.event = value;
  }
  modalEditar?: BsModalRef;
  modalCrear?: BsModalRef;
  public eventWitoutId: Event = {
       name: "",
    date: new Date(),
    location: "",
    competition: false,
    prize: 0.0
  };
  openModal(template: TemplateRef<any>, id: string) {
    console.log(id.toString);
    this.getOne(id);
    this.modalEditar = this.modalService.show(template);

  }

  openModalCreate(template: TemplateRef<any>) {

    this.event.id = 0;
  
    this.modalCrear = this.modalService.show(template);

  }
  constructor(private http: HttpClient, private modalService: BsModalService) {
    console.log("Servicio Listo para consumir");
    this.getAll();

  }
  public getAll() {
    this.http.get(this.URL).subscribe((listado: any) => {
      this.listEvent = listado;
      console.log("All");
      console.log(this.listEvent);
    });
  }
  public getOne(id: string) {
    const urlOne = this.URL + id;
    this.http.get(urlOne).subscribe((event: any) => {
      console.log(event);
      this.xEvent = event;
      console.log("Get One " + this.xEvent);
    });
    // this.bike = this.bikeMock;
  }
  public update(id: string, type: string, brand: string, color: string) {
    console.log("update " + id.toString());
    const numericId = Number(id);




    //window.location.reload();
  }



  public create(type: string, brand: string, color: string) {
    console.log("create")

    console.log(this.xEvent)

      //  window.location.reload();
  }

  public delete(id: number,) {
    console.log("delete")
    const numericId = Number(id);

    this.http.delete(this.URL + numericId).subscribe((response: any) => {
      console.log("deleteResponse " + response);

    });
    window.location.reload();
  }


}


