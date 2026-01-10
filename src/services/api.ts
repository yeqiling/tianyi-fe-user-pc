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
                ...(token && {Authorization: `Bearer ${token}`}),
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
    async login(loginForm: {phone: string, password: string}): Promise<{ code: number; token?: string; user?: any, expire?: number; msg:string}> {
        return this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify(loginForm)
        })
    }

    async registerCode(registerForm: { phone: string; msg: string; password: string }): Promise<{
        code: number;
        token?: string;
        user: any;
        expire?: number;
        msg?: string
    }> {
        return this.request('/app/Login/registerCode', {
            method: 'POST',
            body: JSON.stringify(registerForm)
        })
    }

    async forgetPassword(data: { phone: string; msg: string; pwd: string }): Promise<{ code: number; msg?: string }> {
        return this.request('/app/Login/forgetPwd', {
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    async sendVerifyCode(phone: string): Promise<{ success: boolean }> {
        return this.request('/auth/send-code', {
            method: 'POST',
            body: JSON.stringify({phone})
        })
    }

    async getUserInfo(): Promise<any> {
        return this.request('/user/info')
    }

    async updateUserInfo(data: any): Promise<{ user: any }> {
        return this.request('/user/update', {
            method: 'PUT',
            body: JSON.stringify(data)
        })
    }
}

export const apiService = new ApiService()
