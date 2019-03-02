import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
            .pipe(map(response => {
                if (response && response.token) {
                    localStorage.setItem("tk", response.token);
                }

                return response;
            }));
    }

    logout(){
        localStorage.removeItem('tk');
    }

    getToken(){
        return localStorage.getItem("tk");
    }
}