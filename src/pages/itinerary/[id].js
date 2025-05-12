import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ItineraryCard from "../../components/ItineraryCard";
import { itineraries } from "../../utils/itineraries";

export default function ItineraryDetail() {
  const router = useRouter();
  const { id } = router.query;

  const itinerary = itineraries.find((item) => item.id === id);

  if (!itinerary) {
    return <div>Itinerary not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{itinerary.title} | Guangzhou Travel Guide</title>
        <meta
          name="description"
          content={`${itinerary.shortDesc} Plan your perfect ${itinerary.duration} trip to Guangzhou.`}
        />

        {/* Open Graph / Social Media */}
        <meta
          property="og:title"
          content={`${itinerary.title} | Guangzhou Travel`}
        />
        <meta property="og:description" content={itinerary.shortDesc} />
        <meta
          property="og:image"
          content={`https://yourdomain.com/images/${itinerary.image}`}
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{itinerary.title}</h1>
            <p className="text-gray-600">{itinerary.shortDesc}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <img
              src={`/images/${itinerary.image}`}
              alt={itinerary.title}
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="space-y-8">
            {itinerary.days.map((day, index) => (
              <ItineraryCard
                key={index}
                day={day.day}
                title={day.title}
                activities={day.activities}
                meals={day.meals}
                accommodation={day.accommodation}
                image={day.image}
              />
            ))}
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Travel Tips</h2>
            <ul className="list-disc pl-5 space-y-2">
              {itinerary.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
