
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header></Header>

      <main className="flex mb-12 justify-center min-h-screen relative overflow-hidden bg-basalt  ">
        <div className="container p-10 justify-between  ">
          <div>
            <div className=" text-center sm:text-start">
              <h1 className="text-[4vw] font-semibold leading-[1.1] tracking-tight sm:text-title mb-8"> Sharpen your thinking. </h1>
              <p className=" sm:text-3xl mb-8  max-w-md  sm:mx-0">The free and flexible app for your private thoughts. </p>
            </div>

            <div className="flex py-6 mt-4 items-center gap-6 flex-col sm:flex-row">
              <a href="" className=" bg-violet-700 text-xl py-4 px-6 rounded-xl">Get Obisidian For Linux(AppImage)</a>
              <p className="text-violet-700 text-accent text-lg hidden sm:block font-medium">More plataforms</p>
            </div>
          </div>

          <Image className="mt-12"
            src="/screenshot-1.0-hero-combo.png"
            alt="Obisidian for Linux, Mac and Windows"
            width={2928} // Replace with the actual width of your image
            height={1728} // Replace with the actual height of your image
          />
          <div className="container p-5">

            <div className="max-w-2xl mx-auto lg:mx-0">

              <div>
                <dt className="text-3xl font-semibold">Your thoughts are yours. </dt>
                <p className="text-2xl ">Obsidian stores notes privately on your device, so you can access them quickly, even offline. No one else can read them, not even us.</p>
              </div>

              <div className="border-t border-gray-300">
                <dt className="text-3xl font-semibold"> Your mind is unique. </dt>
                <p className="text-2xl">With thousands of plugins and themes, you can shape Obsidian to fit your way of thinking.</p>
              </div>

              <div className="border-t border-gray-300 ">
                <dt className="text-3xl font-semibold "> Your knowledge should last.  </dt>
                <p className="text-2xl">Obsidian uses open file formats, so you're never locked in. You own your data for the long term.</p>
              </div>

            </div>
            <div className="lg:mx-auto max-w-2xl mb-30">
              <div className="flex flex-col justify-center mt-32">
                <h2 className="text-6xl mt-10"><strong>Spark ideas.</strong></h2>
                <div className="flex flex-row">
                  <p>From personal notes to journaling, knowledge bases, and project management, Obsidian gives you the tools to come up with ideas and organize them.</p>
                </div>
              </div>


            </div>

          </div>
        </div>
      </main>
    </>

  );
}
