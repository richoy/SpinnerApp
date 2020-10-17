import { Component, OnInit } from '@angular/core';

import { EmailsService } from '../services/emails.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

  public isMenuCollapsed = true;

  emails: any;

  constructor( private emailService: EmailsService) { }

  ngOnInit(): void {
    this.getEmails();
  }

  getEmails(): void {
    this.emailService.getEmails()
      .subscribe( emails => {
        this.emails = emails;
        console.log(this.emails);
      })
  }

}
