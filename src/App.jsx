import React, { useState } from "react";
import paperImage from "./assets/Webpg-IntroFig.png"; 
import qual2Image from "./assets/Webpage-Qual2.png"; 
import qual1Image from "./assets/Qual-1.png"; 
import stats from "./assets/Stats.png"; 
import { ChevronLeft, ChevronRight, Clipboard } from "lucide-react";
import PhysicsModelTable from "./components/PhysicsModelTable";
import demoVideo from "./assets/Demo_Video.mp4"; 
import { FileText, Github, BookOpen } from "lucide-react";


function FigureCarousel({ images, captions }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col items-center gap-4">
      
      {/* Row with arrows + image */}
      <div className="flex items-center gap-4">
        
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="bg-black/60 text-white p-3 rounded-full hover:bg-black transition"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Image */}
        <img
          src={images[index]}
          alt={captions ? captions[index] : `Figure ${index + 1}`}
          className="max-w-3xl w-full rounded-xl shadow-lg transition-all duration-300"
        />

        {/* Right Arrow */}
        <button
          onClick={next}
          className="bg-black/60 text-white p-3 rounded-full hover:bg-black transition"
        >
          <ChevronRight size={22} />
        </button>

      </div>

      {/* Caption */}
      {captions && (
        <figcaption className="text-center text-gray-700 text-sm md:text-base max-w-2xl">
          {captions[index]}
        </figcaption>
      )}
    </div>
  );
}


