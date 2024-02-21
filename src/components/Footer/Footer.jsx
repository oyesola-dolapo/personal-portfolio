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
      link: "https://web.facebook.com/Ferrazi.lee.5/",
    },
    {
      icon: <i class="fa-brands fa-instagram"></i>,
      link: "https://www.instagram.com/ferrazi.dev/",
    },
    {
      icon: <i class="fa-brands fa-whatsapp"></i>,
      link: "https://wa.me/09067219868",
    },
  ];
  return (
    <footer className="flex flex-col lg:flex-row justify-between px-8 lg:px-32 py-8">
      <h1 className="mb-4 logo tracking-wider text-xl">
        Ferrazi<i className="fa-solid fa-circle text-[6px] text-myColor"></i>
      </h1>
      <div className="flex flex-col lg:flex-row text-sm opacity-[.7] lg:mr-24">
        <div className="flex flex-col gap-[1rem] lg:gap-[1rem] lg:px-[4rem] lg:pb-[3rem]">
          <p>Software Developer</p>
          <p>Ui Designer</p>
        </div>
        <ul className="flex flex-col py-[2rem] gap-[1rem] lg:px-[4rem] lg:pb-[3rem] lg:border-x-2 lg:border-solid">
          {navs.map((nav) => {
            return (
              <li key={nav.text}>
                <a href={nav.link}>{nav.text}</a>
              </li>
            );
          })}
        </ul>
        <div className="lg:px-[4rem]">
          <p className="mb-4">Social media handles</p>
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
