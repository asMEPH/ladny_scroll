import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {

  @Input() buttons: Array<string> ;
  @Input() galleryList: Array<any> ;

  selected = -1;
  constructor() { }

  changeGallery(i){
    this.selected = i;

  }

  ngOnInit() {
  }

}
