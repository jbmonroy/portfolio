import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly url = 'https://api.github.com/users/jbmonroy/repos';

  constructor(private _httpClient: HttpClient) { }
  public loadRepos(): Observable<any> {
    return this._httpClient.get(`${this.url}?type=owner&per_page=100`).pipe(
      map((item:any)=>item.filter(value=>!value.fork)),
      map((item:any)=>item.filter(value=>value.stargazers_count > -1))
    );
  }
}
