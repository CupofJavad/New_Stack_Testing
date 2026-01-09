import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav
        style={{
          padding: '1rem 2rem',
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: '#f5f5f5',
        }}
      >
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
            Home
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>
            About
          </Link>
        </div>
      </nav>
      <main style={{ flex: 1, padding: '2rem' }}>{children}</main>
      <footer
        style={{
          padding: '1rem 2rem',
          borderTop: '1px solid #e0e0e0',
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
        }}
      >
        <p>© 2024 React + Node + TypeScript App</p>
      </footer>
    </div>
  );
}

export default Layout;
