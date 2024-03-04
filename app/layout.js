// 모든 페이지에 'globals.css' 사용가능
import './globals.css';

// app 폴더에 'icon.png' 파일은 파비콘으로 동작한다.
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
