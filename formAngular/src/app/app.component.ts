import { Component } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'
import { EmailService } from './email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  names:any[]=[] ;
  selectedName: string='';
 
 
  title='formAngular'
  body: FormGroup
  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {}
 ngOnInit(){
  // this.body=this.formBuilder.group({
   //  email: [null,[Validators.required]],
    // name: [null,[Validators.required]],
     //date: [null,[Validators.required]],
     //date2: [null,[Validators.required]]
  // })
  this.emailService.sendGetRequest().subscribe((data: any)=>{
    console.log(data);
     this.names = data;
   })  
 }
 sendMail(body){

let email=body.value.email;
let id= this.selectedName;
let date=body.value.date;
let date2= body.value.date2;
let reqObj ={
 
  email:email,
  id: id,
  date: date,
  date2: date2,
  
}

this.emailService.sendMessage(reqObj).subscribe(data=>{
  console.log(data)
})

}
   selectChangeHandler(event: any){
this.selectedName=event.target.value;
console.log(this.selectedName)
   }
   
}
