import { Component} from '@angular/core';
import { ViewStateService, ViewType } from 'src/app/view-state.service';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Creator } from 'src/app/creator';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent  {
  currentView!: ViewType;
  Creator = ViewType.Creator;
  User = ViewType.User;
  creator: Creator = {
    firstName: '',
    lastName: '',
    body: '',
    imageUrl: ''
  };

  constructor(
    private viewStateService: ViewStateService,
    private localStorageService: LocalStorageService
  ) {
    this.viewStateService.currentView$.subscribe((view) => {
      this.currentView = view;
    });
  }
  ngOnInit() {
    const storedCreatorData = this.localStorageService.get('creatorData');
    if (storedCreatorData) {
      this.creator = { ...storedCreatorData }; 
    }
  }
  
/*EDIT MODE*/
showEditMode: boolean = false;
editField: 'firstName'| 'lastName' | 'image' | 'body' | null = null;


onEdit(field: 'firstName'| 'lastName' | 'image' | 'body') {
  this.showEditMode = true;
  this.editField = field;
}

onSave() {
  this.showEditMode = false;
  this.localStorageService.set('creatorData', this.creator);
}


 /*CONTACT ME FORM*/
showFormFields: boolean = false;
firstName: string = '';
lastName: string = '';
email: string = '';
message: string = '';

onSubmit() {
  console.log('First Name:', this.firstName);
  console.log('Last Name:', this.lastName);
  console.log('Email:', this.email);
  console.log('Message:', this.message);

  this.firstName = '';
  this.lastName = '';
  this.email = '';
  this.message = '';
  this.showFormFields=false;
}
}
