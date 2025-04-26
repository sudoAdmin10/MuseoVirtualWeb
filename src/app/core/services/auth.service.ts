import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Teacher } from "src/app/models/teacher.model";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private currentUser: Teacher | null = null;

    login(email: string, password: string): boolean {
        // Simulación básica
        if (email === 'prof@univ.com' && password === '123456') {
            this.currentUser = {
                id: 1,
                fullName: 'Dr. Jane Smith',
                email,
                department: 'Computer Science',
                biography: 'Expert in AI and Machine Learning.',
                photoUrl: 'https://via.placeholder.com/120'
            };
            return true;
        }
        return false;
    }

    register(data: Partial<Teacher>): boolean {
        // Simulación simple
        this.currentUser = {
            id: 2,
            fullName: data.fullName || 'New Teacher',
            email: data.email || '',
            department: data.department || '',
            biography: '',
        };
        return true;
    }

    getCurrentUser(): Teacher | null {
        return this.currentUser;
    }

    logout(): void {
        this.currentUser = null;
    }
}