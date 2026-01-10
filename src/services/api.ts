const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com'

class ApiService {
  private baseURL: string

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    const token = localStorage.getItem('token')
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    }

    const response = await fetch(url, config)
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }

    return response.json()
  }

  // 用户相关API
  async login(phone: string, code: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ phone, code })
    })
  }

  async sendVerifyCode(phone: string) {
    return this.request('/auth/send-code', {
      method: 'POST',
      body: JSON.stringify({ phone })
    })
  }

  async getUserInfo() {
    return this.request('/user/info')
  }

  async updateUserInfo(data: any) {
    return this.request('/user/update', {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }
}

export const apiService = new ApiService()
