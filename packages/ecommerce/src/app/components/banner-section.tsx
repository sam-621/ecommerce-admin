import Image from 'next/image';
import Link from 'next/link';

export const BannerSection = () => {
  return (
    <Link
      href={'#'}
      className="w-full aspect-[16/6] overflow-hidden rounded-xl flex"
      target="_blank"
    >
      <Image
        width="1600"
        height="400"
        alt="EMontes - Banner"
        src="/images/banner/banner.png"
        className="object-cover"
      />
    </Link>
  );
};
