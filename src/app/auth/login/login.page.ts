import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!:FormGroup;
  constructor(private router: Router,
              private auth: AuthService,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private formBuilder: FormBuilder,
              private menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.setupForm();
  }

  setupForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }

  async onSubmit(){
    let loading = await this.loadingController.create({
      message:"Logging you In..."
    });

    await loading.present();

    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next:async (user:any) =>{
          console.log(user);
          await loading.dismiss();
        },
        error:async(error:any) =>{
          console.log(error);
          await loading.dismiss();
          this.presentToast(error.error.message);
          
        }
      })
      
    }
  }
}
