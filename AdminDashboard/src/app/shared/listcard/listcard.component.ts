import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listcard',
  templateUrl: './listcard.component.html',
  styleUrls: ['./listcard.component.scss']
})
export class ListcardComponent {
  @Input() logo!: string;
  @Input() storeName!: string;
  @Input() ownerName!: string;
  @Input() isStoreVerified!: boolean;
  @Input() storeId!: string;
  @Input() status!: string;

  @Output() storeActionCompleted = new EventEmitter<void>();

  constructor(private authService: AuthService, private snackBar: MatSnackBar) { }

  acceptStore(storeId: any) {
    this.authService.acceptRequestApiCall(storeId).subscribe({
      next: (res) => {
        this.snackBar.open('Store accepted successfully', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        this.storeActionCompleted.emit(); // Notify parent to refresh
      },
      error: (err) => {
        this.snackBar.open(`${err.message}`, 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  rejectStore(storeId: any) {
    this.authService.rejectRequestApiCall(storeId).subscribe({
      next: (res) => {
        this.snackBar.open('Store rejected successfully', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        this.storeActionCompleted.emit(); // Notify parent to refresh
      },
      error: (err) => {
        this.snackBar.open(`${err.message}`, 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }
}
