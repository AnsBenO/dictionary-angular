import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Theme } from 'src/app/types/Theme.enum';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent implements OnInit {
  @Input() theme!: Theme;
  @Output() themeChange = new EventEmitter<Theme>();

  label!: string;
  isChecked!: boolean;
  ngOnInit(): void {
    this.updateLabel();
    this.updateCheck();
  }
  handleClick() {
    const updatedTheme = this.theme === Theme.light ? Theme.dark : Theme.light;
    this.theme = updatedTheme;
    this.updateLabel();
    this.themeChange.emit(updatedTheme);
  }

  updateLabel() {
    this.label = this.theme !== Theme.light ? 'LIGHT MODE' : 'DARK MODE';
  }
  updateCheck() {
    this.isChecked = this.theme === Theme.light;
  }
}
