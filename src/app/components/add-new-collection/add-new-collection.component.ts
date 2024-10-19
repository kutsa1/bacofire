import {Component} from '@angular/core';
import {JsonAreaComponent} from '../json-area/json-area.component';
import {FormBuilder, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-add-new-collection',
  standalone: true,
  imports: [
    JsonAreaComponent,
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './add-new-collection.component.html',
  styleUrl: './add-new-collection.component.css'
})
export class AddNewCollectionComponent {
  jsonForm: FormGroup;
  isValidJson: boolean = true;

  constructor(private fb: FormBuilder, private firebaseService: FirebaseService) {
    this.jsonForm = this.fb.group({
      jsonInput: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  validateJson(value: NgModel): void {
    this.isValidJson = this.isJsonString(value.value);
  }

  isJsonString(str: string): boolean {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }


  addNewCollection(form: NgForm) {
    const formValue = Object.assign({}, form.value);
    const json = JSON.parse(formValue.value);
    if (formValue.name === '') {
      return;
    }
    this.firebaseService.create(formValue.name, json)
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
