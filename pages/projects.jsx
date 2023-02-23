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
            <h1 className="font-bold text-2xl">Larry Stickmen</h1>
            <p className="text-lg max-w-xl">
              A keynote game <i>heavily inspired</i> by Henry Stickmin. Spanning 400+
              slides, it took me in the range of 69-420 hours. A spent a good amount of time
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
            <h1 className="font-bold text-2xl">The Bicycle Time Machine</h1>
            <p className="text-lg max-w-xl">
              I invented this time machine on the way back home on an ancient bicycle that
              dates back to Ancient Egypt 20 years ago when I had a 69,000$ debt. When I saw the bicycle,
              it was broken, but immediately got repaired and looks brand new upon touching it. The time machine uses
              quantum physics and many advanced concepts that definitely I used.
              The concepts are so, <strong>so</strong>, advanced that even I can&apos;t
              understand. The time machine is named &quot;The Bicycle Time Machine&quot; as a tribute to the bicycle that this thing was 
              invented on, and the concepts used in the making of this time machine are now commonly called &quot;Bicycle Physics&quot;.
              Both the bicycle and the time machine are now preserved in a museum for enternity.
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
