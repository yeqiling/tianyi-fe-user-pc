import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';

export const ComponentsDemo = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">shadcn/ui 组件演示</h1>
      
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>登录</CardTitle>
          <CardDescription>输入您的凭据以访问您的账户</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="邮箱" type="email" />
          <Input placeholder="密码" type="password" />
          <div className="flex space-x-2">
            <Button className="flex-1">登录</Button>
            <Button variant="outline" className="flex-1">取消</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">按钮变体</h2>
        <div className="flex flex-wrap gap-2">
          <Button>默认</Button>
          <Button variant="secondary">次要</Button>
          <Button variant="outline">轮廓</Button>
          <Button variant="ghost">幽灵</Button>
          <Button variant="link">链接</Button>
          <Button variant="destructive">危险</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">按钮尺寸</h2>
        <div className="flex items-center gap-2">
          <Button size="sm">小</Button>
          <Button size="default">默认</Button>
          <Button size="lg">大</Button>
        </div>
      </div>
    </div>
  );
};
