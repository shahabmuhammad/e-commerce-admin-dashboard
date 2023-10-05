import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
 protected url!:string;
  constructor() {
    this.url = environment.url
   }
}
