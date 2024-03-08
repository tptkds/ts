import React from 'react';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="h-full relative z-0">{children}</div>;
};

export default Layout;
