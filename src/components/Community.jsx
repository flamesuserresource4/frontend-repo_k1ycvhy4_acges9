export default function Community() {
  const people = [
    { name: "Aisha", role: "Parent & advocate", quote: "I found a local group for sensory-friendly events in one day.", color: "bg-pink-500" },
    { name: "Liam", role: "Student", quote: "The study tips channel helped me pass my exams.", color: "bg-blue-500" },
    { name: "Noah", role: "Caregiver", quote: "I discovered resources I didn't know existed.", color: "bg-emerald-500" },
  ];

  return (
    <section id="community" className="bg-gradient-to-b from-white to-blue-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A community that understands</h2>
          <p className="mt-3 text-gray-600">Real voices, real impact.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <figure key={p.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 shrink-0 rounded-full ${p.color} text-white flex items-center justify-center font-semibold`} aria-hidden="true">
                  {p.name[0]}
                </div>
                <figcaption>
                  <p className="font-medium text-gray-900">{p.name}</p>
                  <p className="text-sm text-gray-600">{p.role}</p>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-gray-700">“{p.quote}”</blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Stat value="50k+" label="Members" />
          <Stat value="1,200+" label="Active groups" />
          <Stat value="95%" label="Feel safer here" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 text-center">
      <p className="text-3xl font-extrabold text-blue-700">{value}</p>
      <p className="mt-1 text-sm text-gray-600">{label}</p>
    </div>
  );
}
