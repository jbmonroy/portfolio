import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { GithubService } from '../github.service';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  repos:Array<any> = [];
  config:any;
  constructor(private _githubService: GithubService) { }

  ngOnInit(): void {
    this._githubService.loadRepos().subscribe(
      {
        next: (res:Array<any>)=>{
          this.repos = res;
          // for(let i = 0; i < 30; i++){
          //   this.repos.push(res[0]);
          // }
        }
      }
    ); 
  }
  
  

}
