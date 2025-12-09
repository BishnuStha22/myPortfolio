import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AutoFocusDirective} from '../../directives/autofocus.directive';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AutoFocusDirective,
    NgIf,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  error:string | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = fb.group({
      name: ['', Validators.required, Validators.minLength(6)],
      email: ['', Validators.required, Validators.email],
      address: ['', Validators.required],
      country: ['', Validators.required],
      message: ['', Validators.required, Validators.minLength(20)],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.error = "Please fill out all fields";
      return;
    }
    this.error = null;
    console.log('Contact form: ', this.contactForm.value);

    this.contactForm.reset();
  }

}
