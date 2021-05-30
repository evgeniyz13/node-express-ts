import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserService } from '../users.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [],
})
export class RegistrationComponent implements OnInit {
  public registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
  public submitted = false

  constructor(
    private formBuilder: FormBuilder,
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls
  }

  onSubmit() {
    this.submitted = true

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return
    }

    this.userService.register(this.registerForm!.value).subscribe((data) => {
      console.log(data)
      this.router.navigate(['/login'])
    })
  }
}
