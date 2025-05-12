export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Guangzhou Travel Planner. All rights reserved.</p>
        <p className="mt-2 text-gray-400 text-sm">
          Designed for travelers exploring Guangzhou from Bangkok
        </p>
      </div>
    </footer>
  );
}