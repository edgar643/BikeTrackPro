import { Component } from '@angular/core';
import { OnInit, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { RentalDTO, Bicycle } from './bicycleDTO';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import axios from 'axios';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent {
  modalEditar?: BsModalRef;
  modalCrear?: BsModalRef;
  //private header =
  private HOST = 'http://localhost';
  private PORT = ':5003';
  private URL = this.HOST + this.PORT + '/api/v1/rental/';
  public list: any[] = [];
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
    this.http.get(this.URL+"availables").subscribe(
      (data: any) => {
      this.list = data;
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


  public updateRental(id: number, type: string, brand: string, color: string) {
    console.log("update " + id.toString());
    const numericId = Number(id);
    this.rentalDTO.status = "Ocuppied";
    this.rentalDTO.id = id;
    this.rentalDTO.type = type;
    this.rentalDTO.brand = brand;
    this.rentalDTO.color = color;
    console.log(this.rentalDTO);
    // Define los parámetros que deseas enviar en la solicitud
    //const params = new HttpParams().set('status', 'Available');
   // const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsInVzZXJuYW1lIjoiYyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5ODQ5MDgwMiwiZXhwIjoxNjk4NTEyNDAyfQ.1dOzJ8dwEcKXO__ltUOdjc89tCK__Oig3lZ5t5jm53o');
    this.http.patch(this.URL + "book/" + id, this.rentalDTO)
      .subscribe(response => {
        console.log("Update");
        console.log("response: ", response);
        this.modalEditar?.hide();
        this.getAllDisp();
      })
      ;

    //window.location.reload();
  }

}
