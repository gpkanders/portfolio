export default function Resume() {
    return (
      // outer page
      <div className="flex flex-col items-center bg-slate-950 text-gray-300 px-4 py-16 md:py-24">
        <div className="flex flex-col gap-12 w-full max-w-3xl">
  
          {/*header */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-white">George P. K. Anders</h1>
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
              <span>georgeanders.com</span>
              <span>(510) 325-0025</span>
              <span>gpkanders@gmail.com</span>
            </div>
          </div>
  
          {/* education */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide border-b border-gray-700 pb-1">
              Education
            </h2>
  
            <div className="flex flex-col gap-1">
              {/* row: school name on left, location on right */}
              <div className="flex flex-row justify-between">
                <span className="font-semibold text-white">University of California, Los Angeles</span>
                <span className="text-sm text-gray-400">Los Angeles, CA</span>
              </div>
              {/* row: degree on left, nothing on right (for consistency) */}
              <div className="flex flex-row justify-between">
                <span className="italic text-gray-300">Mathematics of Computation, B.Sc.</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Relevant Coursework: Machine Learning, Data Science, Python with Applications,
                Programming in C++ (I–III), Algorithms, Applied Numerical Methods, Computational Theory
              </p>
            </div>
          </div>
  
          {/* technical skills */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide border-b border-gray-700 pb-1">
              Technical Skills
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <span className="font-semibold text-white shrink-0">Languages & Tools:</span>
                <span className="text-gray-300">C++, Shell Scripting, Python, SQL, React, ArcGIS Pro, CMake</span>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold text-white shrink-0">Libraries & Frameworks:</span>
                <span className="text-gray-300">PyTorch, scikit-learn, Pandas, FastAPI, NumPy, JUCE, n8n</span>
              </div>
            </div>
          </div>
  
          {/* work experience */}
          <div className="flex flex-col gap-8">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide border-b border-gray-700 pb-1">
              Work Experience
            </h2>
  
            {/* job blocks */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between flex-wrap">
                <span className="font-semibold text-white">Personal AI — Platform Engineer, AI Architect</span>
                <span className="text-sm text-gray-400">Aug 2025 – May 2026</span>
              </div>
              <span className="text-sm text-gray-400">San Francisco, CA</span>
              <ul className="flex flex-col gap-1 mt-1 list-disc list-inside text-gray-300 text-sm">
                <li>Designed and shipped backend integrations and automated workflows for 15+ client use cases.</li>
                <li>Built FastAPI pipelines to ingest and transform heterogeneous data for downstream retrieval systems.</li>
                <li>Architected automated workflow orchestration using n8n to replace manual processes.</li>
              </ul>
            </div>
  
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between flex-wrap">
                <span className="font-semibold text-white">UFZ Helmholtz Centre — Research Intern</span>
                <span className="text-sm text-gray-400">Jun–Aug 2022, Jun–Aug 2023</span>
              </div>
              <span className="text-sm text-gray-400">Leipzig, Germany</span>
              <ul className="flex flex-col gap-1 mt-1 list-disc list-inside text-gray-300 text-sm">
                <li>Designed a data analysis pipeline correlating air/soil temperature extremes with surface heat fluxes.</li>
                <li>Performed QA checks and automated data pulls across repeated test runs.</li>
                <li>Built and tuned a Random Forest model for predicting latent heat flux; evaluated accuracy using eddy covariance measurements and integrated HOLAPS satellite data, enabling further research for the Remote Sensing Team’s research in land-atmosphere interactions</li>
              </ul>
            </div>
  
          </div>
  
          {/* audio programming */}
          <div className="flex flex-col gap-8">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide border-b border-gray-700 pb-1">
              Audio Programming
            </h2>
  
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white">Denoising DNN for Acoustic Guitar</span>
              <ul className="flex flex-col gap-1 list-disc list-inside text-gray-300 text-sm">
                <li>Developed and trained neural network aimed to remove background and string noise from acoustic guitar recordings; automated preprocessing and testing pipelines for model evaluation.</li>
                <li>Trained on pairs of noisy and clean STFT data from manually created and augmented recordings. Architecture consists of a convolution layer for feature extraction, BiLSTM for sequential modeling, and an attention layer.</li>
              </ul>
            </div>
  
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white">Synthesizer, Sampler, and Convolution Reverb VST/AUs</span>
              <ul className="flex flex-col gap-1 list-disc list-inside text-gray-300 text-sm">
                <li>Developed cross-platform audio plugins in C++ using the JUCE framework.</li>
                <li>Managed plugin integration with host DAWs, debugging system-level interactions.</li>
              </ul>
            </div>
          </div>
  
        </div>
      </div>
    )
  }