import { IPassport } from './passport.model';
import { GviveService } from './../gvive.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.scss']
})
export class PassportComponent implements OnInit {
  passportData: IPassport;
  pictureSrc = 'https://image.flaticon.com/icons/svg/21/21104.svg';
  signatureSrc =
    // tslint:disable-next-line: max-line-length
    'https://www.docsketch.com/assets/vip-signatures/muhammad-ali-signature-6a40cd5a6c27559411db066f62d64886c42bbeb03b347237ffae98b0b15e0005.svg';
  passportForm: FormGroup;
  constructor(private gviveService: GviveService, private fb: FormBuilder) {}

  ngOnInit() {
    this.passportForm = this.fb.group({
      idNumber: ['', Validators.required],
      idType: ['passport'],
      application: ['FILMS'],
      user: ['testing']
    });
  }

  getPassportDetails(data) {
    this.gviveService.requestForCardDetails(data).subscribe(
      (response: IPassport) => {
        console.log(response);
        this.pictureSrc = `data:image.png;base64,${response.Picture}`;
        this.signatureSrc = `data:image.png;base64,${response.Signature}`;
      },
      err => {
        console.log(err);
      }
    );
  }

  submitPassport(form: FormGroup) {
    console.log(form.value);
    this.getPassportDetails(form.value);
  }
}
