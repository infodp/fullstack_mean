import { Injectable } from '@angular/core';
declare let alertify: any
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  error(message: string) {    
    alertify.error(message)
  }
  warning(message: string) {    
    alertify.warning(message)
  }
  message(message: string) {    
    alertify.message(message)
  }
  success(message: string) {    
    alertify.success(message)
  }
  alert(message: string) {    
    alertify.alert(message)
  }

  confirm({message, callback_delete}: {message: string; callback_delete: ()=> any;}){
    alertify.confirm(message, function(e:any){
      if(e){
        callback_delete();
        alertify.success("Product successfully removed.")
      }
    })
  }
}
