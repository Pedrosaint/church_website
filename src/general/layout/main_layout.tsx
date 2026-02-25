import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import  Header  from "./header";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <>
      <Helmet>
        <title>WAGGOM Theological Seminary - Training Leaders for Ministry</title>
        <meta name="description" content="WAGGOM Theological Seminary offers quality theological education and ministry training programs. Join us to train, serve, and lead in the Church." />
        <meta name="keywords" content="theological seminary, ministry training, Christian education, Bible studies, pastoral training" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="WAGGOM Theological Seminary" />
        <meta property="og:title" content="WAGGOM Theological Seminary - Training Leaders for Ministry" />
        <meta property="og:description" content="Quality theological education and ministry training programs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://waggomseminary.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WAGGOM Theological Seminary" />
        <meta name="twitter:description" content="Training leaders for ministry" />
      </Helmet>
      <div className="flex min-h-screen flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
