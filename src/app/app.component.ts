import { Component, ViewChild } from '@angular/core';
import { jqxMenuComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-angular';

  @ViewChild('jqxMenu') jqxMenu: jqxMenuComponent;

  private customeMenu = [
    {
      title: 'test 1',
    },
    {
      title: 'test 2',
    },
    {
      title: 'test 3',
    },
    {
      title: 'test 4',
    },
    {
      title: 'test 5',
    }
  ];

  isRightClick(event: any): boolean {
    let rightclick;
    if (!event) { event = window.event; }
    if (event.which) { rightclick = (event.which === 3); } else if (event.button) { rightclick = (event.button === 2); }
    return rightclick;
  }
  contextmenuMenu(): boolean {
    return false;
  }
  mousedown(event: any): boolean {
    const rightClick = this.isRightClick(event) || jqx.mobile.isTouchDevice();
    if (rightClick) {
      // tslint:disable-next-line:radix
      this.jqxMenu.open(parseInt(event.clientX), parseInt(event.clientY));
      return false;
    }
  }

}
