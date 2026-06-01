import {notFound} from 'next/navigation';

export default function GlobalNotFound() {
  // This renders when a route like /unknown-locale is visited
  return (
    <html lang="en">
      <body>
        <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <a href="/en" style={{ color: 'blue', textDecoration: 'underline' }}>Go to Home</a>
        </div>
      </body>
    </html>
  );
}
