import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  register: FormGroup = new FormGroup({ //object{}
    name: new FormControl(null,),
    email: new FormControl(null,),
    password: new FormControl(null,),
    rePassword: new FormControl(null,),
    phone: new FormControl(null,),
  })

}
