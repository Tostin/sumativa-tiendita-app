import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntermediarioService {

  theValueID: number | any = 0;

  constructor() {



  }

  getTheValueID(): number | any {
    console.log("get de value ID: ", this.theValueID);
    return this.theValueID;
    
  }


  setTheValueID(id: number | any) {
    this.theValueID = id;
    console.log("se recibe id: ", id);
  }


}
