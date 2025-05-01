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
        alt={alt}
        src={src}
        className={`absolute w-full h-full object-cover object-top ${srcMobile ? 'desktop' : ''}`}
      />
      {srcMobile && <Image
        alt={alt}
        src={srcMobile}
        className={`absolute w-full h-full object-cover object-top mobile}`}
      />}
    </>
  );
}
