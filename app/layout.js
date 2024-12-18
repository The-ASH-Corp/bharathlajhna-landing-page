import "./globals.css";


export const metadata = {
  title: "BLM - Home",
  description: "Ashcorp Technologies Machine Test",
  icons:{
    icon:"/assets/icons/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
