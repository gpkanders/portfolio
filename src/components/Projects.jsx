export default function Projects() {
    const projects = [
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
          title: "3D Spectrogram Visualizer",
          video: "https://www.youtube.com/embed/H_6G0b67A-0?si=a03QR174ytsFCkRh",
          paragraphs: [
            "Created using Python (pydub for audio data, mpl_toolkits for modeling). The demo features some old music I made."
          ]
        }
      ]

   
    return (
    <div className="flex flex-col gap-24 py-24 px-4 md:px-12 py-12">
        {projects.map((project, i) => (
        <div key={i} className="flex flex-col md:flex-row gap-8 items-start">
            {/* video column */}
            <div className="w-full md:w-1/2 aspect-video">
            <iframe
                src={project.video}
                className="w-full h-full rounded-lg"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            />
            </div>

            {/* text column */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-gray-300">{project.title}</h2>
            {project.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-300 text-base">{p}</p>
            ))}
            </div>
        </div>
        ))}
    </div>
    )
}