import { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="border-b bg-background">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {children}
      </nav>
    </header>
  );
};
