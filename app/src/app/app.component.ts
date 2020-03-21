import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'covid-risk';
  dataForm;

  hospRisk = 20;
  deathRisk = 5;

  constructor(private formBuilder: FormBuilder) {
    this.dataForm = formBuilder.group({
      age: '',
      sex: '',
      conditions: '',
    });
  }

  ngOnInit(){
    console.log('mark');
  }

  submit() {
    console.log('clicked submit'); //
    this.hospRisk = this.dataForm.value.age;
  }
}
