// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'sort'
// })
// export class SortPipe implements PipeTransform {

//   transform(userArray:any[],sortData:string): any {
//     if(!userArray || !sortData){
//       return userArray
//     }
//     else{
//       return userArray.sort((a:any,b:any)=>
//       a.toLowerCase().localCompare(b.toLowerCase()))
//     }
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(array: any[], sortData: string): any[] {
    if (!Array.isArray(array) || !sortData) {
      return array;
    }

    // Sorting logic based on the field provided
    array.sort((a, b) => {
      if (a[sortData] < b[sortData]) return -1;
      if (a[sortData] > b[sortData]) return 1;
      return 0;
    });

    return array;
  }
}
