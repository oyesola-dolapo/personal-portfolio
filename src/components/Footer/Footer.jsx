export default function Footer() {
  const navs = [
    {
      text: "Home",
      link: "#Home",
    },
    {
      text: "My projects",
      link: "#Portfolio",
    },
    {
      text: "About me",
      link: "#About",
    },
    {
      text: "Contact me",
      link: "#Contact",
    },
  ];

  const socials = [
    {
      icon: <i class="fa-brands fa-x-twitter"></i>,
      link: "https://twitter.com/ferraziii",
    },
    {
      icon: <i class="fa-brands fa-facebook-f"></i>,
      link: "https://www.linkedin.com/in/oyesola-dolapo-778642173/",
    },
    {
      icon: <i class="fa-brands fa-instagram"></i>,
      link: "https://github.com/oyesola-dolapo",
    },
    {
      icon: <i class="fa-brands fa-whatsapp"></i>,
      link: "https://www.behance.net/dolapooyesola",
    },
  ];
  return (
    <footer className="flex justify-between px-32 py-8">
      <h1 className="logo tracking-wider text-xl">
        Ferrazi<i className="fa-solid fa-circle text-[6px] text-myColor"></i>
      </h1>
      <div className="flex text-sm opacity-[.7] lg:mr-24">
        <div className="flex flex-col gap-[1rem] px-[4rem] pb-[3rem]">
          <p>Software Developer</p>
          <p>Ui Designer</p>
        </div>
        <ul className="flex flex-col gap-[1rem] px-[4rem] pb-[3rem] border-x-2 border-solid">
          {navs.map((nav) => {
            return (
              <li key={nav.text}>
                <a href={nav.link}>{nav.text}</a>
              </li>
            );
          })}
        </ul>
        <div className="px-[4rem] pb-[3rem]">
          <p className="mb-4">Social media Handles</p>
          <ul className="flex gap-[1rem] ">
            {socials.map((social) => {
              return (
                <li>
                  <a href={social.link} target="_blank" className="">
                    {social.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
