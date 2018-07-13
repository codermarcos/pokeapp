import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public submit = new EventEmitter();
  public formSearch: FormGroup;
  public inputSearch: FormControl;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  submited() {
    this.submit.emit();
  }

  createForm() {
    this.formSearch = this.builder.group(this.createFields());
  }

  createFields() {
    this.inputSearch = new FormControl(null, [Validators.required]);

    return {
      search: this.inputSearch
    };
  }
}
