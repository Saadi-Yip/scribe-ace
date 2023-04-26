import Blogs from "@/components/global/writing-blogs";

//&& Blogs Props &&//
const blogs_data = [
  {
    title: "Fiction",
    details: "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: '/portfolio-1.png'
  },
  {
    title: "Fiction",
    details: "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: '/portfolio-2.png'
  },
  {
    title: "Fiction",
    details: "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: '/portfolio-3.png'
  },
  {
    title: "Fiction",
    details: "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: '/portfolio-1.png'
  },
  {
    title: "Fiction",
    details: "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: '/portfolio-2.png'
  },
];

export default function Home() {
  return (
    <main>
      <Blogs data={blogs_data} />
    </main>
  );
}
