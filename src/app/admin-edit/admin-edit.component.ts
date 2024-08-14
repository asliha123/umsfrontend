import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ToastService } from '../adminServices/toast.service';
import { AdminService } from '../adminServices/admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
    admin:any={}
    fileData:any=""

  @Output()  onAdminChange=new EventEmitter()
  // attribute to store data from parent
  @Input() data:any

 constructor(private as:AdminService,private tost:ToastService) { }
 profilePic:any="https://i.postimg.cc/0218KM1T/profile.jpg"
 editClicked:boolean=false
 ngOnInit(): void {
     this.as.loginApi().subscribe((result:any)=>{
      this.admin=result[0]
      if(this.admin.profile){
        this.profilePic=this.admin.profile
      }
     })
 }
 editClick(){
 this.editClicked=true
 }
 cancelEdit(){
  this.editClicked=false
 }
 getFile(event:any){
  let file=event.target.files[0]
    
  // url convertion
  let fr=new FileReader()
  // convert
  fr.readAsDataURL(file)
  // store the converted url (onload)
  fr.onload=(event:any)=>{
    console.log(event.target.result);

    // preview
    this.profilePic=event.target.result
    //  add profile in admin data
    this.admin.profile=this.profilePic
    console.log(this.admin);
    
  }


 }
 editData(){
  this.as.updateAdmin(this.admin).subscribe((result:any)=>{
    console.log(result);

    // update local storage with new username
    var indexE=result.email.indexOf('@')
    localStorage.setItem("Username",result.email.slice(0,indexE));


    // 
    this.onAdminChange.emit(result.email.slice(0,indexE))


    this.cancelEdit()

    this.tost.showSuccess("profile updated")

      
    
  })
 }
}
