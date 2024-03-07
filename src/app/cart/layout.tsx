import React from 'react';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <h2>Your Cart</h2> */}
      {children}
    </div>
  );
};

export default Layout;
