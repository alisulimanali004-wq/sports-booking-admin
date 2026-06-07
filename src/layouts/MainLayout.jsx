import Header from "../shared/components/Header/Header";
import Footer from "../shared/components/Footer/Footer";

function MainLayout({ children }) {
  return (
    <div>
      <Header />

      <main style={{ minHeight: "80vh", padding: "20px" }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;