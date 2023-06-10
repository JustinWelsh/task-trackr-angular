import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  title: string = 'Task Trackr';

  constructor(private uiService: UiService) { }

  // Life-cycle method
  ngOnInit(): void {

  }
  toggleTaskForm() {
    this.uiService.toggleAddTask();
  }
}
