import Template from "../components/Template"
import Image from "next/image"

export default function Home() {
  return (
    <Template>
      <main className="mt-20 mb-9 flex-col flex gap-4">
        <article>
          <div className="img-wrapper">
            <div className="img bg-[url('/larry.png')] w-[200px] h-[200px]"></div>
          </div>
          <div>
            <div className="bg-black text-white grid place-content-center w-14 h-14 mb-2 text-xl font-bold rounded-[100%] ">
              1
            </div>
            <h1 className="font-bold text-2xl">Larry Stickman</h1>
            <p className="text-lg max-w-xl">
              A keynote game *heavily inspired* by Henry Stickmin. Spanning 400+
              slides, it took me about 69 hours. A spent a good amount of time
              on the breathtaking visuals. The sound effects, graphics, and the
              overall experience is first-rate.
            </p>
          </div>
        </article>
        <article>
          <div className="img-wrapper">
            <div className="img bg-[url('/timemachine.jpg')] w-[200px] h-[200px]"></div>
          </div>
          <div>
            <div className="bg-black text-white grid place-content-center w-14 h-14 mb-2 text-xl font-bold rounded-[100%]">
              2
            </div>
            <h1 className="font-bold text-2xl">Time Machine</h1>
            <p className="text-lg max-w-xl">
              I invented this time machine on the way back home on a 420
              year-old bycicle 20 years ago when I had a 69,000$ debt. It uses
              quantum physics and many advanced concepts that definitely I used.
              So, <strong>so</strong>, advanced that even I can&apos;t
              understand.
            </p>
          </div>
        </article>
        <article>
          <div className="img-wrapper">
            <div className="img bg-[url('/keynote.png')] w-[200px] h-[200px]"></div>
          </div>
          <div>
            <div className="bg-black text-white grid place-content-center w-14 h-14 mb-2 text-xl font-bold rounded-[100%]">
              3
            </div>
            <h1 className="font-bold text-2xl"></h1>
            <p className="text-lg max-w-xl">
              Since I use Keynote a lot, it has probably come to light that it
              was my very own invention. I pitched the concept Steve Jobs
              telepathically around 3 years before I was even born. Steve Jobs
              liked it so much he accepted it 20 minutes before I even told him.
              I am that powerful.
            </p>
          </div>
        </article>
      </main>
    </Template>
  )
}
