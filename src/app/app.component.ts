import { Component } from '@angular/core';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

export class Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-posts';

  posts: Post[] = [
    {title: 'Post title 1', text: 'Post title text 1', id: 1},
    {title: 'Post title 2', text: 'Post title text 2', id: 2}
  ]

  initialPost(post: Post) {
    this.posts.unshift(post)
    console.log('Received post: ', post)
  }

  removePost(id: number) {
    console.log("Post remove ID", id)
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
