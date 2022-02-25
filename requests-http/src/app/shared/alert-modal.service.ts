import { Injectable } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { AlertModalComponent } from './alert-modal/alert-modal.component';


export enum AlertTypes{
  DANGER = 'danger',
  DARK = 'dark',
  INFO = 'info',
  LIGHT = 'light',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: string, dismissTimeout?: number){
    const modalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    modalRef.content.type = type;
    modalRef.content.message = message;

    if ( dismissTimeout ){
      setTimeout(()=> modalRef.hide(), dismissTimeout);
    }

  }

  showAlertDanger(message: string){
    this.showAlert(message, AlertTypes.DANGER, 3000);
  }

  showAlertDark(message: string){
    this.showAlert(message, AlertTypes.DARK);
  }

  showAlertInfo(message: string){
    this.showAlert(message, AlertTypes.INFO);
  }

  showAlertLight(message: string){
    this.showAlert(message, AlertTypes.LIGHT);
  }

  showAlertPrimary(message: string){
    this.showAlert(message, AlertTypes.PRIMARY);
  }

  showAlertSecondary(message: string){
    this.showAlert(message, AlertTypes.SECONDARY);
  }

  showAlertSuccess(message: string){
    this.showAlert(message, AlertTypes.SUCCESS, 3000);
  }

  showAlertWarning(message: string){
    this.showAlert(message, AlertTypes.WARNING);
  }

}
