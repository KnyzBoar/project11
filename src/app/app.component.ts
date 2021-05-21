import { BoundText } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { Contain } from 'src/app/Box cont/Box';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';

  //papper = document.getElementById('papper');
  

  box: Contain[] = [];
  text = ''
  boxtitle = ''
  number = 1;



  getCreate(){ 
     
    let b: Contain = {id: this.number++, title: this.boxtitle, textarea: this.text, time: new Date()}; 
    
    this.box.push(b);
  }

  getDelete(index:number){
    this.box.splice(index,1);
  }
  
}


