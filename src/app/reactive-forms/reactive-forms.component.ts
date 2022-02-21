import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  formOutput =  {carsSelect: '', lastName: ''}

  profileForm = new FormGroup({
    carsSelect: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  callButton() {
    this.formOutput = this.profileForm.value
  }

}
