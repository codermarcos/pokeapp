import {
  trigger,
  group,
  style,
  animate,
  transition
} from '@angular/animations';

export const FlyOutAnimation = trigger('flyInOut', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate(500)
  ]),
  transition(':leave', [
    group([
      animate('0.2s ease', style({
        transform: 'translate(100%)'
      })),
      animate('0.5s 0.2s ease', style({
        opacity: 0
      }))
    ])
  ])
]);
