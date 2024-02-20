import styles from "./services.module.css";

export default function Services() {
  const cards = [
    {
      index: "01",
      icon: <i class="fa-solid fa-code"></i>,
      title: "Software Development",
      writeUp: `I specialize in building robust and scalable
       software solutions tailored to meet diverse user
        needs and business requirements.`,
      bg: "bg-myColor",
      text: "text-black",
    },
    {
      index: "02",
      icon: <i class="fa-solid fa-palette"></i>,
      title: "Ui Design",
      writeUp: `With a keen eye for detail and a focus
       on user-centric design principles, I create
        visually stunning interfaces that enhance user
         experience and engagement.`,
    },
  ];
  return (
    <div className="py-6 bg-[#131313]">
      <p className="text-center opacity-[.5] text-sm">SERVICES</p>
      <h1 className="text-center text-2xl">
        What&nbsp;<span className="text-myColor">I do</span>
      </h1>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 mt-6 justify-center px-8">
        {cards.map((card) => {
          return (
            <div
              key={card.index}
              className={`${card.bg} ${card.text} relative sm:w-[25rem] border-2 border-solid border-myColor rounded-xl py-10 px-4`}>
              <h1 className="absolute right-[2rem] top-[1rem] text-4xl font-medium opacity-[.3]">
                {card.index}
              </h1>
              <div className="text-2xl mb-4">{card.icon}</div>
              <h1 className="text-xl mb-4">{card.title}</h1>
              <div className="bg-white w-[5rem] h-[2px] rounded-full mb-2 opacity"></div>
              <p>{card.writeUp}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
