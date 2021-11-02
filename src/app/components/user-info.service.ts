import { HttpClient } from "@angular/common/http";
import { UserInfo } from "./user-info.model";
import { Injectable } from "@angular/core";



@Injectable({providedIn: 'root'})
export class UserInfoService{
    private baseUrl: string ='https://skype-app-23623-default-rtdb.firebaseio.com/'
    private myInfoEndPoint = 'my-info.json'
   constructor(private http: HttpClient) {

   }


getUserInfo(){
    console.log
    return this.http.get<UserInfo>(this.baseUrl +this.myInfoEndPoint)

}

    modifyUserInfo(data:UserInfo){
       

        return this.http.put(this.baseUrl+this.myInfoEndPoint, data);

    } 

} 