import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {

	constructor(public route: ActivatedRoute, private router: Router, page: Page, private routerExt: RouterExtensions) {
		page.actionBarHidden = true;
	}

	ngOnInit() {
		// console.log(this.router.url);
		this.routerExt.navigate(['/app/today']);
	}

	isCurrentRoute(routes: string | Array<string>): boolean {
		if (typeof routes == 'string') {
			routes = [routes];
		}
		return (routes as Array<string>).some((route) => {
			return this.router.url.split('/')[2] == route;
		});
	}

}
