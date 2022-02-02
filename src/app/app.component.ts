import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  myControl = new FormControl();
  options: any[] = [
    {"name":"Gray", "code":"#495057"},
    {"name":"Grape", "code":"#ae3ec9"},
    {"name":"Blue", "code":"#1c7ed6"},
    {"name":"Green", "code":"#37b24d"},
    {"name":"Orange", "code":"#f76707"},
    {"name":"Red", "code":"#f03e3e"},
    {"name":"Violet", "code":"#7048e8"},
    {"name":"Cyan", "code":"#1098ad"},
    {"name":"Lime", "code":"#74b816"},
    {"name":"Pink", "code":"#d6336c"},
    {"name":"Indigo", "code":"#4263eb"},
    {"name":"Teal", "code":"#0ca678"},
    {"name":"Yellow", "code":"#f59f00"}
  ];
  filteredOptions: Observable<any[]> | undefined;
  selectedColors: any[] = [];

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onSelect(color: any) {
    this.selectedColors.push(color);
  }

  onRemove(color: any) {
    const index = this.selectedColors.findIndex(obj => obj.code === color.code);
    this.selectedColors.splice(index,1)
  }
}
