import { useState, useCallback } from 'react';
import { User, AuthState } from '../types';
import { authService } from '../lib/auth';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

export function useAuth() {
  const [state, setState] = useState<AuthState>(initialState);

  const login = useCallback(async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, isLoading: true }));
      const user = await authService.login(email, password);
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }, []);

  return {
    ...state,
    login,
    logout,
  };
}