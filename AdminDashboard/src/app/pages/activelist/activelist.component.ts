import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-activelist',
  templateUrl: './activelist.component.html',
  styleUrls: ['./activelist.component.scss']
})
export class ActivelistComponent {
stores:any[] = [];
status: string = 'active'
  constructor(private dashboardService: AuthService, private snackBar: MatSnackBar){ }

  ngOnInit(): void {
    this.getPendingList();
  }

  getPendingList(){
    this.dashboardService.getStorelistApiCall().subscribe({
      next: (res:any)=>{
        this.stores = res.data.filter((store:any)=> store.isStoreVerified===true);
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
