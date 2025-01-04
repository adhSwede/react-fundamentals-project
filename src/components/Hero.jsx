import heroImg from "../assets/images/hero.jpg";

function Hero() {
  return (
    <main className="shadow-lg  p-6 box-border flex flex-col justify-center items-center bg-surface rounded-2xl">
      <div className="flex box-border p-10 flex-col lg:flex-row">
        <img
          className="lg:size-1/2 rounded-2xl m-8"
          src={heroImg}
          alt="hero image"
        />
        <div className="flex flex-col box-border items-center gap-10">
          <h2 className="text-4xl font-semibold text-primary p-1">
            Modern web development as it should be.
          </h2>
          <p className="text-text text-2xl font-normal lg:w-3/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            consectetur nisi doloribus error earum esse ea. Commodi natus
            impedit officiis ex, ea fuga in praesentium accusantium voluptates
            quibusdam vel. Ullam. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Possimus blanditiis iste perferendis quia
            voluptatem sequi asperiores in repellendus cumque dolores!
            <br /> <br />
            Fuga temporibus ex distinctio odit illum sequi aperiam alias quas,
            voluptates totam consectetur pariatur optio, laboriosam sit nam
            culpa velit sapiente dolorum doloribus. Quae nihil deserunt tempore
            autem magni soluta? Quam modi nobis assumenda, suscipit voluptatum
            eum ea neque soluta magnam, cupiditate sapiente delectus architecto
            aperiam expedita rerum quisquam corrupti reprehenderit dolore
            inventore provident libero?
            <br /> <br />
            Architecto libero dolor consectetur. Fuga officiis nesciunt quod
            adipisci nihil itaque illo, dolor ea laudantium explicabo ex error
            officia, voluptatum, neque debitis optio id nobis.
          </p>
          <a
            href=""
            className="bg-primary text-surface p-5 text-2xl font-semibold rounded-lg hover:shadow-card hover:text-3xl"
          >
            Learn more!
          </a>
        </div>
      </div>
    </main>
  );
}

export default Hero;
