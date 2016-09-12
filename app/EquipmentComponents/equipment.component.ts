import {Component} from 'angular2/core'

@Component({
    selector: 'single-equipment',
    template: `
    <div class="equipment">
        This is a component
     </div>
     `,
     styles: [`
        .equipment {
            background-color: blue;


        }
     `]
})
export class EquipmentComponent{
    componentSizes = [1,2,3];
    constructor(){


    }
}