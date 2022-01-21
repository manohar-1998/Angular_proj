import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup, Validators,ReactiveFormsModule,NgForm,FormControl } from '@angular/forms';

@Component({
  selector: 'app-testfile',
  templateUrl: './testfile.component.html',
  styleUrls: ['./testfile.component.css']
})
export class TestfileComponent implements OnInit {

  firstname: String="";
   public addShopFormGroup!: FormGroup;

  constructor() {
   }

  onSubmit(){
    console.warn("Data check=")
    // this.http.post('http://localhost:5000/api/signup',userDetails)
    // .subscribe((result:any)=>{
    //   console.warn("result",result);

    // })
  }

  ngOnInit() {
    this.addShopFormGroup = new FormGroup({
      firstname : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      // shopAddress : new FormControl('', [Validators.required, Validators.maxLength(200)])
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addShopFormGroup.controls[controlName].hasError(errorName);
  }

}
