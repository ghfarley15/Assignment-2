

import { Component, Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserInfo } from "../user-info.model";



@Injectable()
@Component({    
    selector:"numbers-component",
    templateUrl:"numbers.components.html"
    
    })    

export class NumbersComponent implements OnInit{
    myInfo: UserInfo | undefined;
    constructor(private http: HttpClient){
    }
    ngOnInit(): void {
        console.log("Sending A Get Request");
        this.getUserInfo();
        console.log("Got User Info")
        this.showUserInfo();
    }

    getUserInfo(){
        return this.http.get<UserInfo>('https://skype-app-23623-default-rtdb.firebaseio.com/my-info.json')

    }

    showUserInfo(){
        this.getUserInfo().subscribe ((data: UserInfo)=>{
            console.log(data);
            this.myInfo = data;
        })
    }
}