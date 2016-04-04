import {Component} from 'angular2/core';
import {FooterComponent} from '../footer/footer.component';
import {VPostService} from '../service/vpost.service';

@Component({
	selector: 'signup',
	templateUrl: 'app/post-ads/post-ads.component.html',
	directives: [FooterComponent]
})

export class PostAdsComponent {
	constructor(private _vpostService: VPostService) { }
}