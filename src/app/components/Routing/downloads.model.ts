export class Download {
    title:string;
    uurl: string;
    imagePath:string


constructor({  title,uurl,imagePath }:
    {title:string,uurl:string,imagePath:string}) {
        this.title = title;
        this.uurl = uurl;
        this.imagePath=imagePath;

    }

}