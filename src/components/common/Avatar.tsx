import Image from 'next/image';

interface Props {
  src?: string;
  alt?: string;
  className?: string;
}

const DEFAULT_IMG =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLYACaGIbSwNMTz6AN8Vac6G8NidhAU0QoguP79Q&s'; // will be removed

export const Avatar = ({ src = DEFAULT_IMG, alt = '', className }: Props) => {
  return (
    <Image
      height={56}
      width={56}
      src={src}
      alt={alt}
      className={`rounded-full ${className}`}
    />
  );
};
