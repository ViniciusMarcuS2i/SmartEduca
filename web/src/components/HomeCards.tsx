import { motion } from "framer-motion";

export default function HomeCards() {
  return (
    <div className="p-4 pb-14 mt-16 grid grid-cols-1 px-6 gap-4 lg:px-48 lg:grid-cols-2 xl:grid-cols-3 z-10 relative">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-[#f8f8f8] rounded-md w-full overflow-hidden flex items-center py-5 flex-col px-8 gap-8"
      >
        <img
          className="w-72 h-72"
          src="https://www.euroschoolindia.com/wp-content/uploads/2023/07/importance-of-education.jpg"
        />
        <p className="text-center font-light text-sm">
          A educação é a base sólida para o desenvolvimento de qualquer sociedade. Ela não apenas transmite conhecimento, mas também forma cidadãos conscientes e críticos. Investir na educação é garantir um futuro com mais oportunidades e menos desigualdade. O aprendizado contínuo é um processo que não termina na sala de aula. É por meio da educação que transformamos sonhos em realidades concretas.
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-[#f8f8f8] rounded-md w-full overflow-hidden flex items-center py-5 flex-col px-8 gap-8"
      >
        <img
          className="w-72 h-72"
          src="https://www.euroschoolindia.com/wp-content/uploads/2023/07/importance-of-education.jpg"
        />
        <p className="text-center font-light text-sm">
          Cuidar dos filhos é um ato de amor e responsabilidade que molda o caráter e os valores. É estar presente nos momentos importantes, orientando com paciência e dedicação. Os filhos aprendem pelo exemplo, por isso, seja o modelo que você deseja que eles sigam. Cada palavra de incentivo e cada gesto de carinho constroem um vínculo forte. Esse cuidado é um investimento que floresce por toda a vida.
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-[#f8f8f8] rounded-md w-full overflow-hidden flex items-center py-5 flex-col px-8 gap-8"
      >
        <img
          className="w-72 h-72"
          src="https://www.euroschoolindia.com/wp-content/uploads/2023/07/importance-of-education.jpg"
        />
        <p className="text-center font-light text-sm">
          Como voar sem ter asas, como posso eu voar? Se asa não tenho? Deveria
          eu voar, sem voar voando? Porque a vida é feita de avoar Como voar sem
          ter asas, como posso eu voar? Se asa não tenho? Deveria eu voar, sem
          voar voando? Porque a vida é feita de avoar
        </p>
      </motion.div>
    </div>
  );
}
