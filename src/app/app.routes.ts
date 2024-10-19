import {Routes} from '@angular/router';
import {GetCollectionComponent} from './components/get-collection/get-collection.component';
import {AddNewCollectionComponent} from './components/add-new-collection/add-new-collection.component';

export const routes: Routes = [
  {
    path: 'collection-list',
    component: GetCollectionComponent
  },
  {
    path: 'add-new-collection',
    component: AddNewCollectionComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'collection-list'
  }
];
