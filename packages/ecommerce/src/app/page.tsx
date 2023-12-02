import { AllSection, BannerSection, DiscountSection } from './components';

export default async function Home() {
  return (
    <main className="flex flex-col gap-40 md:gap-48 lg:gap-52 pt-24 lg:pt-24 pb-40">
      <BannerSection />
      <div className="flex flex-col gap-40 lg:gap-48">
        <DiscountSection />
        <AllSection />
      </div>
    </main>
  );
}
