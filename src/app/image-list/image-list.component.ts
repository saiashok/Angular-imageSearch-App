import { Component, OnInit } from '@angular/core';
import {ImageService} from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
images: any[];
imagesFound: boolean = false;

handleSuccess(data){
  this.imagesFound = true;
  this.images = data.hits;
  console.log(data.hits);

}

handleError(error){
  console.log(error);
}
  constructor(private imageSerivce:ImageService) { }
   

  
  searchImages(query:string){

    return this.imageSerivce.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      ()=> console.log("Request completed..!")
    );
  }
  ngOnInit() {
  }

}
