import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { categories } from '../data';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors">
      <Navbar /> 
      
      <main>
        {/* Halkan waxaad ka saartay Hero section-kii */}

        <div className="max-w-7xl mx-auto py-10 px-6 flex flex-col md:flex-row gap-8">
          {/* Carousel/Slider */}
          <section className="w-full md:w-2/3">
            <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">Carousel/Slider Section</span>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="w-full md:w-1/3">
            <div className="border p-6 dark:border-gray-800 h-full">
              <h3 className="font-bold text-lg mb-4 dark:text-white">Recent Articles</h3>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                <li>Duis aute irure dolor in reprehenderit</li>
                <li>Excepteur sint occaecat cupidatat</li>
                <li>Sunt in culpa qui officia deserunt</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Categories */}
        <section className="max-w-7xl mx-auto py-10 px-6">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((item) => (
              <div key={item.id} className="border p-6 dark:bg-[#1a1a1a]">
                <div className="h-40 bg-gray-200 mb-4"></div>
                <h4 className="font-bold dark:text-white">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;