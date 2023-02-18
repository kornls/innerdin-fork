import Template from "../components/Template"

export default function Home() {
  return (
    <Template>
      <main className="mt-20 mb-9 text-center flex-col flex gap-4">
        <article>
          <div className="bg-black text-white grid place-content-center m-auto w-14 h-14 mb-2 text-xl font-bold rounded-[100%]">
            1
          </div>
          <h1 className="font-bold text-2xl">
            Calm Your Mind, Ease Your Spirit
          </h1>
          <p className="text-lg max-w-xl">
            To calm your mind, you must meditate for 69 minutes, 42 seconds and
            66 milliseconds. It may be <strong>slightly</strong> dificult, but
            it IS possible with a bit of practice.{" "}
            <span className="text-[10px]">right?</span>
          </p>
        </article>
        <div className="w-[2px] h-[100px] bg-black m-auto"></div>
        <article>
          <div className="bg-black text-white grid place-content-center m-auto w-14 h-14 mb-2 text-xl font-bold rounded-[100%]">
            2
          </div>
          <h1 className="font-bold text-2xl">
            Ready Your Soul, Brace for Impact
          </h1>
          <p className="text-lg max-w-xl">
            At this stage you will recieve a high level of enlightenment. Its so
            high that it inflicts pain that feels like giving birth. Good luck,
            soldier.
          </p>
        </article>
        <div className="w-[2px] h-[100px] bg-black m-auto"></div>
        <article>
          <div className="bg-black text-white grid place-content-center m-auto w-14 h-14 mb-2 text-xl font-bold rounded-[100%]">
            3
          </div>
          <h1 className="font-bold text-2xl">
            Heal Your Body, Write Your Will
          </h1>
          <p className="text-lg max-w-xl">
            After you have experienced the excruciating amount of pain, please
            breath in and out slowly to help mitigate the pain (slightly). Oh
            and also write your will in case you die :) Oh, but dont stop now!
            You came too far to stop. You will have to continue doing this your
            entire life until the day you die. Have fun!
          </p>
        </article>
        <div className="w-[2px] h-[100px] bg-black m-auto"></div>
        <article>
          <div className="bg-black text-white grid place-content-center m-auto w-14 h-14 mb-2 text-xl font-bold rounded-[100%]">
            4
          </div>
          <h1 className="font-bold text-2xl">Now, Pray to God</h1>
          <p className="text-lg max-w-xl">
            After you have experienced the excruciating amount of pain, please
            breath in and out slowly to help mitigate the pain (slightly). Oh
            and also write your will in case you die :) but dont stop now.
          </p>
        </article>
      </main>
    </Template>
  )
}
