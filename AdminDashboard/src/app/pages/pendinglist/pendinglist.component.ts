import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pendinglist',
  templateUrl: './pendinglist.component.html',
  styleUrls: ['./pendinglist.component.scss']
})
export class PendinglistComponent {

  pendingUserList:[] = [];
  constructor(private dashboardService: AuthService, private snackBar: MatSnackBar){ }

  getPendingList(){
    this.dashboardService.getPendinglistApiCall().subscribe({
      next: (res:any)=>{
        this.pendingUserList = res.data;
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
