import { RouterModule, Routes, CanActivate } from "@angular/router";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { HistoryComponent } from "./history/history.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuardService as AuthGuard } from "./guards/login-guard.service";
import { LandingComponent } from "./landing/landing.component";
export const AppRoutes: Routes = [
  {
    path: "history",
    component: HistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "home",
    component: HomeComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "",
    component: LandingComponent
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
