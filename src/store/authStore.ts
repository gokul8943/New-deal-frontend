import { create } from 'zustand';

// Define a proper User interface to avoid using 'any'
interface User {
  _id: string;
  name?: string;
  email?: string;
  phone?: string;
  [key: string]: any; // For other properties
}

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
}

// Safely parse the user from localStorage with proper type checking
const getUserFromStorage = (): User | null => {
  try {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;
    
    const user = JSON.parse(userStr);
    // Ensure the user object has an _id property
    if (user && user._id) {
      return user as User;
    }
    return null;
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return null;
  }
};

const initialAuthState: AuthState = {
  isAuthenticated: !!localStorage.getItem('accessToken'),
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
  user: getUserFromStorage(),
};

interface AuthStore {
  authState: AuthState;
  login: (accessToken: string, user: User, refreshToken: string) => void;
  logout: () => void;
  updateUser: (user: User) => void;
  updateAccessToken: (accessToken: string) => void;
  getUserId: () => string | null;
}

const useAuthStore = create<AuthStore>((set, get) => ({
  authState: { ...initialAuthState },
  
  login: (accessToken: string, user: User, refreshToken: string) => {
    // Validate user object has an ID before storing
    if (!user || !user._id) {
      console.error('Invalid user object provided to login:', user);
      return;
    }
    
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(user));
    
    set((state) => ({
      authState: {
        ...state.authState,
        isAuthenticated: true,
        accessToken,
        refreshToken,
        user,
      },
    }));
  },
  
  updateUser: (user: User) => {
    // Validate user object has an ID before updating
    if (!user || !user._id) {
      console.error('Invalid user object provided to updateUser:', user);
      return;
    }
    
    localStorage.setItem('user', JSON.stringify(user));
    set((state) => ({
      authState: {
        ...state.authState,
        user,
      },
    }));
  },
  
  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    set({
      authState: {
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
        user: null,
      },
    });
  },
  
  updateAccessToken: (accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    set((state) => ({
      authState: {
        ...state.authState,
        accessToken,
      },
    }));
  },
  
  // Helper method to get the user ID easily
  getUserId: () => {
    const { user } = get().authState;
    return user && user._id ? user._id : null;
  },
}));

export default useAuthStore;