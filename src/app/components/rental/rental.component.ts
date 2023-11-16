import { Component } from '@angular/core';
import { OnInit, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { RentalDTO, Bicycle } from './bicycleDTO';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent {
  modalEditar?: BsModalRef;
  modalCrear?: BsModalRef;
  //private header =
  private HOST = 'http://192.168.1.2';
  private PORT = ':5003';
  private URL = this.HOST + this.PORT + '/api/v1/rental/';
  public list: any[] = [];
  public listOccupied: any[] = [];
  constructor(private http: HttpClient, private modalService: BsModalService) {
    this.getAllDisp();
  }
  public rentalDTO: RentalDTO = {
    id: 0
    , type: ""
    , brand: ""
    , color: ""
    , status: ""
  };

  openModal(template: TemplateRef<any>, id: string) {
    console.log(id.toString);
  }

  openModalCreate(template: TemplateRef<any>) {

    this.rentalDTO.id = 0;
    this.rentalDTO.type = "";
    this.rentalDTO.brand = "";
    this.rentalDTO.color = "";
    this.modalCrear = this.modalService.show(template);
  }
  public getAllDisp() {
    // Realiza la solicitud HTTP GET con los parámetros
    this.http.get(this.URL + "availables").subscribe(
      (data: any) => {
        this.list = data;
        console.log(data);
      });
  }
  public getAllOccupied() {
    // Realiza la solicitud HTTP GET con los parámetros
    this.http.get(this.URL + "occupied").subscribe(
      (data: any) => {
        this.listOccupied = data;
        console.log(data);
      });
  }
  public getOne(id: string) {
    const urlOne = this.URL + id;
    this.http.get(urlOne).subscribe((response: any) => {
      console.log(response);
      this.rentalDTO = response;
      console.log("Get One " + this.rentalDTO);
    });
  }


  public bookRental(id: number, type: string, brand: string, color: string) {
    console.log("update " + id.toString());
    const numericId = Number(id);
    this.rentalDTO.status = status;
    this.rentalDTO.id = id;
    this.rentalDTO.type = type;
    this.rentalDTO.brand = brand;
    this.rentalDTO.color = color;
    console.log(this.rentalDTO);
    this.http.put(this.URL + "book/" + id, this.rentalDTO)
      .subscribe(response => {
        console.log("Update");
        console.log("response: ", response);
        this.modalEditar?.hide();
        this.getAllDisp();
        this.getAllOccupied();
      });
  }
  public checkOutRental(id: number, type: string, brand: string, color: string) {
    console.log("update " + id.toString());
    const numericId = Number(id);
      this.rentalDTO.id = id;
    this.rentalDTO.type = type;
    this.rentalDTO.brand = brand;
    this.rentalDTO.color = color;
    console.log(this.rentalDTO);
    this.http.put(this.URL + "checkout/" + id, this.rentalDTO)
      .subscribe(response => {
        console.log("Update");
        console.log("response: ", response);
        this.modalEditar?.hide();
        this.getAllDisp();
        this.getAllOccupied();
      });
  }
}
