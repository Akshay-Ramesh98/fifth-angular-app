import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-rows',
  templateUrl:  './rows.component.html',
  styleUrls: ['./rows.component.css']
})
export class RowsComponent implements OnInit {




userForm:FormGroup;
  listData:any;
  
  constructor(private fb:FormBuilder  ){

    this.listData = [];

  this.userForm = this.fb.group({
    Username : ['', Validators.required],
    Password: ['', Validators.required]
  })
}

addItem(){
  this.listData.push(this.userForm.value);
  this.userForm.reset();
}
reset(){
  this.userForm.reset();
}

removeItems(element:any){
  this.listData.forEach((value:any,dex:any) => {
    if(value == element){
      this.listData.splice(dex,1)
    }

  });


}
  ngOnInit(): void {
  }

}




