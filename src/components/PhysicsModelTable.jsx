import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import PhysicsModelTable from "./PhysicsModelTable"; // your existing table


function VideoModelComparisonTable() {
    const data = [
      {
        domain: "Mechanics",
        models: [
          { name: "VideoCrafter2", SA: 0.75, PC: 0.52, MS: 0.94, TF: 0.92 },
          { name: "Video-MSG", SA: 0.75, PC: 0.53, MS: 0.99, TF: 0.99 },
          { name: "PhyT2V", SA: 0.80, PC: 0.59, MS: 0.98, TF: 0.97 },
          { name: "CogVideoX", SA: 0.85, PC: 0.57, MS: 0.98, TF: 0.97 },
          { name: "Wan2.1", SA: 0.86, PC: 0.66, MS: 0.99, TF: 0.98 },
        ],
      },
      {
        domain: "Waves & Oscillations",
        models: [
          { name: "VideoCrafter2", SA: 0.72, PC: 0.49, MS: 0.92, TF: 0.90 },
          { name: "Video-MSG", SA: 0.69, PC: 0.46, MS: 0.99, TF: 0.99 },
          { name: "PhyT2V", SA: 0.72, PC: 0.59, MS: 0.98, TF: 0.97 },
          { name: "CogVideoX", SA: 0.79, PC: 0.59, MS: 0.98, TF: 0.98 },
          { name: "Wan2.1", SA: 0.87, PC: 0.59, MS: 0.99, TF: 0.98 },
        ],
      },
      {
        domain: "Fluids",
        models: [
          { name: "VideoCrafter2", SA: 0.58, PC: 0.48, MS: 0.89, TF: 0.87 },
          { name: "Video-MSG", SA: 0.67, PC: 0.58, MS: 0.99, TF: 0.99 },
          { name: "PhyT2V", SA: 0.85, PC: 0.63, MS: 0.98, TF: 0.97 },
          { name: "CogVideoX", SA: 0.71, PC: 0.58, MS: 0.98, TF: 0.97 },
          { name: "Wan2.1", SA: 0.90, PC: 0.63, MS: 0.99, TF: 0.98 },
        ],
      },
      {
        domain: "Thermodynamics",
        models: [
          { name: "VideoCrafter2", SA: 0.51, PC: 0.38, MS: 0.89, TF: 0.86 },
          { name: "Video-MSG", SA: 0.71, PC: 0.39, MS: 0.99, TF: 0.99 },
          { name: "PhyT2V", SA: 0.75, PC: 0.49, MS: 0.98, TF: 0.97 },
          { name: "CogVideoX-5b", SA: 0.75, PC: 0.52, MS: 0.98, TF: 0.98 },
          { name: "Wan2.1", SA: 0.93, PC: 0.52, MS: 0.99, TF: 0.98 },
        ],
      },
      {
        domain: "Electromagnetism",
        models: [
          { name: "VideoCrafter2", SA: 0.54, PC: 0.50, MS: 0.89, TF: 0.88 },
          { name: "Video-MSG", SA: 0.60, PC: 0.48, MS: 0.99, TF: 0.99 },
          { name: "PhyT2V", SA: 0.75, PC: 0.62, MS: 0.98, TF: 0.98 },
          { name: "CogVideoX-5b", SA: 0.73, PC: 0.65, MS: 0.98, TF: 0.98 },
          { name: "Wan2.1", SA: 0.65, PC: 0.57, MS: 0.99, TF: 0.98 },
        ],
      },
      {
        domain: "Optics",
        models: [
          { name: "VideoCrafter2", SA: 0.64, PC: 0.62, MS: 0.88, TF: 0.83 },
          { name: "Video-MSG", SA: 0.69, PC: 0.64, MS: 0.99, TF: 0.99 },
          { name: "PhyT2V", SA: 0.80, PC: 0.71, MS: 0.99, TF: 0.98 },
          { name: "CogVideoX-5b", SA: 0.69, PC: 0.60, MS: 0.99, TF: 0.98 },
          { name: "Wan2.1", SA: 0.78, PC: 0.64, MS: 0.99, TF: 0.98 },
        ],
      },
    ];
  
    return (
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#d5e0f2] text-gray-800">
              <th className="border px-3 py-2">Domain</th>
              <th className="border px-3 py-2">Model</th>
              <th className="border px-3 py-2">Semantic Adherence ↑</th>
              <th className="border px-3 py-2">Physics Commonsense ↑</th>
              <th className="border px-3 py-2">Motion Smoothness ↑</th>
              <th className="border px-3 py-2">Temporal Flickering ↑</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ domain, models }) =>
              models.map((model, idx) => (
                <tr key={`${domain}-${model.name}`} className="odd:bg-white even:bg-gray-50">
                  {idx === 0 && (
                    <td rowSpan={models.length} className="border px-3 py-2 font-semibold">
                      {domain}
                    </td>
                  )}
                  <td className="border px-3 py-2">{model.name}</td>
                  <td className="border px-3 py-2 text-center">{model.SA}</td>
                  <td className="border px-3 py-2 text-center">{model.PC}</td>
                  <td className="border px-3 py-2 text-center">{model.MS}</td>
                  <td className="border px-3 py-2 text-center">{model.TF}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
  

function DomainCorrelationTable() {
    return (
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#d5e0f2] text-gray-800">
              <th className="px-3 py-2 border">Metric</th>
              <th colSpan="2" className="px-3 py-2 border">EM</th>
              <th colSpan="2" className="px-3 py-2 border">Mechanics</th>
              <th colSpan="2" className="px-3 py-2 border">Fluids</th>
              <th colSpan="2" className="px-3 py-2 border">Thermo</th>
              <th colSpan="2" className="px-3 py-2 border">Optics</th>
              <th colSpan="2" className="px-3 py-2 border">W & O</th>
            </tr>
          </thead>
  
          <tbody>
            {[
              ["VideoPhy-SA", [0.24, 0.19, 0.31, 0.24, 0.49, 0.40, 0.28, 0.21, 0.45, 0.36, 0.47, 0.37]],
              ["VideoPhy-PC", [-0.01, -0.01, 0.11, 0.09, -0.11, -0.09, -0.05, -0.04, 0.17, 0.14, 0.07, 0.06]],
              ["PhyEduVideo-SA", [0.46, 0.41, 0.48, 0.45, 0.59, 0.51, 0.66, 0.60, 0.45, 0.41, 0.42, 0.39]],
              ["PhyEduVideo-PC", [0.30, 0.27, 0.56, 0.52, 0.35, 0.33, 0.59, 0.55, 0.30, 0.27, 0.57, 0.54]]
            ].map(([metric, values]) => (
              <tr key={metric} className="odd:bg-white even:bg-gray-50">
                <td className="border px-3 py-2 font-semibold">{metric}</td>
                {values.map((v, i) => (
                  <td key={i} className="border px-3 py-2 text-center">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function OverallCorrelationTable() {
    return (
      <div className="overflow-x-auto mt-4">
        <table className="min-w-[300px] border-collapse text-sm">
          <thead>
            <tr className="bg-[#d5e0f2] text-gray-800">
              <th className="px-3 py-2 border">Metric</th>
              <th className="px-3 py-2 border">ρ ↑</th>
              <th className="px-3 py-2 border">τ ↑</th>
            </tr>
          </thead>
  
          <tbody>
            {[
              ["VideoPhy-SA", [0.438, 0.340]],
              ["VideoPhy-PC", [0.008, 0.006]],
              ["PhyEduVideo-SA", [0.509, 0.462]],
              ["PhyEduVideo-PC", [0.392, 0.363]]
            ].map(([metric, vals]) => (
              <tr key={metric} className="odd:bg-white even:bg-gray-50">
                <td className="border px-3 py-2 font-semibold">{metric}</td>
                {vals.map((v, i) => (
                  <td key={i} className="border px-3 py-2 text-center">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function ModelComparisonTable() {
    return (
      <div className="overflow-x-auto mt-4">
        <table className="min-w-[350px] border-collapse text-sm">
          <thead>
            <tr className="bg-[#d5e0f2] text-gray-800">
              <th className="px-3 py-2 border">Model</th>
              <th className="px-3 py-2 border">Semantic Adherence ↑</th>
              <th className="px-3 py-2 border">Physics Commonsense ↑</th>
              <th className="px-3 py-2 border">Motion Smoothness ↑</th>
              <th className="px-3 py-2 border">Temporal Flickeing ↑</th>
            </tr>
          </thead>
  
          <tbody>
            {[
              ["VideoCrafter2", [0.623, 0.497, 0.902, 0.877]],
              ["CogVideoX-5b", [0.754, 0.585, 0.983, 0.977]],
              ["Wan2.1", [0.832, 0.602, 0.987, 0.982]],
              ["Video-MSG", [0.684, 0.515, 0.995, 0.991]],
              ["PhyT2V", [0.778, 0.605, 0.982, 0.974]]
            ].map(([model, values]) => (
              <tr key={model} className="odd:bg-white even:bg-gray-50">
                <td className="border px-3 py-2 font-semibold">{model}</td>
                {values.map((v, i) => (
                  <td key={i} className="border px-3 py-2 text-center">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  

  export default function TableCarousel() {
    const [index, setIndex] = useState(0);
  
    const tables = [
      { title: "Performance comparison across 6 domains.", component: <VideoModelComparisonTable /> },
      { title: "Domain-wise Correlation Table", component: <DomainCorrelationTable /> },
      { title: "Overall Correlation Table", component: <OverallCorrelationTable /> },
      { title: "Model Comparison Table", component: <ModelComparisonTable /> },
    ];
  
    const next = () => setIndex((i) => (i + 1) % tables.length);
    const prev = () => setIndex((i) => (i - 1 + tables.length) % tables.length);
  
    return (
      <div className="w-full flex flex-col items-center gap-4 mt-10">
        {/* Table with arrows on left and right */}
        <div className="flex items-center justify-center w-full gap-4">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            <ChevronLeft size={22} />
          </button>
  
          {/* Table and caption */}
          <div className="flex flex-col items-center max-w-[1000px] w-full">
            <div className="text-base text-gray-800 mb-2 text-center">{tables[index].title}</div>
            <div className="w-full flex justify-center">{tables[index].component}</div>
          </div>
  
          <button
            onClick={next}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            <ChevronRight size={22} />
          </button>
        </div>
  
        {/* Step indicator */}
        <div className="flex gap-2 mt-2">
          {tables.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-gray-700" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      </div>
    );
  }
  