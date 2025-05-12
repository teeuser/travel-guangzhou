import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { itineraries } from '../utils/itineraries';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Guangzhou Travel Planner</title>
        <meta name="description" content="Plan your perfect trip to Guangzhou" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">Guangzhou Travel Itineraries</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itineraries.map((itinerary) => (
            <div key={itinerary.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={`/images/${itinerary.image}`} 
                alt={itinerary.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{itinerary.title}</h2>
                <p className="text-gray-600 mb-4">{itinerary.shortDesc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-600">{itinerary.duration}</span>
                  <Link 
                    href={`/itinerary/${itinerary.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}