import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RefundService {

  constructor(private http:HttpClient) { }

  getAllRefundReq(){
    return this.http.get(environment.URL + `refund/getAll`);
  }

  //InProcess: 'IN_PROCESS',
  // Accept: 'REFUND_INITIATED',
  // Refund: 'ACCEPTED',
  // Reject: 'REJECTED',
  updateRefundStatus(id:any, status:string){
    return this.http.put(environment.URL + 'update/refund-status/${id}',{
      status: status
    })
  }

  deleteRefundReq(id:any){
    return this.http.delete(environment.URL + `delete/refund/${id}`);
  }
}
