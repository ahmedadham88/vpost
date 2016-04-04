import {Component} from 'angular2/core';
import {FooterComponent} from '../footer/footer.component';
import {VPostService} from '../service/vpost.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'ad-details',
    templateUrl: 'app/ad-details/ad-details.component.html',
    directives: [FooterComponent, ROUTER_DIRECTIVES]
})
export class AdDetailsComponent {
	constructor(private _vpostService: VPostService) { }
}