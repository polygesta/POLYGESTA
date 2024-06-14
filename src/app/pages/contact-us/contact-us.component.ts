import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalModule } from '@coreui/angular';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ModalModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  
  publicKey = "foNRwCaLUj83_TmHY";
  serviceId = "service_zwu2tti";
  templateId = "template_9wzuv44";

  email = "polygesta_med@unal.edu.co";
  modalVisible = false;
  sendingEmail = false;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    entity: new FormControl(''),
    filiation: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

 
  constructor(private formbuilder: FormBuilder){
    emailjs.init(this.publicKey);
  }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name: ['', Validators.required],
      entity: ['', Validators.required],
      filiation: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  

  get f() { return this.form.controls; }

  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (control?.hasError('email')) {
      return 'Correo no válido';
    }
    return '';
  }

  onSubmit() {
    this.sendingEmail = true;
    this.sendEmail();
  }

  hideModal() {
    this.sendingEmail = false;
    this.modalVisible = false;
    this.form.reset();
  }

  sendEmail() {
    const templateParams = {
      name: this.form.value.name,
      entity: this.form.value.entity,
      filiation: this.form.value.filiation,
      email: this.form.value.email,
      message: this.form.value.message,
    }

    emailjs.send(this.serviceId, this.templateId, templateParams).then(
      (response: EmailJSResponseStatus) => {
        if (response.status == 200) {
          this.modalVisible = true;
        }
      }, (error) => {
        console.log("failed sending email", error.message);
        this.hideModal();
      }
    )
  }
}
