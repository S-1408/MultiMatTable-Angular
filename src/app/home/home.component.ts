
import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


interface PeriodicElement {
  name:string;
  position:number;
  weight: number;
  symbol:string;
}
const ElementData: PeriodicElement[] = [

  {position: 1, name: 'Hydrogen',weight: 1.9876,symbol: 'H'},
  {position: 2, name: 'Heilium', weight: 4.987, symbol: 'He'},
{position : 3, name: 'Lithium',weight: 7.9654, symbol: 'Li'},
{position: 4 , name: 'Beryllium', weight: 9.765, symbol:'Be'},
{position : 5, name: 'Boron', weight: 10.8733, symbol: 'B'}
]
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  dataSourceOne: MatTableDataSource<PeriodicElement>;
  displayedColumnsOne: string[] =['position', 'name', 'weight', 'symbol'];
  @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatSort;
  @ViewChild('TableOneSort' , {static: true}) tableOneSort: MatSort;

  dataSourceTwo: MatTableDataSource<PeriodicElement>;
 displayedColumnsTwo: string[] = ['position', 'name','weight','symbol'];
 @ViewChild('TableTwoPaginator', {static: true}) tableTwoPaginator: MatPaginator;
 @ViewChild('TableTwoSort' , {static: true}) tableTwoSort: MatSort;

  constructor( ) {

    this.dataSourceOne = new MatTableDataSource;
    this.dataSourceTwo = new MatTableDataSource;
  }

  ngOnInit() {

    this.dataSourceOne.data = ElementData;
    this.dataSourceOne.sort = this.tableOnePaginator;
    this.dataSourceOne.paginator = this.tableTwoPaginator;

    this.dataSourceTwo.data = ElementData;
    this.dataSourceOne.sort = this.tableOnePaginator;
    this.dataSourceTwo.paginator = this.tableTwoPaginator;
  }

  applyFilterOne( filterValue: string){
    this.dataSourceOne.filter = filterValue.trim().toLowerCase();
  }
  applyFilterTwo(filterValue: string) {
    this.dataSourceTwo.filter = filterValue.trim().toLowerCase();
  }
}
