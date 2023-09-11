import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Join our invigorating weight training classes to build strength, tone muscles, and achieve your fitness goals efficiently. Led by expert trainers, our classes empower you to unleash your full potential.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find inner peace and enhance flexibility in our serene Yoga Classes. Led by experienced instructors, these sessions provide a holistic approach to wellness, promoting physical and mental harmony for all participants.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Sculpt and strengthen your core with our Ab Core classes. Led by expert instructors, these workouts will help you achieve a toned midsection and improved core strength in just 30 minutes.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on exhilarating fitness journeys with Adventure Classes. Guided by experienced instructors, these sessions blend fun and fitness for an unforgettable workout experience. Explore new horizons in every class.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Join our dynamic Fitness Classes, guided by expert instructors. These diverse workouts cater to all levels, fostering strength, endurance, and overall well-being for a healthier you.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Elevate your fitness with our comprehensive Training Classes. Led by expert instructors, these sessions cater to all levels, ensuring you reach your goals effectively and with confidence.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
