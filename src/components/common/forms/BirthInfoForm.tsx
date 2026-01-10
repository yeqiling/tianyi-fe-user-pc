import React, { useState } from 'react';
import { Button } from '@/components/common/ui';
import { Input } from '@/components/common/ui';
import { Label } from '@/components/common/ui';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/ui/select.tsx';

export interface BirthInfo {
  name: string;
  gender: 'male' | 'female';
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  birthHour: string;
  birthMinute: string;
  isLunar: boolean;
}

interface BirthInfoFormProps {
  initialData?: Partial<BirthInfo>;
  onSave: (data: BirthInfo) => void;
  onCancel: () => void;
}

export function BirthInfoForm({
  initialData,
  onSave,
  onCancel,
}: BirthInfoFormProps) {
  const [formData, setFormData] = useState<BirthInfo>({
    name: '',
    gender: 'male',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    birthHour: '',
    birthMinute: '',
    isLunar: false,
    ...initialData,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const updateField = (field: keyof BirthInfo, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="name">姓名</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          required
        />
      </div>

      <div>
        <Label>性别</Label>
        <Select
          value={formData.gender}
          onValueChange={(value) => updateField('gender', value)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">男</SelectItem>
            <SelectItem value="female">女</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div>
          <Label htmlFor="year">年</Label>
          <Input
            id="year"
            type="number"
            value={formData.birthYear}
            onChange={(e) => updateField('birthYear', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="month">月</Label>
          <Input
            id="month"
            type="number"
            min="1"
            max="12"
            value={formData.birthMonth}
            onChange={(e) => updateField('birthMonth', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="day">日</Label>
          <Input
            id="day"
            type="number"
            min="1"
            max="31"
            value={formData.birthDay}
            onChange={(e) => updateField('birthDay', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label htmlFor="hour">时</Label>
          <Input
            id="hour"
            type="number"
            min="0"
            max="23"
            value={formData.birthHour}
            onChange={(e) => updateField('birthHour', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="minute">分</Label>
          <Input
            id="minute"
            type="number"
            min="0"
            max="59"
            value={formData.birthMinute}
            onChange={(e) => updateField('birthMinute', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="isLunar"
          checked={formData.isLunar}
          onChange={(e) => updateField('isLunar', e.target.checked)}
        />
        <Label htmlFor="isLunar">农历</Label>
      </div>

      <div className="flex space-x-2">
        <Button type="submit" className="flex-1">
          保存
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="flex-1"
        >
          取消
        </Button>
      </div>
    </form>
  );
}
