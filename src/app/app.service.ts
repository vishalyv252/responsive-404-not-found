import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object // Injecting the platform ID to check if we're running on the browser
  ) { }

  // Method to set the title of the document
  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  // Method to set the favicon of the document
  setFavicon(iconUrl: string) {
    // Check if the code is running in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Look for an existing link element with rel containing 'icon', or create a new one if it doesn't exist
      const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon' || 'image/png'; // Set the type of the link
      link.rel = 'shortcut icon'; // Set the relationship attribute of the link
      link.href = iconUrl; // Set the href attribute to the URL of the icon
      document.getElementsByTagName('head')[0].appendChild(link); // Append the link element to the head
    }
  }
}