export default function MainPage() {
  const [copied, setCopied] = useState(false);

  const bibtex = `@inproceedings{phyeduvideo_2026,
    title={PhyEduVideo: A Benchmark for Evaluating Text-to-Video Models for Physics Education},
    author={Megha Mariam K M and Aditya Arun and Zakaria Laskar and C. V. Jawahar},
    booktitle={Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
    year={2026},
    publisher={IEEE/CVF}
  }`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="bg-white text-black min-h-screen font-sans overflow-x-hidden">

      {/* ---------------- HERO SECTION ---------------- */}
      <header className="flex flex-col items-center justify-center text-center py-12 px-6">
        
        {/* Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-wide font-serif">
          PhyEduVideo: A Benchmark for Evaluating Text-to-Video Models for Physics Education
        </h1>

        {/* Authors */}
        <p className="text-base md:text-lg opacity-80 mb-6 max-w-3xl leading-relaxed">
          <a href="https://github.com/meghamariamkm?tab=repositories" className="hover:underline text-blue-600">Megha Mariam K M</a>,{" "}
          <a href="https://adityaarun1.github.io" className="hover:underline text-blue-600">Aditya Arun</a>,{" "}
          <a href="https://scholar.google.com/citations?hl=en&user=kd3XIUkAAAAJ" className="hover:underline text-blue-600">Zakaria Laskar</a>,{" "}
          <a href="https://faculty.iiit.ac.in/~jawahar/" className="hover:underline text-blue-600">C V Jawahar</a>
        </p>

        {/* Buttons */}
        <nav className="flex gap-4 flex-wrap justify-center">
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-gray-800 !text-white font-semibold shadow-sm hover:bg-blue-700 transition-all inline-flex items-center gap-2"
          >
            <FileText size={18} />
            Paper
          </a>

          <a
            href="https://github.com/meghamariamkm/PhyEduVideo"
            className="px-6 py-3 rounded-full bg-gray-800 !text-white font-semibold shadow-sm hover:bg-blue-700 transition-all inline-flex items-center gap-2"
          >
            <Github size={18} />
            Code
          </a>

          <a
            href="#"
            className="px-6 py-3 rounded-full bg-gray-800 !text-white font-semibold shadow-sm hover:bg-blue-700 transition-all inline-flex items-center gap-2"
          >
            <BookOpen size={18} />
            arXiv
          </a>
        </nav>

      </header>

      {/* ---------------- TOP FIGURE ---------------- */}
      <section className="max-w-4xl mx-auto px-6 pt-4 pb-10 text-center">
        <img
          src={paperImage}
          alt="Intro Figure"
          className="w-full rounded-lg shadow-lg"
        />
      </section>

      {/* ---------------- ABSTRACT ---------------- */}
      <section className="max-w-4xl mx-auto px-6 py-12 leading-tight tracking-wide font-serif">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Abstract</h2>

        <p
          className="text-lg md:text-xl opacity-80 leading-relaxed"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          Generative AI models, particularly Text-to-Video (T2V) systems, offer a promising avenue for transforming
          science education by automating the creation of engaging and intuitive visual explanations. In this work,
          we take a first step toward evaluating their potential in physics education by introducing a dedicated
          benchmark for explanatory video generation. The benchmark is designed to assess how well T2V models can
          convey core physics concepts through visual illustrations.
          <br /><br />
          Our evaluation reveals that current models produce visually coherent videos with smooth motion and minimal
          flickering, yet their conceptual accuracy is less reliable. Performance in areas such as mechanics, fluids
          and optics is encouraging, but models struggle with electromagnetism and thermodynamics. We hope this
          benchmark helps the community close that gap and move toward T2V systems that can deliver accurate,
          curriculum-aligned physics content at scale.
        </p>
      </section>

      {/* ---------------- DEMO VIDEO ---------------- */}
      <section className="py-20 px-6 max-w-5xl mx-auto leading-tight tracking-wide font-serif">
        <div className="bg-[#f2f2f2] rounded-3xl shadow-md p-8 md:p-12">
          <h4 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Demo Video</h4>
          <div className="flex justify-center">
            <video
              controls
              className="w-full max-w-4xl rounded-lg shadow-lg"
              src={demoVideo}
            />
          </div>
        </div>
      </section>

      {/* ---------------- GALLERY ---------------- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-[#f2f2f2] rounded-3xl shadow-md p-2 md:p-12">
          <h4 className="text-3xl md:text-4xl font-semibold mb-6 text-center leading-tight tracking-wide font-serif">Gallery</h4>

          <FigureCarousel
            images={[stats, qual2Image, qual1Image]}
            captions={[
              "Overview of benchmark statistics for the PhyEduVideo dataset.",
              "Comparison of SA and PC scores for multiple evaluators.",
              "Qualitative comparisons across six physics categories for five T2V models."
            ]}
          />
        </div>
      </section>



      {/* ---------------- RESULTS TABLE ---------------- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-[#f2f2f2] rounded-3xl shadow-md p-8 md:p-12">
          <h4 className="text-3xl md:text-4xl font-semibold mb-6 text-center leading-tight tracking-wide font-serif">Results</h4>
          <PhysicsModelTable />
        </div>
      </section>

      {/* ---------------- BIBTEX ---------------- */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center leading-tight tracking-wide font-serif">BibTeX</h2>

        <div className="relative bg-white border border-gray-300 rounded-2xl shadow-md p-6 md:p-8">

          <button
            onClick={copyToClipboard}
            className="absolute top-4 right-4 !bg-blue-700 !text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-2 shadow-md hover:!bg-blue-800"
          >
            <Clipboard size={16} />
            {copied ? "Copied!" : "Copy"}
          </button>

          <pre
            className="text-sm md:text-base text-gray-800 whitespace-pre-wrap leading-relaxed pl-2"
            style={{ fontFamily: `"Times New Roman", Georgia, Cambria, serif` }}
          >
            {bibtex}
          </pre>
        </div>
      </section>

      {/* ---------------- ACKNOWLEDGEMENTS ---------------- */}
      <section className="max-w-4xl mx-auto px-6 pt-4 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center leading-tight tracking-wide font-serif">Acknowledgements</h2>

        <div className="bg-white border border-gray-300 rounded-2xl shadow p-6 md:p-8">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            We acknowledge and appreciate the support of
            <span className="font-semibold"> Google Research / AI</span> in this project.
          </p>
        </div>
      </section>

    </main>
  );
}