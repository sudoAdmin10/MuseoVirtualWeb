import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Teacher } from "src/app/models/teacher.model";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) { }
    private currentUser: Teacher | null = null;
    private loggedIn = new BehaviorSubject<boolean>(false);

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

    getRole(): 'admin' | 'user' | 'visitor' | null {
        return this.currentUser ? this.currentUser.role : null;
    }

    setUser(user: Teacher): void {
        this.currentUser = user;
        this.loggedIn.next(true);
    }

    getCurrentUser(): Teacher | null {
        return this.currentUser;
    }

    isLoggedIn(): Observable<boolean> {
        return this.loggedIn.asObservable();
    }

    logout(): void {
        this.currentUser = null;
        this.loggedIn.next(false);
    }

    loadUserFromStorage(): void {
        const data = localStorage.getItem('currentUser');
        if (data) {
            this.currentUser = JSON.parse(data);
            this.loggedIn.next(true);
        }
    }
}