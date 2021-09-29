import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor() { }

    public toasError(text: string) {
        swal.fire({
            title: 'Error',
            text: text,
            icon: 'error',
            timer: 3000,
            showConfirmButton: true,
            confirmButtonText: 'Entendido'
        });
    }

    public toasSuccess(text: string) {
        swal.fire({
            title: 'Exitoso',
            text: text,
            icon: 'success',
            timer: 3000,
            showConfirmButton: true,
            confirmButtonText: 'Entendido'
        });
    }

    public confirmToastDelete() {
        return swal.fire({
            title: 'Eliminar',
            text: '¿Desea eliminar el registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'

        });
    }

    public deleteToastSuccess() {
        return swal.fire({
            title: 'Exitoso',
            text: 'Registro eliminado exitosamente',
            icon: 'success',
            timer: 3000,
            showConfirmButton: true,
            confirmButtonText: 'OK'
        });
    }
}
