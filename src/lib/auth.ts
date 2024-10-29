import { User } from '../types';

class AuthService {
  private static instance: AuthService;
  private token: string | null = null;

  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(email: string, password: string): Promise<User> {
    // TODO: Implement actual API call
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    this.token = data.token;
    return data.user;
  }

  async logout(): Promise<void> {
    this.token = null;
    // TODO: Implement actual API call
  }

  getToken(): string | null {
    return this.token;
  }
}

export const authService = AuthService.getInstance();