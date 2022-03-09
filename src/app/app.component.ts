import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /* this will be used by index.html to render the Component*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ng-app';
  url:string;
  name:string;
  myname:string;
  strLength:number;
  names:Array<string>;
  selectedName:string;
  canShow:boolean;
  constructor(){
    this.name = "Angular Training";
    this.url = "https://www.webnethelper.com";
    this.myname="";
    this.strLength = 0;
    this.strLength = this.myname.length;
    this.names= new Array<string>();
    this.names.push('Ethan Hunt');
    this.names.push('Jack Reacher');
    this.names.push('Indiana Jones');
    this.names.push('Jason Bourn');
    this.names.push('James Bond');
    this.selectedName = '';
    this.canShow = false;
  }

  changeName():void {
    this.name = "Angular Training for BlazeClan";
  }

  toggle():void{
    if(!this.canShow){
      this.canShow = true;
    }else {
      this.canShow = false;
    }
  }
}
