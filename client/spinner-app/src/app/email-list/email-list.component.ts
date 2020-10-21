import { Component, OnInit } from '@angular/core';
import { CSVconverterService } from '../services/csvconverter.service';

import { EmailsService } from '../services/emails.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

  public isMenuCollapsed = true;

  emails: EmailResult [] = [];

  constructor( private emailService: EmailsService,
               private csvService: CSVconverterService) { }

  ngOnInit(): void {
    this.getEmails();
  }

  getEmails(): void {
    this.emailService.getEmails()
      .subscribe( emails => {
        emails.forEach(email => {
          const EMAIL = new EmailResult(email.emailAddress,
                                        email.firstName,
                                        email.lastName,
                                        email.updatedAt,
                                        email.createdAt,
                                        email.result);
          this.emails.push(EMAIL)
        });
      })
  }

  exportCSV(){
    this.csvService.downloadFile(this.emails);
  }

}

class EmailResult { 

  EmailAddress: string;
  FirstName: string;
  LastName: string;
  DateSpin: string;
  DateCreation: string;
  Result: string;

  constructor(email, firstName, lastName, DateSpin, DateCreate, result) {
    this.EmailAddress = email;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.DateSpin = DateSpin;
    this.DateCreation = DateCreate;
    this.Result = result;
  }
}
