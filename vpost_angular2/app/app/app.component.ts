import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import {HomeComponent} from '../home/home.component';
import {PostAdsComponent} from '../post-ads/post-ads.component';
import {CategoryComponent} from '../category/category.component';
import {AdDetailsComponent} from '../ad-details/ad-details.component';
import {VrComponent} from '../vr/vr.component';
import {VPostService} from '../service/vpost.service';

@Component({
	selector: 'vpost',
	providers: [VPostService],
	templateUrl: './app/app/app.component.html',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{
		path: '/home',
		name: 'Home',
		component: HomeComponent,
		useAsDefault: true
	},
	{ path: '/post-ads', name: 'PostAds', component: PostAdsComponent },
	{ path: '/category', name: 'Category', component: CategoryComponent },
	{ path: '/ad-details', name: 'AdDetails', component: AdDetailsComponent },
	{ path: '/vr', name: 'VrView', component: VrComponent },
])
export class AppComponent { }