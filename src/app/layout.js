// app/layout.js
import React from 'react';
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
