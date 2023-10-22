import { Component, OnInit} from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: Post = {
    id: '',
    title:'',
    body:'',
    tags:[],
    thumbnailUrl:'',
    creationDate: new Date(),
    likes: 0,
    dislikes:0,
    comments:[]
  };

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {

    const postId = this.route.snapshot.paramMap.get('id');

   
    const postData = this.getSavedPostData().find((post: any) => post.id === postId);


    if (postData) {
      this.post = postData;
    }
  }

  getSavedPostData(): Post[] {
    return this.localStorageService.get('posts');
  }
}