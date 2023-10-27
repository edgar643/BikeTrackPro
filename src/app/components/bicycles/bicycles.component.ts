import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BicycleDTO ,Bicycle} from './bicycleDTO';

@Component({
    selector: 'app-bicycles',
    templateUrl: './bicycles.component.html',
    styleUrls: ['./bicycles.component.css']
})
export class BicyclesComponent {
    private urlHost = 'http://localhost:3000/bicycle/';
    public listBicycles: any[] = [];
    public bicycle: BicycleDTO = {
        id: 0
        , type: ""
        , brand: ""
        , color: ""
    };
    public bicycleWitoutId: Bicycle = {
         type: ""
        , brand: ""
        , color: ""
    };


    constructor(private http: HttpClient) {
        console.log("Servicio Listo para consumir");
        //this.listBicycles =this.listMock;
        this.getAll();
        //this.listBicycles = this.listMock;
    }

    private getAll() {
        this.http.get(this.urlHost).subscribe((listado: any) => {
            this.listBicycles = listado;
            console.log("All Bicycles");
            console.log(this.listBicycles);
        });
    }
    public getOne(id: string) {
        const urlOne = this.urlHost + id;
        this.http.get(urlOne).subscribe((bike: any) => {
            console.log(bike);
            this.bicycle = bike;
            console.log("Get One " + this.bicycle);
        });
        // this.bike = this.bikeMock;
    }
    public update(id: number, type: string, brand: string, color: string) {
        console.log("update")
        const numericId = Number(id);

        if (isNaN(numericId)) {
            console.error("ID must be a numeric value.");
            return; // Sal del método si el ID no es numérico
        }

        this.bicycle.id = numericId;
        this.bicycle.type = type;
        this.bicycle.brand = brand;
        this.bicycle.color = color;
        console.log(this.bicycle)
        this.http.put(this.urlHost + this.bicycle.id, this.bicycle).subscribe((response: any) => {
            console.log("Update");
            console.log(response);
        });
        window.location.reload();
    }

    public create(type: string, brand: string, color: string) {
        console.log("create")
        this.bicycleWitoutId.type = type;
        this.bicycleWitoutId.brand = brand;
        this.bicycleWitoutId.color = color;
        console.log(this.bicycle)
        this.http.post(this.urlHost, this.bicycleWitoutId).subscribe((response: any) => {
            console.log("Create");
            console.log(response);
        });
        window.location.reload();
    }

    public delete(id: number,) {
        console.log("delete")
        const numericId = Number(id);

        this.http.delete(this.urlHost + numericId).subscribe((response: any) => {
            console.log("deleteResponse " + response);

        });
         window.location.reload();
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
    ];
}
