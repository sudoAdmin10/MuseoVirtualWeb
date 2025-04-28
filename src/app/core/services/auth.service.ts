import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Teacher } from "src/app/models/teacher.model";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) { }
    private currentUser: Teacher | null = null;
    url = 'http://localhost:3000/users'

    login(email: string, password: string): Observable<any> {
        const body = { email, password }
        return this.http.post(`${this.url}/login`, body)
    }

    register(data: Partial<Teacher>): Observable<any> {
        const defaultData: Partial<Teacher> = {
            username: data.username || 'default_user',
            role: data.role || 'visitor',
        };

        const body = { ...data, ...defaultData };

        return this.http.post(`${this.url}/register`, body)

    }

    getCurrentUser(): Teacher | null {
        return this.currentUser;
    }

    logout(): void {
        this.currentUser = null;
    }
}