import eqThumb from "../assets/projects/eq.png?w=1000&format=webp"
import clipThumb from "../assets/projects/clip.png?w=1000&format=webp"
import cr02Thumb from "../assets/projects/cr02.png?w=1000&format=webp"
import chopperThumb from "../assets/projects/chopper.png?w=1000&format=webp"
import cleanrecThumb from "../assets/projects/cleanrec.png?w=1000&format=webp"

export const projects = [
        {
          slug: "mixbusmaster",
          title: "MixBusMaster: Learning EQ Plugin",
          video: "https://www.loom.com/embed/d9443a8b08584f2babe589a8aa9ed656",
          thumbnail: eqThumb,
          paragraphs: [
            "A 6 band EQ (AU/VST3) with a tilt filter, per band dynamics, and a two track spectrum analyzer. Its Learn mode listens to your track and a reference on the sidechain, then dials in the band settings that move your sound toward the reference.",
            "Every band is a trapezoidal state variable filter with smoothed, gliding coefficients, so sweeps and automation stay click free. Any band can go dynamic: a band limited detector, keyed from the main input or the sidechain, feeds a soft knee gain computer that adds boost or cut only when that part of the spectrum gets loud.",
            "Learn averages the long term power spectra of both tracks, smooths them on an ERB scale that follows the ear's critical bands, and builds the target curve between them. A small neural network I trained in PyTorch on synthetic EQ curves predicts all six bands from that curve, and a Levenberg-Marquardt solver refines the result to fit the target exactly. The network runs in hand written C++ with no ML runtime, and Amount and Smooth controls re-run the match live.",
            "Built in C++20 with JUCE 8. Analysis and inference run on their own threads, so the audio thread never locks or allocates, and a test suite covers everything from filter accuracy to an end to end Learn pipeline that recovers a random EQ from pink noise."
          ]
        },
        {
          slug: "cleanrec",
          title: "CleanRec: Room Tone Denoiser Plugin",
          video: "https://www.loom.com/embed/63923a82bcfb4812bc6509c9fbdef4b9",
          thumbnail: cleanrecThumb,
          paragraphs: [
            "A denoiser (AU/VST3) that removes steady room tones like fans, hum, and preamp hiss while leaving audio intact. Press Learn over a few seconds of room tone to capture a noise profile, or switch on Adaptive to track the noise continuously with no Learn step. Hum removal notches out 50 or 60 Hz mains and their harmonics, with an Auto mode that detects which one while learning.",
            "Audio runs through a streaming STFT with 75% overlap and a fixed one frame latency (about 43 ms at 48 kHz) reported to the host. Each bin's gain comes from an OM-LSA rule, a log spectral amplitude estimator weighted by speech presence probability. Adaptive mode tracks the noise floor with MCRA, and the gain mask is smoothed on an ERB scale with attack and release to remove musical noise artifacts.",
            "The DSP engine is plain C++20 with no JUCE dependency, shared by the plugin and an offline CLI. The audio thread never allocates or locks, and null tests verify the output to below -120 dBFS at any block size. A Python evaluation suite scores it with SI-SDR, PESQ, STOI, and DNSMOS against RNNoise and DeepFilterNet3. On stationary noise it comes close to DeepFilterNet3 while using a fraction of the CPU.",
            "My apologies for the voice overlay artifacts towards the end there. Hope you enjoy the demo!"
          ]
        },
        {
          slug: "cr-02",
          title: "CR-02: Creative IR Convolution Plugin",
          video: "https://www.loom.com/embed/e48e8fe26f68457fa41ff63c34188500",
          thumbnail: cr02Thumb,
          paragraphs: [
            "An impulse response convolution plugin (AU/VST3) for reverbs and cabinet sims that also treats the IR as something to play with. Load any IR or pick from 46 built in ones, then reverse, stretch, chop, and degrade it to get textures that regular effects on the audio can't.",
            "CHOP slices the IR into stutters, reverses, drops, and swaps, with seeded patterns that recall with the session and an optional BPM synced grid. AGE, SATURATE, WOBBLE, DOWNSAMPLE, and CRUSH degrade the IR itself. Every change rebuilds the IR off the audio thread with automatic loudness matching, so tweaking never causes level jumps."
          ]
        },
        {
          slug: "clip",
          title: "CLIP: Clipper Plugin",
          video: "https://www.loom.com/embed/c59c9b0de799436fa1f1c3f1953a0ecf",
          thumbnail: clipThumb,
          paragraphs: [
            "A hard/soft clipper (AU/VST3) with six transfer curves (Hard, Soft, Linear, Tanh, Sine, Cubic), adjustable knee, and a Detail control that keeps high end riding on clipped peaks. A live transfer curve and peak history display show exactly what is being clipped.",
            "Aliasing is kept down with antiderivative antialiasing (ADAA) plus up to 16x linear phase oversampling, with Thiran allpass alignment so the dry/wet mix stays sample accurate. The DSP is header only and unit tested, and CI runs pluginval at strictness 10 on every push."
          ]
        },
        {
          slug: "chopper",
          title: "CHOPPER: Sample Chopping Web App",
          video: "https://samplechopper-umber.vercel.app",
          link: "https://samplechopper-umber.vercel.app",
          preview: chopperThumb,
          paragraphs: [
            "A web app that turns full songs into ready to use loops. Upload audio, choose a bar length, and CHOPPER detects tempo and onsets, cuts bar accurate loops, and returns them as a zip.",
            "The Python backend (FastAPI, librosa) estimates local BPM per loop and can snap loop boundaries to kicks and snares using band limited spectral flux. Jobs run in a rate limited queue on Render, with Supabase handling anonymous auth, job tracking, and storage. The React/TypeScript frontend features a custom 3D waveform renderer."
          ]
        },
        {
          slug: "synthesizer",
          title:"Synthesizer Plugin",
          video: "https://www.youtube.com/embed/h5dY_hA8ZRw?si=jWCmTPnqDzYbA6Bx",
          thumbnail: "https://img.youtube.com/vi/h5dY_hA8ZRw/hqdefault.jpg",
          paragraphs: [
            "This is a simple synthesizer VST/AU equipped with ADSR sliders, the usual oscillator and filter types, as well as frequency and filter modulation.",
            "The video features a quick improvisation to demo some sounds of the synth. I also took the liberty of automating the synths' filter frequency and some panning!"
          ]
        },
        {
          slug: "spectrogram-visualizer",
          title: "3D Spectrogram Visualizer",
          video: "https://www.youtube.com/embed/WbGTJbrw83U?si=xbWaqE9aO7AsLnuJ",
          thumbnail: "https://img.youtube.com/vi/WbGTJbrw83U/hqdefault.jpg",
          paragraphs: [
            "Created using Python (pydub for audio data, mpl_toolkits for modeling). The demo features an unmastered song of mine."
          ]
        },
        {
          slug: "denoising-dnn",
          title: "Denoising DNN for Acoustic Guitar",
          video: "https://player.vimeo.com/video/1058779211?h=8370fcaaaa",
          paragraphs: [
            "I have developed and trained a neural network aimed to remove background and string noise from acoustic guitar recordings.",
            "Its architecture consists of a convolution layer for feature extraction, BiLSTM for sequential modeling, and an attention layer.",
            "It is trained on pairs of noisy and clean STFT data from recordings: This process was very involved with my limited computational resources and access to data: I mixed in string noise post recording to construct 100 noisy recordings and performed additional data augmentation with various impulse responses and background noise. While there is some success with this model, this should be done again with a unique dataset that is magnitudes larger to increase generalizability of the DNN."
          ]
        },
        {
          slug: "sampler",
          title:"Sampler",
          video: "https://www.youtube.com/embed/YqVmvuLJy_k?si=WfnKxLKGuKfM3oRO",
          thumbnail: "https://img.youtube.com/vi/YqVmvuLJy_k/hqdefault.jpg",
          paragraphs: [
            "Straightforward stereo-supported plugin to play audio samples as an instrument, includes ADSR capabilities as well."
          ]
        }

      ]
