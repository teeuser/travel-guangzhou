import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Guangzhou Travel
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/itinerary/guangzhou-3d2n" className="hover:underline">
                Itineraries
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}