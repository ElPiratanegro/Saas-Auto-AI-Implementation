export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AIModel {
  id: string;
  name: string;
  description: string;
  type: 'text' | 'image' | 'audio';
  status: 'active' | 'training' | 'error';
  createdAt: string;
  updatedAt: string;
}

export interface AIModelResponse {
  id: string;
  modelId: string;
  input: string;
  output: string;
  createdAt: string;
}