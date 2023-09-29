import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


   set(key:string, value:any){
    return Preferences.set({
      key: key,
      value: value
    });
  }


  get(key:any){
    return Preferences.get({key:key})
  }

  remove(key:string){
    return Preferences.remove({key: key});
  }
}
