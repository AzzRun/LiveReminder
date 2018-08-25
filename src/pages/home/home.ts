import { Component } from '@angular/core';
import {Http} from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public tasks:any;
  constructor(public navCtrl: NavController,public http: Http) {
      this.http = http;
      this.http.get("http://149.91.81.246/LiveTODOList/index.php?action=0").map(res => res.json()).subscribe(data =>{
              this.tasks= data;//Bind data to items object
            });
            
  }
  CheckboxClicked(item: any, $event) {
    console.log('CheckboxClicked for ' + item.label);
}
datachanged(e:any){
  console.log(e);
  console.log(e.checked);  
}
}