import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Pagination } from 'src/app/shared/models/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent  {

  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();
  @Input() pagination: Pagination;

}
