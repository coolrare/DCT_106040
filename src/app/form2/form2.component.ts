import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';

function NaNValidator(c: AbstractControl) {
  let isNaN = Number.isNaN(+c.value);
  return isNaN ? { NaN: true } : null;
}

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  form: FormGroup;
  data = {
    title: 'Hello 2',
    subtitle: 'World 2',
    people: [
      { name: 'Will', tel: '0232423432', email: 'will.huang@example.com'},
      { name: 'John', tel: '0934834734', email: 'doggy@xmail.com'},
      { name: 'Mary', tel: '0584847545', email: 'mary@xmail.com'}
    ]
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          NaNValidator
        ]
      ],
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

    this.form.setControl('people',
      this.fb.array(this.data.people.map(p => this.fb.group(p))));

    this.form.reset(this.data);
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
