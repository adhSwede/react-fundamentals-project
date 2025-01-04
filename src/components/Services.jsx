const ServiceCard = ({ title }) => {
  return (
    <div
      id="services"
      className="border-dashed border-background border-2 rounded-2xl box-border p-2"
    >
      <h4 className="text-text text-2xl font-medium">{title}</h4>
      <p className="text-text text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        recusandae molestiae ipsam est officiis labore, qui minima ea aspernatur
        distinctio ex ullam animi, adipisci aperiam quas sint obcaecati.
        Doloribus, sequi! Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Quod beatae, enim sunt ea quia illum ipsum suscipit quibusdam
        corporis vel doloremque ratione minima porro recusandae magnam nam
        libero, aspernatur ipsam.
      </p>
    </div>
  );
};

const Services = () => {
  const services = ["Front-end", "Back-end", "Software"];

  return (
    <div className="shadow-lg box-border bg-surface p-6 px-10 rounded-2xl">
      <h3 className="text-primary text-3xl font-medium">Services</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
