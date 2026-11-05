import { useState } from "react"
import eqThumb from "../assets/projects/eq.png?w=1000&format=webp"
import clipThumb from "../assets/projects/clip.png?w=1000&format=webp"
import cr02Thumb from "../assets/projects/cr02.png?w=1000&format=webp"

export default function Projects() {
    const projects = [
        {
          title: "MixBusMaster: Learning EQ Plugin",
          video: "https://www.loom.com/embed/d9443a8b08584f2babe589a8aa9ed656",
          thumbnail: eqThumb,
          paragraphs: [
            "A 6 band EQ (AU/VST3) with a tilt filter, per band dynamics, and a two track spectrum analyzer. Its Learn mode listens to your track and a reference on the sidechain, then dials in the band settings that move your sound toward the reference.",
            "Learn runs a small neural network I trained in PyTorch, inferenced with hand written C++ and no ML runtime, then refined with a Levenberg-Marquardt solver. Amount and Smooth controls re-run the match live. Built in C++20 with JUCE 8, with tests that assert the audio thread never allocates."
          ]
        },
        {
          title: "CLIP: Clipper Plugin",
          video: "https://www.loom.com/embed/e48e8fe26f68457fa41ff63c34188500",
          thumbnail: clipThumb,
          paragraphs: [
            "A hard/soft clipper (AU/VST3) with six transfer curves (Hard, Soft, Linear, Tanh, Sine, Cubic), adjustable knee, and a Detail control that keeps high end riding on clipped peaks. A live transfer curve and peak history display show exactly what is being clipped.",
            "Aliasing is kept down with antiderivative antialiasing (ADAA) plus up to 16x linear phase oversampling, with Thiran allpass alignment so the dry/wet mix stays sample accurate. The DSP is header only and unit tested, and CI runs pluginval at strictness 10 on every push."
          ]
        },
        {
          title: "CR-02: Creative IR Convolution Plugin",
          video: "https://www.loom.com/embed/c59c9b0de799436fa1f1c3f1953a0ecf",
          thumbnail: cr02Thumb,
          paragraphs: [
            "An impulse response convolution plugin (AU/VST3) for reverbs and cabinet sims that also treats the IR as something to play with. Load any IR or pick from 46 built in ones, then reverse, stretch, chop, and degrade it to get textures that regular effects on the audio can't.",
            "CHOP slices the IR into stutters, reverses, drops, and swaps, with seeded patterns that recall with the session and an optional BPM synced grid. AGE, SATURATE, WOBBLE, DOWNSAMPLE, and CRUSH degrade the IR itself. Every change rebuilds the IR off the audio thread with automatic loudness matching, so tweaking never causes level jumps."
          ]
        },
        {
          title: "CHOPPER: Sample Chopping Web App",
          video: "https://samplechopper-umber.vercel.app",
          link: "https://samplechopper-umber.vercel.app",
          paragraphs: [
            "A web app that turns full songs into ready to use loops. Upload audio, choose a bar length, and CHOPPER detects tempo and onsets, cuts bar accurate loops, and returns them as a zip.",
            "The Python backend (FastAPI, librosa) estimates local BPM per loop and can snap loop boundaries to kicks and snares using band limited spectral flux. Jobs run in a rate limited queue on Render, with Supabase handling anonymous auth, job tracking, and storage. The React/TypeScript frontend features a custom 3D waveform renderer."
          ]
        },
        {
          title:"Synthesizer Plugin",
          video: "https://www.youtube.com/embed/h5dY_hA8ZRw?si=jWCmTPnqDzYbA6Bx",
          paragraphs: [
            "This is a simple synthesizer VST/AU equipped with ADSR sliders, the usual oscillator and filter types, as well as frequency and filter modulation.",
            "The video features a quick improvisation to demo some sounds of the synth. I also took the liberty of automating the synths' filter frequency and some panning!"
          ]
        },
        {
          title: "3D Spectrogram Visualizer",
          video: "https://www.youtube.com/embed/WbGTJbrw83U?si=xbWaqE9aO7AsLnuJ",
          paragraphs: [
            "Created using Python (pydub for audio data, mpl_toolkits for modeling). The demo features an unmastered song of mine."
          ]
        },
        {
          title: "Denoising DNN for Acoustic Guitar",
          video: "https://player.vimeo.com/video/1058779211?h=8370fcaaaa",
          paragraphs: [
            "I have developed and trained a neural network aimed to remove background and string noise from acoustic guitar recordings.",
            "Its architecture consists of a convolution layer for feature extraction, BiLSTM for sequential modeling, and an attention layer.",
            "It is trained on pairs of noisy and clean STFT data from recordings: This process was very involved with my limited computational resources and access to data: I mixed in string noise post recording to construct 100 noisy recordings and performed additional data augmentation with various impulse responses and background noise. While there is some success with this model, this should be done again with a unique dataset that is magnitudes larger to increase generalizability of the DNN."
          ]
        },
        {
          title:"Sampler",
          video: "https://www.youtube.com/embed/YqVmvuLJy_k?si=WfnKxLKGuKfM3oRO",
          paragraphs: [
            "Straightforward stereo-supported plugin to play audio samples as an instrument, includes ADSR capabilities as well."
          ]
        }

      ]

   
    return (
    <div className="flex flex-col gap-30 py-24 px-4 md:px-12 py-12">
        {projects.map((project, i) => (
        <div key={i} className="flex flex-col md:flex-row gap-8 items-start">
            {/* video column */}
            <div className="w-full md:w-1/2 aspect-video">
            <ProjectVideo project={project} />
            </div>

            {/* text column */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-gray-300">{project.title}</h2>
            {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 underline hover:text-gray-200">
                Try it live
                </a>
            )}
            {project.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-300 text-base">{p}</p>
            ))}
            </div>
        </div>
        ))}
    </div>
    )
}

function ProjectVideo({ project }) {
    const [playing, setPlaying] = useState(false)

    if (project.thumbnail && !playing) return (
        <button
            onClick={() => setPlaying(true)}
            className="group relative w-full h-full rounded-lg overflow-hidden bg-neutral-900 cursor-pointer"
            aria-label={`Play ${project.title} demo`}
        >
            <img src={project.thumbnail} alt={project.title} loading="lazy" className="w-full h-full object-contain" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center pl-1 text-2xl text-black">&#9654;</span>
            </span>
        </button>
    )

    return (
        <iframe
            src={project.thumbnail ? `${project.video}?autoplay=1` : project.video}
            loading="lazy"
            width="200"
            height="100"
            className="w-full h-full rounded-lg"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
        />
    )
}
