import {Component} from 'angular2/core';
import {FooterComponent} from '../footer/footer.component';
import {VPostService} from '../service/vpost.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'vr',
    templateUrl: 'app/vr/vr.component.html',
    directives: [FooterComponent, ROUTER_DIRECTIVES]
})
export class VrComponent {
	constructor(private _vpostService: VPostService) { }
}