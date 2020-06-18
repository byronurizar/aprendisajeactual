import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClientesServicio } from 'src/app/servicios/cliente.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }
  id: String;

  constructor(private _clienteServicio: ClientesServicio,
    private _flassMessage: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this._clienteServicio.getCliente(this.id).subscribe(cliente => {
      this.cliente = cliente;
    });

  }

  guardar({ value, valid }: { value: Cliente, valid: boolean }) {
    if (!valid) {
      this._flassMessage.show("Por favor llenar el formulario", {
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else {
      value.id = this.id;
      this._clienteServicio.modificarCliente(value);
      this.router.navigate(['/']);

    }
  }
  eliminar(){
    if(confirm('Seguro que desea eliminar el cliente?')){
      this._clienteServicio.eliminarCliente(this.cliente)
      this.router.navigate(['/']);
    }
  }




}
