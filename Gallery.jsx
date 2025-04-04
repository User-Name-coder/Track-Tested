import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Gallery() {
  const { ref: sectionRef, inView } = useIntersectionObserver();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/images/svj63/front.jpg",
      title: "SVJ 63 Front View",
      description:
        "Aggressive aerodynamics and distinctive Y-shaped headlights",
    },
    {
      src: "/images/svj63/side.jpg",
      title: "SVJ 63 Side Profile",
      description:
        "Sculpted side panels and iconic scissor doors showcase the SVJ 63's distinctive silhouette",
    },
    {
      src: "/images/svj63/rear.jpg",
      title: "SVJ 63 Rear Design",
      description:
        "Massive rear diffuser and upgraded ALA 2.0 active aerodynamics system",
    },
    {
      src: "/images/svj63/interior.jpg",
      title: "SVJ 63 Interior",
      description:
        "Alcantara upholstery, carbon fiber elements and exclusive '63' badging",
    },
    {
      src: "/images/svj63/detail.jpg",
      title: "SVJ 63 Detail",
      description: "Custom carbon fiber components with exclusive design elements",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-[#1A1A1A]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            SVJ 63 <span className="text-[#DDB32B]">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The Aventador SVJ 63 captures the essence of automotive excellence. View our gallery to appreciate the extraordinary design details.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryImages.slice(0, 3).map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  variants={itemVariants}
                  className="rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">{image.title}</h3>
                      <p className="text-gray-300 text-sm mt-2">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-black border-[#DDB32B] p-0">
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 z-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full object-contain max-h-[80vh]"
                  />
                  <div className="p-6 bg-black/90">
                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                    <p className="text-gray-300 mt-2">{image.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}

          {galleryImages.slice(3, 5).map((image, index) => (
            <Dialog key={index + 3}>
              <DialogTrigger asChild>
                <motion.div
                  variants={itemVariants}
                  className={`rounded-lg overflow-hidden group cursor-pointer ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                  onClick={() => setSelectedImage(index + 3)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">{image.title}</h3>
                      <p className="text-gray-300 text-sm mt-2">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-black border-[#DDB32B] p-0">
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 z-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full object-contain max-h-[80vh]"
                  />
                  <div className="p-6 bg-black/90">
                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                    <p className="text-gray-300 mt-2">{image.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>

        <Dialog>
          <DialogTrigger asChild>
            <motion.button
              variants={itemVariants}
              className="mx-auto mt-12 block px-8 py-3 bg-[#DDB32B] text-black rounded-md font-semibold hover:bg-yellow-500 transition duration-300"
            >
              View All Images
            </motion.button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl bg-black border-[#DDB32B] p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            <h2 className="text-2xl font-bold text-white mb-4">SVJ 63 Gallery</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="relative">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full object-contain h-[60vh]"
                        />
                        <div className="p-4 bg-black/90">
                          <h3 className="text-white text-xl font-bold">{image.title}</h3>
                          <p className="text-gray-300 mt-2">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-[#DDB32B] text-black hover:bg-yellow-500" />
              <CarouselNext className="bg-[#DDB32B] text-black hover:bg-yellow-500" />
            </Carousel>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}