import { StaticImageData } from "next/image";
import Image from "next/image"

interface BackgroundImageProps {
  src: StaticImageData
  srcMobile?: StaticImageData
  alt: string
}

export default function BackgroundImage(
  {
    src,
    srcMobile,
    alt,
  }: BackgroundImageProps) {
  return (
    <>
      <Image
        fill
        alt={alt}
        src={src}
        placeholder="blur"
        className={`-z-10 absolute aspect-video w-full object-cover object-center ${srcMobile ? 'desktop' : ''}`}
      />
      {srcMobile && <Image
        fill
        alt={alt}
        src={srcMobile}
        placeholder="blur"
        className={`-z-10 absolute w-full h-full object-cover object-center mobile}`}
      />}
    </>
  );
}
