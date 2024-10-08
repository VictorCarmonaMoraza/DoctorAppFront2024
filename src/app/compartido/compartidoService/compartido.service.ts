import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from '../../usuario/interfaces/sesion';


@Injectable({
  providedIn: 'root'
})
export class CompartidoService {

  constructor(private _snackBar: MatSnackBar) { }

  showAlert(msg: string, type: string) {
    this._snackBar.open(msg, type, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
    })
  }

  saveSesion(sesion: Sesion):void {
    localStorage.setItem("userSesion", JSON.stringify(sesion));
  }

  getSesion(): any {
    const sesionString = localStorage.getItem("userSesion");
    const userToken = JSON.parse(sesionString!);
    return userToken;
  }

  deleteSesion():void {
    localStorage.removeItem("userSesion");
  }
}
