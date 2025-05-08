export interface Teacher {
    id: number;
    username: string;
    email: string;
    password: string;
    role: 'admin' | 'user' | 'visitor';
}
