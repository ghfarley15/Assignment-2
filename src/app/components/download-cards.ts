import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-cards',
  templateUrl: './download-cards.html'
  
})
export class downloadcards {
    @Input()
    title!:string;

    @Input()
    uurl!:string;
    
    @Input()
    imagePath!:string;



}