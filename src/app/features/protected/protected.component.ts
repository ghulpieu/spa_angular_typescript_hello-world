import { Component, OnInit, inject } from '@angular/core';
import { MessageService } from '@app/core';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
})
export class ProtectedComponent implements OnInit {
  message = '';
  private messageService = inject(MessageService);

  ngOnInit(): void {
    this.messageService.getProtectedResource().subscribe((response) => {
      const { data, error } = response;

      if (data) {
        this.message = JSON.stringify(data, null, 2);
      }

      if (error) {
        this.message = JSON.stringify(error, null, 2);
      }
    });
  }
}
