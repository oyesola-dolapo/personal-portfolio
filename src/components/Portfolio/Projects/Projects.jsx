export default function Projects() {
  const projects = [
    {
      title: "Carway",
      image: "/images/project/Carway.png",
      button: [
        { btnText: "Demo", link: "https://oyesola-dolapo.github.io/Carway/" },
        { btnText: "Code", link: "https://github.com/oyesola-dolapo/Carway/" },
      ],
    },
    {
      title: "Furniture",
      image: "/images/project/Furniture.png",
      button: [
        {
          btnText: "Demo",
          link: "https://oyesola-dolapo.github.io/furniture-e-commerce/",
        },
        {
          btnText: "Code",
          link: "https://github.com/oyesola-dolapo/furniture-e-commerce",
        },
      ],
    },
    {
      title: "NFT Dashboard",
      image: "/images/project/NFT.png",
      button: [
        {
          btnText: "Demo",
          link: "https://www.behance.net/gallery/165368609/NFT-Marketplace-Dashboard",
        },
        {
          btnText: "Design",
          link: "https://www.figma.com/file/4OypLn3qSmjImRvOyIvz9v/NFT?type=design&node-id=0%3A1&mode=design&t=kK65jgb0QMbhNZWu-1",
        },
      ],
    },
    {
      title: "𝟗ƑℲ",
      image: "/images/project/9ff.png",
      button: [
        {
          btnText: "Demo",
          link: "https://9ff.netlify.app/",
        },
        {
          btnText: "Code",
          link: "https://github.com/oyesola-dolapo/9FF",
        },
      ],
    },
    {
      title: "Nike",
      image: "/images/project/Nike.png",
      button: [
        {
          btnText: "Demo",
          link: "https://oyesola-dolapo.github.io/Nike/",
        },
        {
          btnText: "Code",
          link: "https://github.com/oyesola-dolapo/Nike",
        },
      ],
    },
  ];
  return (
    <ul className="py-6 flex flex-col gap-4 flex-wrap lg:gap-10 sm:flex-row justify-center">
      {projects.map((project) => {
        return (
          <li className="border-2 rounded-xl border-solid border-myColor p-4 sm:w-[25rem]">
            <a href={project.button[0].link}>
              <img
                loading="lazy"
                src={project.image}
                alt=""
                className="rounded sm:h-[15rem] w-full  overflow-hidden
                "
              />
            </a>
            <h1 className="py-4">{project.title}</h1>
            <div>
              <button>
                <a
                  href={project.button[0].link}
                  className="bg-myColor rounded px-2 py-1 text-black font-medium">
                  {project.button[0].btnText}
                </a>
              </button>
              <button className="ml-4">
                <a
                  href={project.button[1].link}
                  className="border-2 border-solid border-myColor rounded px-2 py-1">
                  {project.button[1].btnText}
                </a>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
