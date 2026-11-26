import bannerImage from "../image/banner/HeroCarousel-1.png";

export default function Banner() {
  return (
    <section aria-label="แบนเนอร์ประชาสัมพันธ์">
      <img
        src={bannerImage}
        alt="ประชาสัมพันธ์ NOVEL VET CMU"
        className="block h-auto w-full"
      />
    </section>
  );
}