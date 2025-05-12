import { motion } from 'framer-motion';

export default function ItineraryCard({ day, title, activities, meals, accommodation, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Rest of your card code */}
    </motion.div>
  );
}