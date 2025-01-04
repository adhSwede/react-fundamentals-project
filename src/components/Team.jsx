const MemberCard = ({ title, role }) => {
  return (
    <div id="team" className="box-border p-2">
      <h4 className="text-text text-2xl font-medium pl-3">{title}</h4>
      <div className="flex gap-3 box-border p-3 flex-col lg:flex-row">
        <img
          className=""
          src="https://placehold.co/200x250"
          alt={`${title}'s photo`}
        />
        <div>
          <p className="text-text text-xl font-semibold italic">{role}</p>
          <p className="text-text text-xl">
            Deleniti recusandae molestiae ipsam est officiis labore, qui minima
            ea aspernatur distinctio ex ullam animi, adipisci aperiam quas sint
            obcaecati. Doloribus, sequi! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quod beatae, enim sunt ea quia illum ipsum
            suscipit quibusdam corporis vel doloremque ratione minima porro
            recusandae magnam nam libero, aspernatur ipsam.
          </p>
        </div>
      </div>
    </div>
  );
};

function Team() {
  const members = [
    { name: "Alice", role: "Project Manager" },
    { name: "John", role: "Lead Developer" },
    { name: "Sophia", role: "UI/UX Designer" },
  ];

  return (
    <div className="shadow-lg box-border bg-surface p-6 px-10 rounded-2xl">
      <h3 className="text-primary text-3xl font-medium">Our Team</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {members.map((member, index) => (
          <MemberCard key={index} title={member.name} role={member.role} />
        ))}
      </div>
    </div>
  );
}

export default Team;
