import Footer from '../../Footer';
import Header from '../../Header';

function DefaultLayout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
