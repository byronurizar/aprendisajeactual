import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ClientesServicio } from 'src/app/servicios/cliente.service';
import { Cliente } from 'src/app/modelo/cliente.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  @ViewChild("clienteForm") clienteForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;
  constructor(private _clienteServicio: ClientesServicio,
    private _flassMessage: FlashMessagesService) { }

  ngOnInit() {
    this._clienteServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

  getSaldoTotal() {
    let saldoTotal: number = 0;
    if (this.clientes) {
      this.clientes.forEach(cliente => {
        saldoTotal = +cliente.saldo;
      })
    }
    return saldoTotal;
  }
  agregar({ value, valid }: { value: Cliente, valid: boolean }) {
    if (!valid) {
      this._flassMessage.show("Por favor llena el formulario correctamente", {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      //Agregamos el nuevo elemento
      this._clienteServicio.agregarCliente(value);
      this.clienteForm.resetForm();
      this.cerrarModal();
    }
  }
  private cerrarModal() {
    this.botonCerrar.nativeElement.click();
  }

}
