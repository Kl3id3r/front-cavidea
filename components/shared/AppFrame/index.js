import Header from '../../Header';
import Footer from '../../Footer';

export default function AppFrame({ children }) {
  return (
    <>
      <Header />
      <div>
        <main role='main'>{children}</main>
      </div>
      <Footer />
    </>
  );
}
