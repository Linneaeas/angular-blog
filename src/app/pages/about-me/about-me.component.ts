import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
   /*EDIT MODE*/

   
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
