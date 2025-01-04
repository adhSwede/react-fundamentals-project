function Header() {
  const title = "Pixel Pink ";
  const slogan = "Lorem ipsum dolor sit amet elit.";

  return (
    <header className="shadow-lg flex justify-center lg:justify-between flex-wrap items-center rounded-2xl bg-surface py-10 px-5">
      <div className="p-6">
        <h1 className="text-primary text-6xl font-semibold font-pixelify">
          {title}
        </h1>
        <p className="flex flex-row justify-self-center pt-1 italic text-primary">
          {slogan}
        </p>
      </div>
      <nav className="grid grid-cols-3 grid-rows-2 lg:grid-cols-5 lg:grid-rows-1 text-primary uppercase gap-6 items-center h-10 font-semibold lg:text-xl lg:pr-10">
        <a href="#home" className=" hover:shadow-card rounded-lg">
          Home
        </a>
        <a href="#about" className=" hover:shadow-card rounded-lg">
          About
        </a>
        <a href="#services" className=" hover:shadow-card rounded-lg">
          Services
        </a>
        <a href="#team" className=" hover:shadow-card rounded-lg">
          Team
        </a>
        <a href="#contact" className=" hover:shadow-card rounded-lg">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
