import { toast } from 'sonner';
import { clearAuth, isTokenValid } from '@/utils/auth';
import { useNavigate } from '@tanstack/react-router';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://tianyi.fangqiuwangluo.com/sqx_fast';

const PUBLIC_ENDPOINT_PREFIXES = [
  '/app/Login/sendMsg',
  '/app/Login/forgetPwd',
  '/app/Login/registerCode',
  '/app/Login/login',
] as const;

const TOAST_SILENT_PREFIXES = [
  '/app/Login/sendMsg',
  '/app/Login/forgetPwd',
  '/app/Login/registerCode',
  '/app/Login/login',
] as const;

let isRedirecting = false;

const matchesEndpoint = (endpoint: string, prefixes: readonly string[]) =>
  prefixes.some((prefix) => endpoint.startsWith(prefix));

const isPublicEndpoint = (endpoint: string) =>
  matchesEndpoint(endpoint, PUBLIC_ENDPOINT_PREFIXES);

const shouldToastForEndpoint = (endpoint: string) =>
  !matchesEndpoint(endpoint, TOAST_SILENT_PREFIXES);

const handleAuthExpired = () => {
  if (isRedirecting) {
    return;
  }

  isRedirecting = true;
  clearAuth();
  toast('登录已过期，请重新登录');
  const navigate = useNavigate();

  if (typeof window !== 'undefined') {
    window.setTimeout(() => {
      navigate({
        to: '/login',
      });
    }, 1500);
  }
};

const assertAuth = (endpoint: string) => {
  if (isPublicEndpoint(endpoint)) {
    return;
  }

  if (isTokenValid()) {
    return;
  }

  handleAuthExpired();
  throw new Error('TOKEN_EXPIRED');
};

type JsonPayload = {
  code?: number;
  msg?: string;
};

class ApiService {
  private readonly baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private toFormBody(
    data: Record<string, string | number | boolean | null | undefined>
  ): string {
    const params = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        return;
      }
      params.append(key, String(value));
    });

    return params.toString();
  }

  private buildHeaders(endpoint: string, initHeaders?: HeadersInit): Headers {
    const headers = new Headers(initHeaders);

    if (!headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }

    if (!isPublicEndpoint(endpoint)) {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
        headers.set('token', token);
      }
    }

    return headers;
  }

  private async parseResponse<T>(
    endpoint: string,
    response: Response
  ): Promise<T> {
    const contentType = response.headers.get('content-type') || '';
    const isJson = contentType.includes('application/json');
    let payload: unknown = null;

    if (isJson) {
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }
    } else {
      payload = await response.text();
    }

    if (!response.ok) {
      if (response.status === 401) {
        handleAuthExpired();
      }
      throw new Error(`API Error: ${response.status}`);
    }

    if (isJson && payload && typeof payload === 'object') {
      const data = payload as JsonPayload;

      if (shouldToastForEndpoint(endpoint) && data.code !== 0 && data.msg) {
        toast(data.msg);
      }

      if (data.code === 401) {
        handleAuthExpired();
      }
    }

    return payload as T;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    assertAuth(endpoint);

    const { headers: initHeaders, ...rest } = options;
    const headers = this.buildHeaders(endpoint, initHeaders);

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      ...rest,
      headers,
    });

    return this.parseResponse<T>(endpoint, response);
  }

  // 用户相关API
  async login(loginForm: { phone: string; password: string }): Promise<{
    code: number;
    token?: string;
    user?: any;
    expire?: number;
    msg: string;
  }> {
    const body = this.toFormBody({
      ...loginForm,
      msg: '',
    });

    return this.request('/app/Login/registerCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body,
    });
  }

  async registerCode(registerForm: {
    phone: string;
    msg: string;
    password: string;
  }): Promise<{
    code: number;
    token?: string;
    user: any;
    expire?: number;
    msg?: string;
  }> {
    const body = this.toFormBody(registerForm);

    return this.request('/app/Login/registerCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body,
    });
  }

  async forgetPassword(data: {
    phone: string;
    msg: string;
    pwd: string;
  }): Promise<{ code: number; msg?: string }> {
    return this.request('/app/Login/forgetPwd', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async sendVerifyCode(phone: string): Promise<{ success: boolean }> {
    return this.request(`/app/Login/sendMsg/${phone}/1`, {
      method: 'GET',
    });
  }

  async getUserInfoById(userId: string): Promise<{
    code: number;
    data?: any;
    msg?: string;
  }> {
    const query = new URLSearchParams({ userId }).toString();
    return this.request(`/app/user/selectUserById?${query}`, {
      method: 'GET',
    });
  }

  async getUserMoney(): Promise<{
    code: number;
    data?: { money?: number };
    msg?: string;
  }> {
    return this.request('/app/userMoney/selectMyMoney', {
      method: 'GET',
    });
  }

  async getIsVip(): Promise<{
    code: number;
    data?: boolean;
    msg?: string;
  }> {
    return this.request('/app/UserVip/isUserVip', {
      method: 'GET',
    });
  }

  async getSubAccounts(): Promise<{
    code: number;
    data?: any[];
    msg?: string;
  }> {
    return this.request('/app/sysUserUser/selectList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    });
  }

  async createSubAccount(data: {
    phone: string;
    password: string;
  }): Promise<{ code: number; data?: any; msg?: string }> {
    const body = this.toFormBody(data);

    return this.request('/app/sysUserUser/createZH', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body,
    });
  }

  async switchSubAccount(userId: string): Promise<{
    code: number;
    token?: string;
    user?: any;
    expire?: number;
    msg?: string;
  }> {
    const body = this.toFormBody({ userId });

    return this.request('/app/user/switchover', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body,
    });
  }

  async updateUserInfo(data: any): Promise<{ user: any }> {
    return this.request('/user/update', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }
}

export const apiService = new ApiService();
