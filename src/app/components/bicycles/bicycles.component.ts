import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient ,HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { BicycleDTO, Bicycle } from './bicycleDTO';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
    selector: 'app-bicycles',
    templateUrl: './bicycles.component.html',
    styleUrls: ['./bicycles.component.css']
})
export class BicyclesComponent {
    private HOST = 'http://192.168.1.2';
    private PORT = ':5000';
    private URL = this.HOST + this.PORT+ '/api/v1/bikes';
    public listBicycles: any[] = [];
    private dato: any ={
        "brand": "Specialized",
        "type": "Mountain Bike",
        "color": "Pink"
    };
    public bicycle: BicycleDTO = {
        id: 0
        , type: ""
        , brand: ""
        , color: ""
    };
    public bicycleC: BicycleDTO = {
        id: 0
        , type: ""
        , brand: ""
        , color: ""
    };
    modalEditar?: BsModalRef;
    modalCrear?: BsModalRef;
    public bicycleWitoutId: Bicycle = {
          type: ""
        , brand: ""
        , color: ""
    };
    openModal(template: TemplateRef<any>, id: string) {
        console.log(id.toString);
        this.getOne(id);
        this.modalEditar = this.modalService.show(template);

    }

    openModalCreate(template: TemplateRef<any>) {

        this.bicycleC.id = 0;
        this.bicycleC.type = "";
        this.bicycleC.brand = "";
        this.bicycleC.color = "";
        this.modalCrear = this.modalService.show(template);

    }
    constructor(private http: HttpClient, private modalService: BsModalService) {
        console.log("Servicio Listo para consumir");
       this.getAll();
        //this.listBicycles = this.listMock;
    }
    public getAll() {
        // Make an HTTP GET request to the specified URL
          console.log(this.URL);
        this.http.get(this.URL).subscribe(
          
            (listado: any) => {
                // Success callback
                this.listBicycles = listado;
    
                // Log to the console the message "All Bicycles"
                console.log("All Bicycles");
                // Log to the console the content of 'listBicycles'
                console.log(this.listBicycles);
            },
            (error) => {
                // Error callback
                // Display an alert with the error message
                alert(`Error: ${error.message}`);
                // Log the error to the console
                console.error("Error fetching bicycles:", error);
            }
        );
    }
    
    public getOne(id: string) {
        const urlOne = this.URL +"/"+ id;
        this.http.get(urlOne).subscribe((bike: any) => {
            console.log(bike);
            this.bicycle = bike;
            console.log("Get One " + this.bicycle);
        });
    }

  public update(id: string, type: string, brand: string, color: string) {
    console.log("update " + id.toString());
    const numericId = Number(id);
    this.bicycleWitoutId.type = type;
    this.bicycleWitoutId.brand = brand;
    this.bicycleWitoutId.color = color;
    console.log(this.bicycle, this.bicycleWitoutId);
    this.http.put(this.URL +"/" + id, this.bicycleWitoutId)
      .subscribe(response => {
        console.log("Update");
        console.log("response: ", response);
        this.modalEditar?.hide();
        this.getAll();
      });
  }



    public create(type: string, brand: string, color: string) {
        console.log("create")
        this.bicycleWitoutId.type = type;
        this.bicycleWitoutId.brand = brand;
        this.bicycleWitoutId.color = color;
        console.log(this.bicycle)
        console.log(this.bicycle, this.bicycleWitoutId);
        this.http.post(this.URL, this.bicycleWitoutId)
                 .subscribe((response: any) => {
            console.log("Create");
            console.log(response);
            //this.getAll();
        });
      //  window.location.reload();
    }

    public delete(id: number) {
        console.log("delete")
        const numericId = Number(id);

        this.http.delete(this.URL +"/"+ numericId).subscribe((response: any) => {
            console.log("deleteResponse " + response);

        });

    }


    bikeMock = {
        "id": 1,
        "brand": "Pinarello",
        "type": "Road Bike",
        "color": "Carbon Black"
    };

    listMock = [{
        "id": 1,
        "brand": "Pinarello",
        "type": "Road Bike",
        "color": "Carbon Black"
    },
    {
        "id": 2,
        "brand": "Diamondback",
        "type": "Mountain Bike",
        "color": "Electric Blue"
    },
    {
        "id": 3,
        "brand": "Raleigh",
        "type": "City Bike",
        "color": "Lime Green"
    },
    {
        "id": 4,
        "brand": "Fujix",
        "type": "Hybrid Bike",
        "color": "Navy Blue"
    },
    {
        "id": 5,
        "brand": "Cannon",
        "type": "Hybrid Bike",
        "color": "Dark Blue"
    },
    {
        "id": 6,
        "brand": "Optimus",
        "type": "Mountain Bike",
        "color": "Black-Yellow"
    },
    {
        "id": 7,
        "brand": "Specialized",
        "type": "Mountain Bike",
        "color": "Yellow"
    },
    {
        "id": 8,
        "brand": "Trek",
        "type": "Road Bike",
        "color": "Blue"
    },
    {
        "id": 9,
        "brand": "Cannondale",
        "type": "Hybrid Bike",
        "color": "Green"
    },
    {
        "id": 10,
        "brand": "Giant",
        "type": "City Bike",
        "color": "Black"
    },
    {
        "id": 11,
        "brand": "Scott",
        "type": "Electric Bike",
        "color": "Silver"
    },
    {
        "id": 12,
        "brand": "Schwinn",
        "type": "Road Bike",
        "color": "Red"
    },
    {
        "id": 13,
        "brand": "Specialized",
        "type": "Mountain Bike",
        "color": "Pink"
    },
    {
        "id": 14,
        "brand": "Giant",
        "type": "City Bike",
        "color": "White"
    },
    {
        "id": 16,
        "brand": "Cannondale",
        "type": "Hybrid Bike",
        "color": "Purple"
    },
    {
        "id": 17,
        "brand": "GW",
        "type": "Mountain",
        "color": "black"
    },
    {
        "id": 15,
        "brand": "Santa Cruz",
        "type": "Mountain Bike",
        "color": "Deep-Blue"
    }
    ];}
