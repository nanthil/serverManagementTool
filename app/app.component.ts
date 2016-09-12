import {Component} from 'angular2/core';
import {EquipmentComponent} from './EquipmentComponents/equipment.component'
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <single-equipment></single-equipment>
    `,
    directives: [EquipmentComponent]
})
export class AppComponent { }
