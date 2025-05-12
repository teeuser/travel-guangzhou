export function itinerarySchema(itinerary) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": itinerary.title,
    "description": itinerary.shortDesc,
    "itinerary": itinerary.days.map(day => ({
      "@type": "TouristAttraction",
      "name": day.title,
      "description": day.activities.join(' ')
    })),
    "image": `/images/${itinerary.image}`
  };
}