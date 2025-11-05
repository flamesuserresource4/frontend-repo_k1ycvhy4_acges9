import Hero from "./components/Hero";
import Features from "./components/Features";
import Community from "./components/Community";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Features />
      <Community />
      <CallToAction />
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-600">
        Made with care for everyone. Accessibility matters.
      </footer>
    </div>
  );
}

export default App;
