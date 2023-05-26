import Avtar from '@/components/Avtar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Home from '@/container/Home';

const HomePage = () => {
  return (
    <div className="isolate lg:bg-white bg-white py-30 sm:pb-20  min-h-screen">
      <Header />
      <Avtar />
      <Home />
      <Footer />
    </div>
  );
};
export default HomePage;
