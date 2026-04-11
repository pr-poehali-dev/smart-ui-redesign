import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, image }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex items-center p-8 md:p-16 lg:p-24">
      <div className={`flex w-full items-center gap-8 lg:gap-16 ${image ? 'flex-col lg:flex-row' : 'flex-col'}`}>
        <div className={`flex flex-col ${image ? 'lg:w-1/2' : 'w-full'}`}>
          {subtitle && (
            <motion.div
              className="mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.div>
          )}
          <motion.h2
            className="text-3xl md:text-5xl lg:text-[4rem] xl:text-[5rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          {content && (
            <motion.p
              className="text-base md:text-lg lg:text-xl max-w-2xl mt-4 lg:mt-6 text-neutral-400"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content}
            </motion.p>
          )}
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 lg:mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-[#55C056] bg-transparent border-[#55C056] hover:bg-[#55C056] hover:text-black transition-colors"
              >
                {buttonText}
              </Button>
            </motion.div>
          )}
        </div>
        {image && (
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-2xl shadow-green-900/20 object-cover"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
