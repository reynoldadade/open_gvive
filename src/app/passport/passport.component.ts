import { IPassport } from './passport.model';
import { GviveService } from './../gvive.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.scss'],
})
export class PassportComponent implements OnInit {
  passportData: IPassport;
  search = false;
  pictureSrc = 'https://image.flaticon.com/icons/svg/21/21104.svg';
  signatureSrc =
    // tslint:disable-next-line: max-line-length
    'https://www.docsketch.com/assets/vip-signatures/muhammad-ali-signature-6a40cd5a6c27559411db066f62d64886c42bbeb03b347237ffae98b0b15e0005.svg';
  passportForm: FormGroup;
  constructor(
    private gviveService: GviveService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.passportForm = this.fb.group({
      idNumber: ['', Validators.required],
      idType: ['passport'],
      application: ['FILMS'],
      user: ['testing'],
    });
  }

  getPassportDetails(data) {
    this.search = false;
    this.gviveService.requestForCardDetails(data).subscribe(
      response => {
        console.log(response);
        this.passportData = response.result;
        this.pictureSrc = `data:image/png;base64,${response.result.picture}`;
        this.signatureSrc = `data:image/png;base64,${response.result.signature}`;
        this.search = true;
      },
      err => {
        console.log(err);
        this.toastr.error('Failed to connect to server');
      }
    );
  }

  submitPassport(form: FormGroup) {
    console.log(form.value);
    this.getPassportDetails(form.value);
  }
}
