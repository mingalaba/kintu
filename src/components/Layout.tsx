import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-void text-optical font-geist tech-grid flex flex-col items-center overflow-x-hidden">
      <Header />
      <main className="w-full flex-grow flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
