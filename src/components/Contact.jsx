function Contact() {
  return (
    <section
      id="contact"
      className="shadow-lg box-border bg-surface p-6 px-10 rounded-2xl"
    >
      <h3 className="text-primary text-3xl font-medium">Contact</h3>
      <form>
        <div className="flex flex-col">
          <label className="text-xl font-medium" htmlFor="fname">
            First name
          </label>
          <input
            className="border-2 border-text p-1 lg:max-w-80"
            type="text"
            id="fname"
            name="fname"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl font-medium" htmlFor="lname">
            Last name
          </label>
          <input
            className="border-2 border-text p-1 lg:max-w-80"
            type="text"
            id="lname"
            name="lname"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 border-text p-1 lg:max-w-80"
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            className="border-2 border-text p-1 h-40"
            name="message"
            id="message"
          ></textarea>
        </div>
        <input
          className="cursor-pointer p-3 w-32 rounded bg-background text-xl font-medium mt-3 hover:shadow-card"
          type="button"
          value="Send"
        />
      </form>
      <div className="flex flex-col lg:flex-row">
        <div className="flex gap-1 items-center box-border p-2 mt-5">
          <span className="material-icons">phone</span>
          <a className="text-xl" href="">
            555-xxxx
          </a>
        </div>
        <div className="flex gap-1 items-center box-border p-2 mt-5">
          <span className="material-icons">alternate_email</span>
          <a className="text-xl" href="">
            contact@pixelpink.com
          </a>
        </div>
        <div className="flex gap-1 items-center box-border p-2 mt-5">
          <span className="material-icons">location_on</span>
          <a className="text-xl" href="">
            Apt. 951 92318 Arlena Loaf, Joeyton, IL 32479
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
