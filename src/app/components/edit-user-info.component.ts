import { Component } from "@angular/core";
import { DatabaseService } from "./database.service";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";


@Component({
selector: 'edit-user-info',
templateUrl: 'edit-user-info.component.html'
})


export class EditUserInfoComponent{

constructor(private infoService:UserInfoService, private dbService:DatabaseService){
        dbService.showData();

}

        onUpdateUserInfo(data:UserInfo){
            console.log("levi's pressed");
            console.log(data);
            this.infoService.modifyUserInfo(data).subscribe(data => 
                {console.log("updated infor sent")});
        }


}