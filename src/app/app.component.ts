import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {FirebaseService} from './services/firebase.service';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {BrowserModule} from '@angular/platform-browser';
import {GetCollectionComponent} from './components/get-collection/get-collection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AngularFirestoreModule,
    GetCollectionComponent,
    RouterLink
  ],
  providers: [FirebaseService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'kufutsal-firebase';

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.firebaseService.listCollectionsByName()
      .then((response: any) => {
        console.log(response);
      });
  }


}
