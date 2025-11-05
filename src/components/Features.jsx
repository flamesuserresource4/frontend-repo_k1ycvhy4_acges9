import { Users, Heart, Shield, MessageSquare } from "lucide-react";

const features = [
  {
    title: "Support groups",
    desc: "Join topic-based spaces for parenting, education, mobility, neurodiversity, and more.",
    icon: Users,
  },
  {
    title: "Kind, safe spaces",
    desc: "Community guidelines, active moderation, and tools that keep conversations respectful.",
    icon: Shield,
  },
  {
    title: "Peer-to-peer help",
    desc: "Ask questions, share experiences, and crowdsource tips from people who understand.",
    icon: MessageSquare,
  },
  {
    title: "Curated resources",
    desc: "Discover accessible tools, services, and programs recommended by the community.",
    icon: Heart,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built like the best networks, tailored for you
          </h2>
          <p className="mt-3 text-gray-600">
            Familiar, friendly, and focused on accessibility from the start.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-blue-600"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
