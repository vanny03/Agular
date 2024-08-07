import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import * as  user_json from '../../assets/userList.json';

export interface UserData {
  id: string;
  userName: string;
  password: string;
  emailId: string;
}

const FRUITS: string[] = [
  // 'blueberry',
  // 'lychee',
  // 'kiwi',
  // 'mango',
  // 'peach',
  // 'lime',
  // 'pomegranate',
  // 'pineapple',
];
const NAMES: string[] = [
  // 'Maia',
  // 'Asher',
  // 'Olivia',
  // 'Atticus',
  // 'Amelia',
  // 'Jack',
  // 'Charlotte',
  // 'Theodore',
  // 'Isla',
  // 'Oliver',
  // 'Isabella',
  // 'Jasper',
  // 'Cora',
  // 'Levi',
  // 'Violet',
  // 'Arthur',
  // 'Mia',
  // 'Thomas',
  'Elizabeth',
  
];


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'userName', 'password', 'emailID'];
  dataSource = user_json.users;
  // dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private http: HttpClient
  ) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  ngOnInit(): void {
    // this.getUserList();
    console.log(user_json.users);
    // this.dataSource.data = user_json.users;
    
  }

  // getUserList(){
  //   this.http.get("../../assets/userList.json").subscribe(res => {
  //     // console.log(res);
      
  //   })
  // }

  // createNewUser(id: number): UserData {
  //   const name =
  //     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
  //     ' ' +
  //     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
  //     '.';
  
  //   return {
  //     id: id.toString(),
  //     userName: name,
  //     password: Math.round(Math.random() * 100).toString(),
  //     emailId: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  //   };
  
   
  // }
  
}

