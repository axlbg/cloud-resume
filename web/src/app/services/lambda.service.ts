import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LambdaService {
  private apiUrl = `${environment.apiUrl}/lastDeploy`;

  constructor(private http: HttpClient) {}

  getLastDeploy() {
    return this.http.get<{ lastDeploy: string }>(this.apiUrl);
  }
}
