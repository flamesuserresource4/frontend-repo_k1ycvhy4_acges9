import { Users, Heart, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 lg:px-8">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
              <Users className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="font-semibold text-blue-700">Together</p>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">Features</a>
            <a href="#community" className="hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">Community</a>
            <a href="#join" className="hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">Join</a>
          </nav>
        </header>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Connect, learn, and thrive
            </h1>
            <p className="mt-5 max-w-xl text-lg text-gray-600">
              A welcoming social space inspired by your favorite networks—built for people with disabilities and their allies. Share stories, find support groups, and access resources that fit your needs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Join free
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-700 transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Learn more
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 text-center sm:max-w-md">
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <dt className="text-xs text-gray-500">Safe by design</dt>
                <dd className="mt-1 flex items-center justify-center gap-1 text-sm font-medium text-gray-900">
                  <Shield className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  Moderated
                </dd>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <dt className="text-xs text-gray-500">Community-first</dt>
                <dd className="mt-1 flex items-center justify-center gap-1 text-sm font-medium text-gray-900">
                  <Users className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  Groups
                </dd>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <dt className="text-xs text-gray-500">Supportive</dt>
                <dd className="mt-1 flex items-center justify-center gap-1 text-sm font-medium text-gray-900">
                  <Heart className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  Resources
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" aria-hidden="true" />
              <div className="relative flex h-full w-full items-center justify-center p-8">
                <div className="grid w-full grid-cols-2 gap-4 sm:gap-6">
                  <Card title="Support Groups" description="Find peers by interest or need" icon={<Users className="h-5 w-5 text-blue-600" aria-hidden="true" />} />
                  <Card title="Safe Spaces" description="Report & moderate easily" icon={<Shield className="h-5 w-5 text-blue-600" aria-hidden="true" />} />
                  <Card title="Kindness First" description="Celebrate wins, big and small" icon={<Heart className="h-5 w-5 text-blue-600" aria-hidden="true" />} />
                  <Card title="Events" description="Meetups, talks, and more" icon={<Users className="h-5 w-5 text-blue-600" aria-hidden="true" />} />
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">Designed for accessibility—keyboard friendly, high contrast, and readable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, description, icon }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white/80 p-4 backdrop-blur">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
          {icon}
        </span>
        <div>
          <p className="font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
