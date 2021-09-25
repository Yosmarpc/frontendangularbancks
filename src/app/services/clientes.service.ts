import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from  '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from './UrlApi';

@Injectable()

export class ClientesServices{
    public api: string;
    public datosclienteId : [];
    constructor(private http: HttpClient)
    {
        this.api = apiUrl.url;
        this.datosclienteId = null
    }
    
    getAllCliente():Observable<any>{
        return this.http.get(this.api + 'clientes/datoscliente');
    }

}