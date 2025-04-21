import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Web3Service } from './services/web3.service';
import { DexieService, IUser } from './services/dexie.service';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpService } from './services/http.service';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SnackbarService } from './services/snackbar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    CommonModule,
    ProfileComponent,
    SnackbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  private web3SVC = inject(Web3Service);
  private httpSVC = inject(HttpService);
  private dexieSVC = inject(DexieService);
  private snackbarSVC = inject(SnackbarService);
  private activeRoute = inject(ActivatedRoute);

  protected user = this.dexieSVC.user;
  protected connected = false;

  @ViewChild('snackbar') protected snackbar!: SnackbarComponent;

  async ngOnInit(): Promise<void> {
    try {
      const userInfo = await this.httpSVC.refreshSession();
    } catch{
      const login = await this.dexieSVC.getUser();
      if (login) {
        this.httpSVC.logIn({email: login.email, password: login.password});
      }
    }

    const elections = await this.httpSVC.getAvailableElections();
    if (elections) {
      this.dexieSVC.updateElections(elections);
    }
    this.dexieSVC.elections;

    const user = this.user();
    if (user && user.pk) {
      await this.web3SVC.getWalletfromPk(user.pk, user.password);
    }
  }

  ngAfterViewInit(): void {
    this.snackbarSVC.register(this.snackbar);
  }
}
