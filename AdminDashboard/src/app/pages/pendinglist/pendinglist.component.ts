import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pendinglist',
  templateUrl: './pendinglist.component.html',
  styleUrls: ['./pendinglist.component.scss']
})
export class PendinglistComponent implements OnInit{

  stores:any[] = [];
  status: string = 'pending'
  constructor(private dashboardService: AuthService, private snackBar: MatSnackBar){ }

  ngOnInit(): void {
    this.getPendingList();
  }

  getPendingList(){
    this.dashboardService.getStorelistApiCall().subscribe({
      next: (res:any)=>{
        this.stores = res.data.filter((store:any)=> store.isStoreVerified===false);
        console.log("List: ",this.stores)
        this.snackBar.open('Successfully get pending list', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        })
      },
      error: (err)=>{
        this.snackBar.open('Error in Loading', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        })
      }
    })
  }
}
