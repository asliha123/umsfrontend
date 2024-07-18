import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../userService/user.service';
import { ToastService } from 'src/app/adminServices/toast.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  implements OnInit{
  constructor(private fb:FormBuilder,private us:UserService,private tost:ToastService) { }
  // model for addform
  addForm=this.fb.group({
      name:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
      email:['',[Validators.required,Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,4}$')]],
      status:['']
  })
  ngOnInit(): void {
      
  }
  addUser(){
    if(this.addForm.valid){
        var path=this.addForm.value
       
        // console.log(path.name);
        // console.log(path.email);
        // console.log(path.status);
              this.us.addUser({id:"",name:path.name,email:path.email,status:path.status}).subscribe((data:any)=>{
                // console.log(data);
                this.tost.showSuccess(`${data.name} details added`)
                // reset the form
                this.addForm.reset()
              })
        
        
    }
    else{
      alert("Invalid form")
    }
  }
  

}
