import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    private seoService: AppService, // Injecting the service to manage SEO tasks
    private router: Router, // Router to listen for route changes
    private activatedRoute: ActivatedRoute // Activated route to access route data
  ) { }

  ngOnInit() {
    // Listen to router events and filter for NavigationEnd events
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        // Traverse to the deepest child route
        let child = this.activatedRoute.firstChild;
        while (child?.firstChild) {
          child = child.firstChild;
        }
        // Return the data from the deepest child route
        return child?.snapshot.data;
      })
    ).subscribe((data: any) => {
      // Set the document title from the route data, or use a default title
      this.seoService.setTitle(data.title || 'Default Title');
      // Set the favicon from the route data if available
      if (data.favicon) {
        this.seoService.setFavicon(data.favicon);
      }
    });
  }
}
