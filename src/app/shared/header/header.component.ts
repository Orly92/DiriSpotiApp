import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean;

  @ViewChild("menu")
  protected menu: ElementRef | undefined;

  constructor(protected renderer:Renderer2) {
    this.showMenu = false;
  }

  ngOnInit(): void {
  }

  sidebarToggle() {
    let removeClassName = "showMenu";
    let addClassName = "hideMenu";
    if (!this.showMenu) {
      removeClassName = "hideMenu";
      addClassName = "showMenu";
    }
    this.renderer.removeClass(this.menu?.nativeElement,removeClassName);
    this.renderer.addClass(this.menu?.nativeElement,addClassName);
    this.showMenu = !this.showMenu;
  }
}
