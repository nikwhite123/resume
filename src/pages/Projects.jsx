import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Наши проекты</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Здесь вы найдете примеры наших работ и идей.
        </p>
      </motion.div>
    </section>
  );
}
