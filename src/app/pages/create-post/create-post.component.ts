import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
postTitle: string = '';
postBody: string = '';
postTags: string = '';
postPic: File | null = null; 

handleFileInput(event: any) {
  const files: FileList = event.target.files;
  if (files.length > 0) {
    this.postPic = files[0]; 
  }
}
getImageUrl() {
  if (this.postPic) {
    return URL.createObjectURL(this.postPic);
  }
  return ''; 
}

onSubmit() {
  const formData = new FormData();
  formData.append('postTitle', this.postTitle);
  formData.append('postBody', this.postBody);
  formData.append('postTags', this.postTags);
  formData.append('postPic', this.postPic as Blob);
}
}
