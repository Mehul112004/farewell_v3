import Image from "next/image";
import "./utilities.css";
import CustomButton from "@/components/CustomButton";
import Card from "@/components/Card";
import { TextDecrypt } from "@/components/TextDecrypt";

const events = [
  {
    title: "Pre-Convocation",
    description: "Memories made, futures planned",
  },
  {
    title: "RampWalk",
    description: "Strike a pose and own the stage",
  },
  {
    title: "Games",
    description: "Game on! One last hurrah at the Farewell Games Night!",
  },
  {
    title: "Dance",
    description: "Let loose and groove one last time",
  },
  {
    title: "DJ-Night",
    description: "Music, memories, and one last party",
  },
  {
    title: "Exciting Prizes",
    description: "Dance your way to amazing prizes",
  },
  
]

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <div className="bg-container flex flex-col justify-start items-center overflow-hidden sm:gap-20 gap-6">
        <header className="flex justify-between items-start w-screen sm:px-10 px-6 py-6 header">
          <Image
            src={"/R.png"}
            alt="SKIT logo"
            width={100}
            height={60}
            className=" w-20 h-16 sm:w-36 sm:h-32"
          />
          <div className="flex flex-col justify-center items-center sm:gap-8 sm:py-6">
            <h1 className=" sm:text-[3.5vw] text-lg font-bold text-center text-white font-mono text-wrap ">Swami Keshvanand Institute of Technology,
            </h1>
            <h1 className=" sm:text-[3.5vw] text-lg font-bold text-center text-white font-mono text-wrap ">Management & Gramothon
            </h1>
          {/* <TextDecrypt text={'Swami Keshvanand Institute of Technology, Management & Gramothon'} interval={30} classNames={'main-heading font-bold text-center text-white font-mono'}/> */}
          {/* <TextDecrypt text={'Management & Gramothon'} classNames={'main-heading font-bold text-center text-white font-mono'}/> */}
            {/* <h2 className="secondary-heading font-mono font-bold text-white text-center">
              Management & Gramothon
            </h2> */}
          </div>
          <Image
            src={"/swamiji_photo.png"}
            alt="Sawmi ji"
            width={60}
            height={60}
            className="sm:w-28 sm:h-32 mr-4"
          />
        </header>
        <div className="flex flex-col justify-center items-center gap-10">
          {/* <h3 className="font-brightwall present">Presents</h3> */}
          <TextDecrypt text={'Presents'} interval={100} classNames={'font-brightwall present'}/>
          {/* <h1 className="font-brightwall colored-text glow">GoodBye Gala’24</h1> */}
          <TextDecrypt text={'GoodBye Gala’24'} interval={50} classNames={'font-brightwall colored-text glow'}/>
        </div>

        <div className="flex flex-col justify-center items-center sm:gap-14 gap-10 justify-self-end">
          <CustomButton />
          <div className="flex flex-col justify-center items-center gap-2 up-down mt-16 sm:mt-10">
            <Image src="/scroll.png" alt="scroll" width={100} height={150} className=" w-14 h-10 sm:w-24 sm:h-16" />
            <h3 className="font-bold text-lg opacity-60">Scroll down...</h3>{" "}
          </div>
        </div>
      </div>
      <div className="h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
        <h1 className=" text-white text-center font-bold font-mono main-heading pt-4">
          Events
        </h1>
        {/* <div className=" grid grid-cols-3 gap-20 place-items-center h-screen w-4/5">
        {events.map((item)=>{
          return <Card title={item.title} description={item.description} key={item} />
        })}
        </div> */}
      </div>
    </main>
  );
}
