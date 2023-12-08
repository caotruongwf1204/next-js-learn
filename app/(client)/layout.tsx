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

  {children}

  <Footer></Footer>

</>
)
  
}
