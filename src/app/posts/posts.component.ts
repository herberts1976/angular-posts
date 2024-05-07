import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Post } from '../interfaces/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {

  posts: Post[];
  postService = inject(PostService);

  constructor() {
    this.posts = [];
  }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

}
