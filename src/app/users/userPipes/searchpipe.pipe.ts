import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(DataArray:any[], searchString:string,searchkey:string): any {
    // create an array for sorting transformed data

    // const result:any=[]

    if(!DataArray || !searchString || !searchkey){
      return DataArray
    }
    else{
      return DataArray.filter((item:any)=>item.name.trim().toLowerCase().includes(searchString.trim().toLowerCase()))
   
      }
    }
  
  }

