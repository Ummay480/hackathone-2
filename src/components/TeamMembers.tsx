const TeamMembers = () => {
    const members = [
      { name: 'Mark Henry', role: 'Owner' },
      { name: 'Lucky Helen', role: 'Chef' },
      { name: 'Moon Henry', role: 'Founder' },
      { name: 'Tom Morrow', role: 'Specialist' },
    ];
  
    return (
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Team Members</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-200 h-40 w-40 mx-auto rounded-full"></div>
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TeamMembers;
  