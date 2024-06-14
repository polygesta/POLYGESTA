import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject, Component } from '@angular/core';
import { brandSet, cibTwitter, cilList, cilListNumbered, cilPaperPlane, cilShieldAlt } from '@coreui/icons';
import { IconDirective, IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-social-networks',
  standalone: true,
  imports: [CommonModule, IconModule, IconSetModule, IconDirective],
  templateUrl: './social-networks.component.html',
  styleUrl: './social-networks.component.css'
})
export class SocialNetworksComponent {
  isBrowser: boolean;

  constructor(
    public iconSet: IconSetService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    iconSet.icons = { cilListNumbered, cilPaperPlane, ...brandSet };
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
