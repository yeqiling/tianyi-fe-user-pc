import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { apiService } from '@/services/api.ts';

interface AuthCodeProps {
  phone: string;
  value: string;
  onChange: (value: string) => void;
}

export function AuthCode({ phone }: AuthCodeProps) {
  const [countdown, setCountdown] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSendCode = async () => {
    if (!phone || countdown > 0 || loading) return;

    const phoneReg = /^1[3-9]\d{9}$/;
    if (!phoneReg.test(phone)) {
      toast('手机号格式不正确');
      return;
    }

    try {
      setLoading(true);
      // 这里应该调用发送验证码的API
      await apiService.sendVerifyCode(phone);
      setCountdown(60);
    } catch (error) {
      console.error('发送验证码失败:', error);
      toast('发送验证码失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleSendCode}
      disabled={!phone || countdown > 0 || loading}
      style={{
        width: '100%',
        height: '100%',
        background: countdown > 0 || loading ? '#ccc' : '#f9fafb',
        border: 'none',
        borderRadius: '8px',
        fontSize: '14px',
        color: countdown > 0 || loading ? '#999' : '#333',
        cursor: countdown > 0 || loading ? 'not-allowed' : 'pointer',
      }}
    >
      {loading ? '发送中...' : countdown > 0 ? `${countdown}s` : '获取验证码'}
    </button>
  );
}

export default AuthCode;
