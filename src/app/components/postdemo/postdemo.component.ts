import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-postdemo',
  templateUrl: './postdemo.component.html',
  styleUrls: ['./postdemo.component.css']
})
export class PostdemoComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      data => this.posts = data
    );
  }

  createPost() {
    let newPost: Post;
    newPost = {
      id: null,
      title: 'New post title',
      body: 'Hello this is the newly created post'
    };

    this.postService.createPost(newPost).subscribe(
      data => {
        console.log(data);
        this.posts.unshift(data);
      }
    );
  }

}
