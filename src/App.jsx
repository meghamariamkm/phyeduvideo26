import React, { useState } from "react";
import paperImage from "./assets/Webpg-IntroFig.png"; 
import qual2Image from "./assets/Webpage-Qual2.png"; 
import qual1Image from "./assets/Qual-1.png"; 
import stats from "./assets/Stats.png"; 
import { ChevronLeft, ChevronRight, Clipboard } from "lucide-react";
import PhysicsModelTable from "./components/PhysicsModelTable";
import demoVideo from "./assets/Demo_Video.mp4"; 

function FigureCarousel({ images, captions }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Current Image */}
        <img
          src={images[index]}
          alt={captions ? captions[index] : `Figure ${index + 1}`}
          className="max-w-3xl w-full rounded shadow-lg transition-all duration-300"
        />

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Caption */}
      {captions && (
        <figcaption className="text-center mt-2 text-gray-700">
          {captions[index]}
        </figcaption>
      )}
    </div>
  );
}

export default function MotherPage() {
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

      {/* Top Hero */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          PhyEduVideo: A Benchmark for Evaluating Text-to-Video Models for Physics Education
        </h1>

        <p className="text-base md:text-xl opacity-80 mb-6 max-w-3xl">
          <a href="https://github.com/meghamariamkm?tab=repositories" className="hover:underline text-blue-600">Megha Mariam K M</a>,{" "}
          <a href="https://adityaarun1.github.io" className="hover:underline text-blue-600">Aditya Arun</a>,{" "}
          <a href="https://scholar.google.com/citations?hl=en&user=kd3XIUkAAAAJ" className="hover:underline text-blue-600">Zakaria Laskar</a>,{" "}
          <a href="https://faculty.iiit.ac.in/~jawahar/" className="hover:underline text-blue-600">C V Jawahar</a>
        </p>

        <nav className="flex gap-4 flex-wrap justify-center">
  <a
    href="#"
    className="px-6 py-3 rounded-4xl bg-gray-800 !text-white font-semibold shadow-sm hover:bg-blue-700 transition-all inline-flex items-center justify-center"
  >
    Paper
  </a>

  <a
    href="https://github.com/meghamariamkm/PhyEduVideo"
    className="px-6 py-3 rounded-4xl bg-gray-800 !text-white font-semibold shadow-sm hover:bg-blue-700 transition-all inline-flex items-center justify-center"
  >
    Code
  </a>

  <a
    href="#"
    className="px-6 py-3 rounded-4xl bg-gray-800 !text-white font-semibold shadow-sm hover:bg-blue-700 transition-all inline-flex items-center justify-center"
  >
    arXiv
  </a>
</nav>



      </header>

      {/* Intro Figure */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-4 text-center">
        <img
          src={paperImage}
          alt="Intro Figure"
          className="w-full max-w-10xl mx-auto rounded shadow-lg"
        />
      </section>

      {/* Abstract */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="p-2"> 
          <h2 className="text-4xl font-semibold mb-6 text-center">Abstract</h2>

          <p
            className="text-lg md:text-xl opacity-80 leading-relaxed text-justify"
            style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            Generative AI models, particularly Text-to-Video (T2V) systems, offer a promising avenue for transforming science education by automating the creation of engaging and intuitive visual explanations. In this work, we take a first step toward evaluating their potential in physics education by introducing a dedicated benchmark for explanatory video generation. The benchmark is designed to assess how well T2V models can convey core physics concepts through visual illustrations. Each physics concept in our benchmark is decomposed into granular teaching points, with each point accompanied by a carefully crafted prompt intended for visual explanation of the teaching point. T2V models are evaluated on their ability to generate accurate videos in response to these prompts. Our aim is to systematically explore the feasibility of using T2V models to generate high-quality, curriculum-aligned educational content—paving the way toward scalable, accessible, and personalized learning experiences powered by AI. Our evaluation reveals that current models produce visually coherent videos with smooth motion and minimal flickering, yet their conceptual accuracy is less reliable. Performance in areas such as mechanics, fluids and optics is encouraging, but models struggle with electromagnetism and thermodynamics, where abstract interactions are harder to depict. These findings underscore the gap between visual quality and conceptual correctness in educational video generation. We hope this benchmark helps the community close that gap and move toward T2V systems that can deliver accurate, curriculum-aligned physics content at scale.
          </p>
        </div>
      </section>

      {/* Demo Video */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="bg-[#f2f2f2] rounded-3xl shadow-md p-10">
          <h4 className="text-4xl font-semibold mb-6 text-center">Demo Video</h4>
          <div className="flex justify-center">
            <video
              controls
              className="w-full max-w-4xl rounded-lg shadow-lg"
              src={demoVideo} // make sure demoVideo is imported at the top
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="bg-[#f2f2f2] rounded-3xl shadow-md p-10">
          <h4 className="text-4xl font-semibold mb-6 text-center">Gallery</h4>
          <FigureCarousel
            images={[stats, qual2Image, qual1Image]}
            captions={[
              "Overview of benchmark statistics for the PhyEduVideo dataset. (a) Distribution of teaching points across physics concepts, (b) Word cloud of frequent prompt terms, (c) Distribution of prompt lengths.",
              "Comparison of SA (Semantic Adherence) and PC (Physics Commonsense) scores assigned by the VideoPhy, Automatic Evaluator (PhyEduVideo) and humans. Detailed videos are provided in Supplementary.",
              "Qualitative comparisons of generated videos across six classical physics categories—Mechanics, Waves & Oscillations, Fluids, Thermodynamics, Electromagnetism, and Optics—for five T2V models: VideoCrafter2, CogVideoX, Wan2.1, Video-MSG, and PhyT2V. Detailed videos are provided in Supplementary."
            ]}
          />
        </div>
      </section>

      {/* Results Table */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="bg-[#f2f2f2] rounded-3xl shadow-md p-10">
          <h4 className="text-4xl font-semibold mb-6 text-center">Results</h4>
          <PhysicsModelTable />
        </div>
      </section>

      {/* BibTeX Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10 text-center">BibTeX</h2>

        <div className="relative bg-white border border-gray-300 rounded-2xl shadow-md p-6 md:p-8">

          {/* Copy Button */}
          <button
            onClick={copyToClipboard}
            className="absolute top-4 right-4 !bg-blue-700 !text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-2 shadow-md transition-colors duration-200 hover:!bg-back-700"
          >
            <Clipboard size={16} />
            {copied ? "Copied!" : "Copy"}
          </button>




          {/* Code Box */}
          <pre className="text-sm md:text-base text-gray-800 whitespace-pre-wrap leading-relaxed pl-4"
              style={{ fontFamily: `"Times New Roman", Georgia, Cambria, serif` }}>
            {bibtex}
          </pre>
        </div>
      </section>

      {/* Acknowledgements Section */}
      <section className="max-w-4xl mx-auto px-6 pt-4 pb-24">
        <h2 className="text-4xl font-bold mb-8 text-center">Acknowledgements</h2>

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
