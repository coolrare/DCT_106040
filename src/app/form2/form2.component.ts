import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['Hello', Validators.required],
      subtitle: 'World',
      people: this.fb.array([
        this.fb.group({
          name: '',
          tel: '',
          email: ''
        }),
        this.fb.group({
          name: this.fb.control(''),
          tel: '',
          email: ''
        })
      ])
    });
  }

  addPerson() {
    let people = this.form.get('people') as FormArray;
    people.push(
      this.fb.group({
        name: this.fb.control(''),
        tel: '',
        email: ''
      })
    );
  }
}
