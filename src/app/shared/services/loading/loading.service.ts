import { Injectable, ComponentRef } from '@angular/core';
import { DomService } from '../dom';
import { LoadingComponent } from '../../components/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loader: ComponentRef<LoadingComponent>;

  constructor(private domService: DomService) { }

  start() {
    this.loader = this.domService.appendComponentToBody<LoadingComponent>(LoadingComponent);
  }

  end() {
    this.domService.destroyComponent(this.loader);
  }
}
