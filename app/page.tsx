
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header></Header>

      <main className="flex mb-12 justify-center min-h-screen relative overflow-hidden bg-basalt  ">
        <div className="container p-8 justify-between  ">
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



          <Image
            src="/screenshot-1.0-hero-combo.png"
            alt="Obisidian for Linux, Mac and Windows"
            width={2928} // Replace with the actual width of your image
            height={1728} // Replace with the actual height of your image
          />
        </div>
      </main>
    </>

  );
}
