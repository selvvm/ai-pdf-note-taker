import { Outfit } from 'next/font/google';
import './globals.css';
import Provider from './provider';
import { ClerkProvider } from '@clerk/nextjs';  // Fixed this import

// Initialize Outfit font
const outfit = Outfit({
  subsets: ['latin'],
  // You can specify the weights you need
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
});

export const metadata = {
  title: 'QueryNotes.AI',
  description: 'Easy access to notes and query answers from any PDF',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.variable} font-outfit antialiased`}>  {/* Added font-outfit class */}
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}