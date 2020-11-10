import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ChangePasswordService, passwordChange } from '../services/change-password.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit {

  PasswordChangeForm: FormGroup;
  PasswordChangeError: boolean;
  closeResult = '';
  @ViewChild('modal') modal;
  @ViewChild('ConfirmationModal') ConfirmationModal;

  currentUser: any;

  constructor(
    private fb: FormBuilder,
    private changePasswordservice: ChangePasswordService,
    private router: Router,
    private modalService: NgbModal,
  ) {
    this.createForm();
   }

  ngOnInit(): void {
    this.PasswordChangeError = false;
  }

  createForm() {
    this.PasswordChangeForm = this.fb.group({
      password: ['', Validators.required]
    });
  }

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

  onSubmit(){
    if(this.PasswordChangeForm.status === "VALID"){
        this.getCurrent();
    }
  }

  getCurrent() {
    this.changePasswordservice.getCurrent()
      .subscribe(res => {
        this.currentUser = res;

        const user = new passwordChange(
          this.PasswordChangeForm.controls.password.value);
                
        this.changePasswordservice.ChangePassword(user, this.currentUser.id).subscribe((resp: any) => {
          this.PasswordChangeError = false;
          this.open(this.modal)

        }, err => {
          this.PasswordChangeError = true;
        });
      });
  }

}
