import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService/user.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  allusers:any=[]
  filterData:any=""
  sortData:any=""
  p: number = 1;
  userName: string = ''; 
  constructor(private us:UserService){ }

  ngOnInit(): void {
    this.getUsers()
      
  }
    // changeSortData(){
    //   this.sortData="sort"
    // }
    changeSortData() {
      this.sortData = this.sortData === 'name' ? 'email' : 'name';
    }
  

  changeFilterData(data:any){
    this.filterData=data
  }
  getUsers(){
    this.us.getUser().subscribe((data:any)=>{
      // console.log(data);
      this.allusers=data
      // console.log(this.allusers);
      
      
    })
  }
  removeUser(id:any){
    this.us.deleteUser(id).subscribe((result:any)=>{
      // console.log(result);
      
      alert("user removed")
      this.getUsers()
    })


  }
  convertPdf(){
    let pdf=new jsPDF()


    // setting heading for table
    let head=[["User Id","Name","Email","Status"]]


    //setting body[{},{},...] convert to[[],[],...] 
    let body:any=[]
    this.allusers.forEach((i:any)=>{
     body.push ([i.id,i.name,i.email,i.status==1?'Active':'Inactive'])
    })
    pdf.setFontSize(16)
    pdf.text("Users Directory",10,10)


    // table generate
    autoTable(pdf,{head,body})

      // open new window
  pdf.output('dataurlnewwindow')

  // auto download
  pdf.save('userData.pdf')
  }
 
  }

