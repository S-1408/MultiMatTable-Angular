import { HomeService } from './../home.service';
import { Component, OnInit , ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { FormGroup , Validators, FormBuilder} from '@angular/forms';
import { HttpClient} from '@angular/common/http';

import { TestServiceService } from './../test-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  counter = 0;
  username = '';
  title = 'Testing for loop';
 //  courses = ['css', 'html', 'js'];
 courses;

// @ViewChild('btnColor2') eleColor2: ElementRef;

  applicationForm: FormGroup;
  submitted: boolean= false;
  countryName;
student={
 name : "sonam",
 imagepath: './assets/image/doctor-1.jpg'
}
  // imagepath: './assets/image/doctor-1.jpg'; this will not work

  // @ViewChild('btnColor1') eleColor1: ElementRef;
  constructor( private formBuilder: FormBuilder,
               private http: HttpClient,
               private service: HomeService,
               private sservice: TestServiceService) {
                 this.countryName = service.getCountryName();

                 this.courses = sservice.getCourse();
               }


               AfterViewInit(){
                //  this.eleColor1 .nativeElement.style.backgroundColor= 'blue';
                // this.eleColor1 .nativeElement.style.Color= 'white';
               }


  ngOnInit() {

    this.applicationForm = this.formBuilder.group({

     firstName: ['', Validators.required],
     lastName:['',Validators.required]
    });
    }

    increment(){
      this.counter++;
      }

      onAdd(){
        this.courses.push( ['jquery'] );
      }

      onRemove(courses){
       let index = this.courses.indexOf(courses);
                   this.courses.splice(index,1);

      }


    get data(){
     return  this.applicationForm.controls;
    }

onSubmit(){
  this.submitted = true;
  if(this.applicationForm.invalid){
    //  alert('plz fill all the required fiend')
     return ;
  //  } alert('SUCCESS!!)\n\n' + JSON.stringify(this.applicationForm.value, null, 4));
  }alert( "SUCCESS!!"+ JSON.stringify(this.applicationForm.value,null,2));
  }

}
