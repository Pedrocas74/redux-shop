// src/app/layout.jsx
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Redux Shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
