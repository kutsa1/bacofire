import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {FirebaseService} from '../../services/firebase.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-get-collection',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './get-collection.component.html',
  styleUrl: './get-collection.component.css'
})
export class GetCollectionComponent {
  data: any[] = [];
  dataColumns: string[] = [];
  collectionName: string = '';

  constructor(private firebaseService: FirebaseService) {
  }

  listCollection(form: NgForm) {
    const formValue = Object.assign({}, form.value);
    if (formValue.name === '') {
      return;
    }
    this.collectionName = formValue.name;
    this.firebaseService.read(formValue.name).subscribe({
      next: (response: any) => {
        console.log(response);
        this.data = response;
        this.dataColumns = Object.keys(response[0]);
      },
      error: (error: any) => {
        console.error(error);
      }
    });

  }

  deleteCollection(id: string) {
    this.firebaseService.delete(this.collectionName, id)
      .then(r => {
        console.log(r)
      })
      .catch(e => {
        console.error(e);
      });
  }
}
