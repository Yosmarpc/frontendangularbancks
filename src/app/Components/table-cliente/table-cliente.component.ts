import { Component, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

import { ClientesServices } from '../../services/clientes.service';
import { clienteModel }  from '../../models/clientes'
import { apiUrl } from 'src/app/services/UrlApi';



@Component({
  selector: 'app-table-cliente',
  templateUrl: './table-cliente.component.html',
  styleUrls: ['./table-cliente.component.scss'],
  providers: [ClientesServices]
})
export class TableClienteComponent implements OnInit {
  public api: string;
  public clientes : ClientesServices[];
  public datosclienteId;
  public dataCliente;





  constructor(
    private client: ClientesServices,
  
    
  ) { 
   
    this.api = apiUrl.url;
  }



  ngOnInit(): void {
   this.client.getAllCliente().subscribe(res => {
     
     if (res.data.length > 0) {
       this.clientes = res.data;
       this.dataCliente = res.data;
     
       
      
     }else{
       console.log("Algo ha salido mal");
     }
   })
  }

  ngVerDatosDetalle(idCliente){
    
    this.datosclienteId = this.dataCliente.filter(x => x.idCliente === idCliente);
    
    
   
  }

}
