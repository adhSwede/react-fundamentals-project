function About() {
  const pText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
  recusandae molestiae ipsam est officiis labore, qui minima ea aspernatur
  distinctio ex ullam animi, adipisci aperiam quas sint obcaecati.
  Doloribus, sequi! Lorem ipsum, dolor sit amet consectetur adipisicing
  elit. Quod beatae, enim sunt ea quia illum ipsum suscipit quibusdam
  corporis vel doloremque ratione minima porro recusandae magnam nam
  libero, aspernatur ipsam.`;

  return (
    <section
      id="about"
      className="flex flex-col gap-5 shadow-lg box-border bg-surface p-6 px-10 rounded-2xl"
    >
      <h3 className="text-primary text-3xl font-medium">About us</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div>
          <h4 className="text-text text-2xl font-medium">Company</h4>
          <p className="text-text text-xl">{pText}</p>
        </div>
        <div>
          <h4 className="text-text text-2xl font-medium">Our Mission</h4>
          <p className="text-text text-xl">{pText}</p>
        </div>
        <div>
          <h4 className="text-text text-2xl font-medium">Values</h4>
          <p className="text-text text-xl">{pText}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
