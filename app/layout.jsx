import './globals.css'; 
import Navbar from './components/Navbar'; 
export const metadata = {
  title: 'Cafe Culture',
  description: 'Welcome to Cafe Culture',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
