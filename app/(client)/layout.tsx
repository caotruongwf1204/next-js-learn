import { Suspense } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Navigation from "./components/navigation";


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header></Header>

      <Navigation></Navigation>

      <main className="max-w-6xl mx-auto">

          {children}
      </main>

      <Footer></Footer>
    </>
  );
}
