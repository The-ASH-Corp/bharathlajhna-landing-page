import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";


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
          <NavBar />
        {children}
        <footer>
        <Footer />
      </footer>
      </body>
    </html>
  );
}
