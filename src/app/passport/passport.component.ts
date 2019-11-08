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
  pictureSrc: string;
  signatureSrc: string;
  passportForm: FormGroup;
  constructor(private gviveService: GviveService, private fb: FormBuilder) {}

  ngOnInit() {
    this.passportForm = this.fb.group({
      idnumber: ['', Validators.required],
      idtype: ['passport'],
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
    this.getPassportDetails(form.value);
  }
}
