import { IVoter } from './voters.model';
import { Component, OnInit } from '@angular/core';
import { GviveService } from '../gvive.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.scss'],
})
export class VotersComponent implements OnInit {
  voterData: IVoter;
  search = false;
  pictureSrc = 'https://image.flaticon.com/icons/svg/21/21104.svg';
  voterForm: FormGroup;
  constructor(
    private gviveService: GviveService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.voterForm = this.fb.group({
      idNumber: ['', Validators.required],
      idType: ['voters'],
      application: ['FILMS'],
      user: [sessionStorage.getItem('email')],
    });
  }

  getPassportDetails(data) {
    this.search = false;
    this.gviveService.requestForCardDetails(data).subscribe(
      response => {
        if (!response.result.pollingStation) {
          this.toastr.error('Person not found');
        } else {
          console.log(response);
          this.voterData = response.result;
          this.pictureSrc = `data:image/png;base64,${response.result.picture}`;
          this.search = true;
        }
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
