import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = "pet";
  answer = "";
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData:{
        username: suggestedName
      },
    });
  }


}
