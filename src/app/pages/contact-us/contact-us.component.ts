import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalModule } from '@coreui/angular';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ModalModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  publicKey = "foNRwCaLUj83_TmHY";
  serviceId = "service_zwu2tti";
  templateId = "template_9wzuv44";

  email = "polygesta_med@unal.edu.co";
  modalVisible = false;
  sendingEmail = false;

  @ViewChild('content', { static: true }) content: TemplateRef<any> | null = null;
  form: FormGroup;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) {
    emailjs.init(this.publicKey);
    
    this.form = this.formBuilder.group({
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

  openModal() {
    this.modalVisible = true;
		this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title', centered: true, backdrop: 'static' }).result.finally(
      () => { this.hideModal(); }	
		);
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
          this.openModal();
        }
      }, (error) => {
        console.log("failed sending email", error.message);
        this.hideModal();
      }
    )
  }
}
