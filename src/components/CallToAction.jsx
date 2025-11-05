export default function CallToAction() {
  return (
    <section id="join" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-600 to-blue-700 p-1 shadow-lg">
          <div className="rounded-[calc(1.5rem-4px)] bg-white p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">Join the community—it's free</h3>
            <p className="mt-2 text-gray-600">
              Create your profile, follow topics, and find groups that fit your needs.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]"
              aria-label="Join the community"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
              >
                Get started
              </button>
            </form>

            <p className="mt-3 text-xs text-gray-500">
              By joining, you agree to our community guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
