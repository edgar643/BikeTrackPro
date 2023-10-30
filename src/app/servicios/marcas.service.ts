import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MarcasService {
private  marcas:any[] ;
 constructor() {

       }
public  getMarcas(){
return this.marcas;

}
}
