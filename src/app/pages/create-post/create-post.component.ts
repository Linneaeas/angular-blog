import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

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
imageUrl: string = ''; 


constructor(private localStorageService: LocalStorageService) {}

savePostToLocalStorage(postData: any) {
  this.localStorageService.set('posts', postData);
}


handleFileInput(event: any) {
  const files: FileList = event.target.files;
  if (files.length > 0) {
    this.postPic = files[0];
    this.imageUrl = URL.createObjectURL(this.postPic); 
  }
}
getImageUrl() {
  return this.imageUrl; 
}

onSubmit() {
  const imageUrl = this.postPic ? URL.createObjectURL(this.postPic) : '';

  const newPost = {
    postTitle: this.postTitle,
    postBody: this.postBody,
    postTags: this.postTags,
    postPic: this.imageUrl,
  };
  let posts: any[] = this.localStorageService.get('posts') || [];
  posts.push(newPost);

  this.localStorageService.set('posts', posts);

  const formData = new FormData();
  formData.append('postTitle', this.postTitle);
  formData.append('postBody', this.postBody);
  formData.append('postTags', this.postTags);
  formData.append('postPic', this.postPic as Blob);
  
  this.postTitle='';
  this.postBody='';
  this.postTags='';
  this.postPic=null;
  this.imageUrl = '';
}

}
