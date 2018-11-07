import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  handleUsernameChange(e: any) {
    this.username = e.target.value;
  }
  handlePasswordChange(e: any) {
    this.password = e.target.value;
  }
  handleButtonClick() {
    console.log(this.username, this.password);
    this.login(this.username, this.password);
    this.username = '';
    this.password = '';
  }
  login(un: string, pw: string) {
    const result = this.http.post('http://localhost:5000/login', {username: un, password: pw});
    result.subscribe((r) => {console.log(r)}, (e) => console.log(e));
  }

}
