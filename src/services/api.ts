const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://tianyi.fangqiuwangluo.com/sqx_fast';

class ApiService {
  private baseURL: string;

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

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const token = localStorage.getItem('token');

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
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

  async getUserInfo(): Promise<any> {
    return this.request('/user/info');
  }

  async updateUserInfo(data: any): Promise<{ user: any }> {
    return this.request('/user/update', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }
}

export const apiService = new ApiService();
