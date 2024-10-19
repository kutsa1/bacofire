import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-json-area',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './json-area.component.html',
  styleUrl: './json-area.component.css'
})
export class JsonAreaComponent implements OnInit {
  jsonForm: FormGroup;
  isValidJson: boolean = true;

  constructor(private fb: FormBuilder) {
    this.jsonForm = this.fb.group({
      jsonInput: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  validateJson(): void {
    const jsonInput = this.jsonForm.get('jsonInput')?.value;
    this.isValidJson = this.isJsonString(jsonInput);
  }

  isJsonString(str: string): boolean {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }

  onSubmit(): void {
    if (this.isValidJson) {
      const jsonData = this.jsonForm.value.jsonInput;
      console.log('Valid JSON:', jsonData);
      // Handle the valid JSON data here
    }
  }
}
