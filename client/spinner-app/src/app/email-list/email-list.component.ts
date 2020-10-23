import { Component, OnInit } from '@angular/core';
import { CSVconverterService } from '../services/csvconverter.service';
import { Router } from '@angular/router';
import { EmailsService } from '../services/emails.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

  closeResult = '';

  emails: EmailResult [] = [];

  constructor( private emailService: EmailsService,
               private csvService: CSVconverterService,
               private modalService: NgbModal,
               private router: Router) { }

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

  deleteResults() {
    this.emailService.deleteEmails()
      .subscribe(() => {}, err => {
        throw new Error('Error deleting the information');
      });
    this.router.navigate(['backend-control/email-list']);
  }

  //modal
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
