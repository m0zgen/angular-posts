import {Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';
import {Post} from '../app.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck
{

  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>()

  @ContentChild('info', {static: true}) infoRef: ElementRef

  // tslint:disable-next-line:typedef
  removePost() {
    this.onRemove.emit(this.post.id);
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnCganges', changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    // console.log(this.infoRef.nativeElement)
  }

  ngDoCheck(): void {
    console.log('DoCheck')
  }
}
