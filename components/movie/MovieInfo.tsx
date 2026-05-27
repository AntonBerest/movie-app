export default function MovieInfo() {
  return (
    <div className="px-16 py-8 grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <div className="bg-[#1A1A1A] text-white px-4 py-2 rounded-lg disabled:opacity-30">
          <p className="text-zinc-400">Description</p>
          <p className="text-white mt-2">
            The adventures of a group of explorers who make use of a newly
            discovered wormhole to surpass the limitations on human space travel
            and conquer the vast distances involved in an interstellar voyage.
          </p>
        </div>
        <div className="bg-[#1A1A1A] text-white px-4 py-2 rounded-lg disabled:opacity-30 mt-5">
          <div className="flex justify-between items-center mt-2">
            <p className="text-zinc-400">Cast</p>
            <div className="flex items-center gap-2">
              <button className="bg-[#141414] hover:bg-zinc-700 px-2 md:px-4 py-4 rounded-full border border-zinc-800">
                <img src="/arrow-left.svg" className="w-5 h-5" />
              </button>
              <button className="bg-[#141414] hover:bg-zinc-700 px-2 md:px-4 py-4 rounded-full border border-zinc-800">
                <img src="/arrow-right.svg" className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-2 mt-4">
            <img
              src={
                'https://media.themoviedb.org/t/p/w138_and_h175_face/lCySuYjhXix3FzQdS4oceDDrXKI.jpg'
              }
              alt="poster"
              className="rounded-xl"
            />
            <img
              src={
                'https://media.themoviedb.org/t/p/w138_and_h175_face/s6tflSD20MGz04ZR2R1lZvhmC4Y.jpg'
              }
              alt="poster"
              className="rounded-xl"
            />
            <img
              src={
                'https://media.themoviedb.org/t/p/w138_and_h175_face/bVZRMlpjTAO2pJK6v90buFgVbSW.jpg'
              }
              alt="poster"
              className="rounded-xl"
            />
            <img
              src={
                'https://media.themoviedb.org/t/p/w138_and_h175_face/lodMzLKSdrPcBry6TdoDsMN3Vge.jpg'
              }
              alt="poster"
              className="rounded-xl"
            />
            <img
              src={
                'https://media.themoviedb.org/t/p/w138_and_h175_face/304ilSygaCRWykoBWAL67TOw8g9.jpg'
              }
              alt="poster"
              className="rounded-xl"
            />
            <img
              src={
                'https://media.themoviedb.org/t/p/w138_and_h175_face/voD93lzFZrr9xfAggwFcPRBi84i.jpg'
              }
              alt="poster"
              className="rounded-xl"
            />
            <img
              src={
                'https://media.themoviedb.org/t/p/w138_and_h175_face/oJQxl4DG0KSCtOGrpWNhYz9gUZA.jpg'
              }
              alt="poster"
              className="rounded-xl"
            />
            <img
              src={
                'https://media.themoviedb.org/t/p/w138_and_h175_face/gW9BdiA9eooBWa5bzHWkV7rbTa8.jpg'
              }
              alt="poster"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="bg-[#1A1A1A] text-white px-4 py-2 rounded-lg disabled:opacity-30 mt-5 ">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-zinc-400">Reviews</p>
            </div>

            <div className="bg-[#1A1A1A] gap-2 flex items-center rounded-lg">
              <button className="flex items-center gap-2 bg-[#141414] hover:bg-zinc-700 text-white rounded-lg px-1 md:px-4 py-2">
                <img src="/round-plus.svg" className="w-5 h-5" />
                Add your Review
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-[#0F0F0F] rounded-xl">
              <div className="flex justify-between items-center mt-2">
                <h1 className="text-white px-4 py-4">decovision</h1>
                <div className="bg-[#141414] hover:bg-zinc-700 md:px-2 py-2 rounded-full border border-zinc-800 grid grid-cols-6 mr-4 gap-1">
                  <img src="/star-rounded-red.svg" className="w-5 h-5" />
                  <img src="/star-rounded-red.svg" className="w-5 h-5" />
                  <img src="/star-rounded-red.svg" className="w-5 h-5" />
                  <img src="/star-rounded-red.svg" className="w-5 h-5" />
                  <img src="/star-rounded-red.svg" className="w-5 h-5" />
                  <p className="text-sm">5</p>
                </div>
              </div>
              <p className="text-zinc-400 px-4 mb-4">
                People seem to think that if you enjoy a Christopher Nolan
                movie, you are a fanboy and the film couldn`t really be that
                good. That is not true. He has never made a bad movie, Insomnia
                is probably his worst and it is still an excellent movie.
                Interstellar is up there in his top 3, with The Dark Knight
                being number 1 and Inception in number 2. I don`t think he will
                ever make a better movie than The Dark Knight, it is without a
                doubt a masterpiece of cinema in my opinion. It can be enjoyed
                on so many levels. I remember seeing Interstellar in the movie
                theater and being on the edge of my seat the whole time. It was
                breathtaking but the end left me confused so i walked out
                disappointed. Since then i have watched it many times but itz`
                only took a second viewing to realize what a great ending it is
                and here is why. How many people discuss the end, was the
                wormhole open or closed for him to make it to Brand, what
                happens next, is there a sequel. I discuss this with people who
                hate the movie and the debate will still last a good 30 minutes
                if not more without getting heated. It is a wonderful story told
                through the eyes of a genius film maker who deserves more than
                he receives, an oscar would be nice start. I read hat his next
                movie is to be released in July 2017, I can`t wait to find out
                everything about it like i have since he began. If you`re unsure
                about Christopher Nolan, watch his career from the beginning
                starting with Doodlebug.
              </p>
            </div>
            <div className="bg-[#0F0F0F] rounded-xl">
              <div className="flex justify-between items-center mt-2">
                <h1 className="text-white px-4 py-4">Everett G</h1>
                <div className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 grid grid-cols-6 mr-4 gap-1">
                  <img src="/star-rounded-red.svg" className="w-5 h-5" />
                  <img src="/star-rounded-red.svg" className="w-5 h-5" />
                  <img src="/star-rounded-red.svg" className="w-5 h-5" />
                  <img src="/star-rounded-red.svg" className="w-5 h-5" />
                  <img src="/star-rounded-red.svg" className="w-5 h-5" />
                  <p className="text-sm">5</p>
                </div>
              </div>
              <p className="text-zinc-400 px-4 mb-4">
                Even though it`s not my favorite movie Nolan has made,
                Interstellar is still an amazing and masterpiece of cinema. The
                story is very compelling and the visuals are absolutely stunning
                and are some of the best visuals in Nolan`s entire filmography.
                Mathew McConaughey gives what is by far his best performance
                ever. Defiantly way better than the performance he won an Oscar
                for in Dallas Buyers Club the year before. I do have a couple
                slight complaints with this movie. 1 is that the ending where
                Cooper finally reunites with Murph felt very rushed. Second I
                didn`t really like Matt Damon`s character and I didn`t think
                that the film needed a human antagonist. Also I wish that the
                movie was just ten minutes shorter. But other than that
                Interstellar is honestly perfect. It has amazing performances,
                amazing directing, amazing cinematography and an excellent score
                by Hans Zimmer. Plus it also makes me cry witch just makes me
                love it even more. (9.8/10) (A grade)
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 mb-2">
            <button className="bg-[#141414] hover:bg-zinc-700 px-2 md:px-4 py-4 rounded-full border border-zinc-800">
              <img src="/arrow-left.svg" className="w-5 h-5" />
            </button>
            <button className="bg-[#141414] hover:bg-zinc-700 px-2 md:px-4 py-4 rounded-full border border-zinc-800">
              <img src="/arrow-right.svg" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1A1A] text-white px-8 py-8 rounded-lg disabled:opacity-30">
        <div className="flex gap-2">
          <img src="/calendar.svg" className="w-5 h-5" />
          <p className="text-zinc-400">Released Year</p>
        </div>
        <p className="text-white mt-4">2014</p>
        <div className="flex gap-2 mt-8">
          <img src="/translation.svg" className="w-5 h-5" />
          <p className="text-zinc-400">Available Languages</p>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            English
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Ukrainian
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            French
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Spanish
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Polish
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            German
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Italian
          </button>
        </div>
        <div className="flex gap-2 mt-8">
          <img src="/star-outline-rounded.svg" className="w-7 h-7" />
          <p className="text-zinc-400">Ratings</p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-xl border border-zinc-800">
            <p className="text-white">IMDb</p>
            <div className="grid grid-cols-6 gap-1">
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <p className="text-sm">5</p>
            </div>
          </div>
          <div className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-xl border border-zinc-800">
            <p className="text-white">Streamvibe</p>
            <div className="grid grid-cols-6 gap-1">
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <p className="text-sm">5</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-8">
          <img src="/genres.svg" className="w-5 h-5" />
          <p className="text-zinc-400">Genres</p>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Adventure
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Drama
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Science Fiction
          </button>
        </div>
        <p className="text-zinc-400 mt-8">Director</p>
        <div className="bg-[#141414] hover:bg-zinc-700 px-4 py-4 w-80 rounded-xl border border-zinc-800 flex gap-4 mt-4">
          <div>
            <img
              src={
                'https://media.themoviedb.org/t/p/w300_and_h450_face/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg'
              }
              alt="poster"
              className="rounded-xl w-20 h-25"
            />
          </div>
          <div className="col-span-2">
            <p className="text-white text-xl mt-4">Christofer Nolan</p>
            <p className="text-zinc-400 mt-4">from England</p>
          </div>
        </div>
        <p className="text-zinc-400 mt-8">Writer</p>
        <div className="bg-[#141414] hover:bg-zinc-700 px-4 py-4 w-80 rounded-xl border border-zinc-800 flex gap-4 mt-4">
          <div>
            <img
              src={
                'https://media.themoviedb.org/t/p/w300_and_h450_face/qgTOwfg2B4C0ZFGAP4EnRZ7domo.jpg'
              }
              alt="poster"
              className="rounded-xl w-20 h-25"
            />
          </div>
          <div className="col-span-2">
            <p className="text-white text-xl mt-4">Jonathan Nolan</p>
            <p className="text-zinc-400 mt-4">from England</p>
          </div>
        </div>
      </div>
    </div>
  )
}
