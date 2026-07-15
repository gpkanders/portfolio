export default function Music() {
    const videos = [
      { title: "dirty lens", embed: "https://www.youtube.com/embed/jN_3_a7zLeA?si=Cl-9zad34xzhrQH4" },
      { title: "can I be here, in this moment?", embed: "https://www.youtube.com/embed/A_hj70AwbRs?si=uOMPFxOkiLcDfZbY" },
      { title: "searching..!", embed: "https://www.youtube.com/embed/Ne_kf3knoZ8?si=YO0Iwf76fAemzj1D" },
      { title: "pedalkeys // a dream", embed: "https://www.youtube.com/embed/EdJvXj6672c?si=zsMTAnJsJMDsP_A5" },
    ];
  
    const leftColumn = videos.filter((_, i) => i % 2 === 0);
    const rightColumn = videos.filter((_, i) => i % 2 === 1);
  
    return (
      <div className="flex flex-col items-center gap-16 py-25 px-4 md:px-12 py-12">
        <div className="flex flex-col gap-4">
          <a href="https://open.spotify.com/album/051lGvjmYLDpaHcKv07VZn?si=4a60d7d94f464d24" target="_blank" rel="noopener noreferrer" className="border border-lime-500 text-lime-300 text-xs tracking-widest uppercase px-6 py-2 text-center hover:bg-lime-300 hover:text-black transition-colors">
            — Spotify —
          </a>
          <a href="https://music.apple.com/us/album/mooses-meadow-ep/1848186692" target="_blank" rel="noopener noreferrer" className="border border-blue-500 text-blue-300 text-xs tracking-widest uppercase px-6 py-2 text-center hover:bg-blue-300 hover:text-black transition-colors">
            — Apple Music —
          </a>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 w-full max-w-5xl">
          <div className="flex flex-col gap-16">
            {leftColumn.map((video) => (
              <div key={video.title} className="aspect-video w-full">
                <iframe src={video.embed} 
                loading="lazy"
                width="200"
                height="100"
                title={video.title} className="w-full h-full rounded-lg" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
              </div>
            ))}
          </div>
  
          <div className="flex flex-col gap-16 md:mt-32">
            {rightColumn.map((video) => (
              <div key={video.title} className="aspect-video w-full">
                <iframe src={video.embed} 
                loading="lazy"
                width="200"
                title={video.title} className="w-full h-full rounded-lg" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }