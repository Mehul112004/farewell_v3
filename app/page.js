import Image from "next/image";
import "./utilities.css";
import CustomButton from "@/components/CustomButton";
import { TextDecrypt } from "@/components/TextDecrypt";
import GlowingCard from "@/components/GlowingCard";
import Link from "next/link";

const events = [
  {
    title: "",
    event: "Pre-Convocation",
    description: "Gyan Mandir Auditorium"  ,
    time:"3:00 PM",
    Link:"https://docs.google.com/document/d/1O5W2tFW_HpQgN-n3HhTLeL-orS_dhAa4/edit?usp=sharing&ouid=110211639916382437609&rtpof=true&sd=true",
    image: "/convo.webp",
  },
  {
    title: "",
    event: "Dance Performances",
    description: "Football Ground"  ,
    Link:"https://forms.gle/fq5gPZFdJKmB94c86",
    time:"4:35 PM",
    image: "/dance.jpg",
  },
  {
    title: "",
    event: "Games",
    description: "Football Ground"  ,
    time:"4:45 PM",
    image: "/games.jpg",
  },
  {
    title: "",
    event: "RampWalk",
    description: "Football Ground"  ,
    time:"5:50 PM",
    Link:"https://drive.google.com/drive/folders/1tE2M52Ez0l5AWEZP3mP8WhBe5E3NyRDd?usp=sharing",
    image: "/ramp.jpg",
  },
  {
    title: "",
    event: "Seeing Off With Honour",
    description: "Football Ground"  ,
    Link:"https://forms.gle/JaVhkd7EPHjEwRTAA",
    time:"6:20 PM",
    
    image: "/taggiving.jpg",
  },
  {
    title: "",
    event: "DJ Night",
    description: "Football Ground"  ,
    time:"6:30 PM Onwards",
    Link:"https://ditto.tv/wp-content/uploads/2020/03/AdobeStock_166872827-2048x1176.jpeg",
    image: "/dj.jpg",
  },
];

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <div className="bg-container flex flex-col justify-start items-center overflow-hidden sm:gap-10 gap-6 relative">
        <div className=" up-down absolute top-[80vh] sm:top-[85vh] sm:left-[90vw]">
          <a href="#second-page">
            <Image
              src="/scroll.png"
              alt="scroll"
              width={100}
              height={150}
              className=" w-22 h-18 sm:w-24 sm:h-16"
            />
          </a>
        </div>

        <header className="flex justify-between items-start w-screen sm:px-10 px-6 py-6 header">
          <Image
            src={"/R.png"}
            alt="SKIT logo"
            width={100}
            height={60}
            className=" w-20 h-16 sm:w-36 sm:h-32"
          />
          <div className="flex flex-col justify-center items-center sm:gap-8 sm:py-6">
            <h1 className=" sm:text-[3vw] text-lg font-bold text-center text-white font-mono ">
              Swami Keshvanand Institute of Technology,
            </h1>
            <h1 className=" sm:text-[3vw] text-lg font-bold text-center text-white font-mono text-wrap ">
              Management & Gramothon
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
          <TextDecrypt
            text={"Presents"}
            interval={100}
            classNames={"font-brightwall present text-white"}
          />
          {/* <h1 className="font-brightwall colored-text glow">GoodBye Gala’24</h1> */}
          <TextDecrypt
            text={"GoodBye Gala’24"}
            interval={50}
            classNames={"font-brightwall colored-text glow"}
          />
        </div>

        {/* <div className="flex flex-col justify-center items-center sm:gap-14 gap-10 justify-self-end"> */}
        <CustomButton />

        {/* </div> */}
      </div>
      <div
        className="overflow-hidden flex flex-col justify-center items-center bg-black"
        id="second-page"
      >
        <h1 className=" text-white text-center font-bold font-mono main-heading pt-4">
          Events
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 place-content-center place-items-center sm:gap-10 sm:p-8 gap-5 p-5">
          {events.map((item) => {
            return (
              <GlowingCard
                key={item}
                title={item.title}
                event={item.event}
                description={item.description}
                time={item.time}
                Link={item.Link}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
