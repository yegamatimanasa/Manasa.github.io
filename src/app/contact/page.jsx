import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";

export default function page() {
  return (
    <div className="container grid place-items-center  h-screen 2xl:pt-0 pt-20">
      <div className="absolute left-0 right-0 bottom-0 top-[94px] sm:bg-accent">
        <Image
          src={"/map.png"}
          width={1200}
          height={450}
          alt="map"
          className="w-full h-full object-contain absolute "
        />
      </div>
      <MotionDiv
        className="z-10"
        initial="initial"
        animate="animate"
        transition={transition.moveUp}
        variants={variants.moveUp}
      >
        <div className="text-center">
          <h3>
            <span>Get </span>in touch with <span>me!</span>
          </h3>
          <p className="text-accent-foreground mt-5 w-3/4 mx-auto">
            Excited to collaborate? Let's connect and build something amazing!
          </p>
        </div>
        <ContactForm />
      </MotionDiv>
    </div>
  );
}
