import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="about-us-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">О нас</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Мы делаем крутые проекты, которые помогают людям развиваться
          и достигать целей.
        </p>
      </motion.div>
    </section>
  );
}
