import { Component } from "@angular/core";
import { mock_downloads } from "../mock-downloads";
import { Download } from "./downloads.model";


@Component({    
selector:"downloads-component",
templateUrl:"downloads.components.html"

})

export class DownloadsComponent {
    downloads:Download[] = [];

    constructor(){
        for (var download of mock_downloads){
            this.downloads.push(new Download(download));


        }

    }

}