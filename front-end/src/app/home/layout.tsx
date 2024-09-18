import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const Layout = ({ children }: { children: React }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
