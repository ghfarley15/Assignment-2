

import { Component, Injectable, OnInit } from "@angular/core";

import { UserInfo } from "../user-info.model";
import { UserInfoService } from "../user-info.service";


// @Injectable()
// @Component({    
//     selector:"numbers-component",
//     templateUrl:"numbers.components.html"
    
//     })    

// export class NumbersComponent implements OnInit{
//     myInfo: UserInfo | undefined;
//     constructor(private http: HttpClient){
//     }
//     ngOnInit(): void {
//         console.log("Sending A Get Request");
//         this.getUserInfo();
//         console.log("Got User Info")
//         this.showUserInfo();
//     }

//     getUserInfo(){
//         return this.http.get<UserInfo>('https://skype-app-23623-default-rtdb.firebaseio.com/my-info.json')

//     }

//     showUserInfo(){
//         this.getUserInfo().subscribe ((data: UserInfo)=>{
//             console.log(data);
//             this.myInfo = data;
//         })
//     }
// }
@Component({
    selector:"numbers-component",
    templateUrl:"numbers.components.html"
    
    })   
    
    export class NumbersComponent implements OnInit{
        myInfo: UserInfo | undefined;
    
        constructor(private userInfoService:UserInfoService){
        }
    
    
    
        ngOnInit(): void {
            console.log("Sending A Get Request");
            this.userInfoService.getUserInfo();
            console.log("Got User Info")
            this.showUserInfo();
        }
    
    
    
        showUserInfo(){
            this.userInfoService.getUserInfo().subscribe ((data: UserInfo)=>{
                console.log(data);
                this.myInfo = data;
            })
        }
    }