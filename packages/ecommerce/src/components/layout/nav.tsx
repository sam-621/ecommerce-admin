import { MailIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { CategoryRepository } from '@/lib/repositories';

export const Nav = async () => {
  const categories = await CategoryRepository.getMany();

  return (
    <header className="h-64 border-b border-neutral-border sticky top-0 z-[100] bg-neutral-white">
      <div className="wrapper h-full flex items-center justify-between gap-16 lg:gap-32">
        <div className="flex gap-48 items-center">
          <Link href="/">
            <Image src="/images/logo/emontes-logo.png" alt="Emontes logo" width="82" height="48" />
          </Link>

          <div className="hidden md:flex gap-32">
            {categories?.map(category => (
              <Link
                key={category.slug}
                href={`/categoria/${category.slug}`}
                className="flex text-14 font-semibold text-neutral-light hover:text-neutral-title transition-all"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-6">
            <Link
              href="tel:4412772289"
              className="flex items-center gap-16 text-neutral-light hover:text-neutral-text transition-all"
            >
              <PhoneIcon width={16} height={16} />
              <span className="md:block font-medium text-sm sm:hidden">441-277-2289</span>
            </Link>
            <div>
              <hr className="bg-neutral-border w-[1px] h-[22px] border-none rounded-full" />
            </div>
            <Link
              href="mailto:llantasyrinesemontes@gmail.com"
              className="flex items-center gap-16 text-neutral-light hover:text-neutral-text transition-all"
            >
              <MailIcon width={16} height={16} />
              <span className=" md:block font-medium text-sm sm:hidden">
                llantasyrinesemontes@gmail.com
              </span>
            </Link>
            <div>
              <hr className=" bg-neutral-border w-[1px] h-[22px] border-none rounded-full" />
            </div>

            <Link
              href="https://api.whatsapp.com/send?phone=4271145113"
              target="_blank"
              className="flex place-items-center transition-all hover:bg-[#E5FFFA] hover:border-[#2E686B] text-neutral-light fill-neutral-light hover:text-neutral-title hover:fill-neutral-title gap-8 h-44 rounded-lg items-center px-16 border border-neutral-border"
              rel="noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.03126 0.015625C10.2132 0.015625 11.3835 0.248417 12.4754 0.700709C13.5673 1.153 14.5595 1.81594 15.3952 2.65166C16.2309 3.48739 16.8939 4.47954 17.3462 5.57147C17.7985 6.6634 18.0313 7.83373 18.0313 9.01562C18.0313 11.4026 17.083 13.6918 15.3952 15.3796C13.7074 17.0674 11.4182 18.0156 9.03126 18.0156C7.25826 18.0156 5.61126 17.5026 4.21626 16.6206L0.0312558 18.0156L1.42626 13.8306C0.51321 12.3908 0.0293199 10.7206 0.0312558 9.01562C0.0312558 6.62868 0.979467 4.33949 2.66729 2.65166C4.35512 0.963837 6.64431 0.015625 9.03126 0.015625ZM3.94009 3.92446C5.29035 2.57419 7.1217 1.81563 9.03126 1.81563C10.9408 1.81563 12.7722 2.57419 14.1224 3.92446C15.4727 5.27472 16.2313 7.10607 16.2313 9.01562C16.2313 10.9252 15.4727 12.7565 14.1224 14.1068C12.7722 15.4571 10.9408 16.2156 9.03126 16.2156C7.54537 16.2191 6.09526 15.7598 4.88226 14.9016L2.28126 15.7656L3.14526 13.1646C2.31726 11.9946 1.83126 10.5636 1.83126 9.01562C1.83126 7.10607 2.58982 5.27472 3.94009 3.92446Z"
                />
                <path d="M13.3063 10.7796C13.5313 10.8966 13.6753 10.9596 13.7203 11.0496C13.7743 11.1486 13.7563 11.5986 13.5313 12.1116C13.3513 12.6156 12.4153 13.1016 12.0013 13.1196C11.5873 13.1376 11.5783 13.4436 9.33726 12.4626C7.09626 11.4816 5.74625 9.08762 5.63826 8.93462C5.53025 8.78162 4.77425 7.69263 4.81026 6.58563C4.85485 5.49739 5.42105 4.97496 5.65893 4.75546L5.66526 4.74963C5.88126 4.51562 6.12425 4.48863 6.27726 4.51562H6.70025C6.83525 4.51562 7.02426 4.46163 7.19526 4.92063L7.81626 6.60362C7.87026 6.72062 7.90626 6.85563 7.82526 6.99963L7.58226 7.36863L7.23126 7.74663C7.12326 7.85463 6.99726 7.97163 7.12326 8.19663C7.23126 8.43062 7.68126 9.17762 8.31126 9.79862C9.13026 10.5906 9.85026 10.8516 10.0663 10.9686C10.2823 11.0946 10.4173 11.0766 10.5523 10.9326L11.2813 10.0866C11.45 9.86465 11.5924 9.91422 11.7949 9.98473L11.8033 9.98763L13.3063 10.7796Z" />
              </svg>
              <span className="font-semibold text-sm">Ayuda</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
