import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  file:any;
  data =  [
    {Age: 19, Name: 'John', City: 'Bethesda', Email: 'john@gmail.com'},
    {Age: 18, Name: 'John', City: 'Bethesda', Email: 'john@gmail.com'},
    {Age: 17, Name: 'John', City: 'Bethesda', Email: 'john@gmail.com'},
    {Age: 17, Name: 'John', City: 'Bethesda', Email: 'john@gmail.com'},
    {Age: 19, Name: 'John', City: 'Doe', Email: 'john@gmail.com'},
    {Age: 19, Name: 'John', City: 'Doe', Email: 'john@gmail.com'},
    {Age: 19, Name: 'John', City: 'Bethesda', Email: 'john@gmail.com'},
    {Age: 18, Name: 'John', City: 'Bethesda', Email: 'john@gmail.com'},
    {Age: 17, Name: 'John', City: 'Bethesda', Email: 'john@gmail.com'},
    {Age: 17, Name: 'John', City: 'Bethesda', Email: 'john@gmail.com'},
    {Age: 19, Name: 'John', City: 'Doe', Email: 'john@gmail.com'},
    {Age: 19, Name: 'John', City: 'Doe', Email: 'john@gmail.com'}
  ];
  fileChanged(e) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
        let reader = new FileReader();
        reader.onload = () => {
            this.data = [];
            for(let s of reader.result.split('\n')) {
              let a = s.split(' ');              
              this.data.push({Age: a.shift(), Name: a.shift()+' '+a.shift(), City: a.shift(), Email: a.pop()});
            }
        }
        reader.readAsText(input.files[index]);
    };
  }
}

export interface Element {
  Age: number;
  Name: string;
  City: string;
  Email: string;
}

const data: Element[] = [
  {Age: 19, Name: 'John', City: 'Bethesda', Email: 'john@gmail.com'},
  {Age: 18, Name: 'John', City: 'Bethesda', Email: 'john@gmail.com'},
  {Age: 17, Name: 'John', City: 'Bethesda', Email: 'john@gmail.com'},
  {Age: 17, Name: 'John', City: 'Bethesda', Email: 'john@gmail.com'},
  {Age: 19, Name: 'John', City: 'Doe', Email: 'john@gmail.com'},
  {Age: 19, Name: 'John', City: 'Doe', Email: 'john@gmail.com'},
];