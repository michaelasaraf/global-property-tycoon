import { createFileRoute } from "@tanstack/react-router";
import heroWorld from "@/assets/hero-world.jpg";
import tycoonMap from "@/assets/tycoon-map.jpg";
import tycoonBg from "@/assets/tycoon-bg.jpg";
import phoneMockup from "@/assets/phone-mockup.png";
import cityDistrict from "@/assets/city-district.jpg";
import {
  Globe2,
  Building2,
  Coins,
  TrendingUp,
  Map,
  Briefcase,
  Mountain,
  Trophy,
  ArrowRight,
  Apple,
  Smartphone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Property Tycoon — Build Your Real Estate Empire" },
      {
        name: "description",
        content:
          "Buy properties around the world, collect rent, upgrade your assets, and become the ultimate property tycoon in this premium mobile idle game.",
      },
      { property: "og:title", content: "Global Property Tycoon" },
      {
        property: "og:description",
        content:
          "A premium mobile idle tycoon game. Build a global real estate empire from a single property to a worldwide business.",
      },
      { property: "og:image", content: heroWorld },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Map, title: "Explore the World Map", desc: "Discover investment opportunities across every continent." },
  { icon: Building2, title: "Buy Premium Properties", desc: "Residential, commercial, tourism, and strategic assets." },
  { icon: Coins, title: "Collect Recurring Rent", desc: "Earn passive income on every property cycle." },
  { icon: TrendingUp, title: "Upgrade Your Assets", desc: "Increase income and unlock luxury tiers." },
  { icon: Globe2, title: "Expand to New Countries", desc: "Unlock bigger deals and global markets." },
  { icon: Briefcase, title: "Grow Your HQ", desc: "Place and scale your company headquarters." },
  { icon: Mountain, title: "Natural Resources", desc: "Discover oil, mines, and rare opportunities." },
  { icon: Trophy, title: "Global Leaderboards", desc: "Compete as the world's top tycoon." },
];

const stages = [
  { n: "01", title: "Small Investor", desc: "Start with limited capital and your first apartment.", income: "$120/hr" },
  { n: "02", title: "Local Mogul", desc: "Acquire commercial buildings across your home country.", income: "$8.2K/hr" },
  { n: "03", title: "Regional Empire", desc: "Expand into neighboring nations and tourism markets.", income: "$340K/hr" },
  { n: "04", title: "Global Tycoon", desc: "Dominate the leaderboards with a worldwide portfolio.", income: "$12M/hr" },
];

function Index() {
  return (
    <main
      className="min-h-screen bg-background text-foreground overflow-x-hidden relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, oklch(0.18 0.04 260 / 0.92), oklch(0.16 0.04 260 / 0.98)), url(${tycoonBg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold tracking-tight text-sm">
            Global Property <span className="text-gold">Tycoon</span>
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#overview" className="hover:text-foreground transition">Overview</a>
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#journey" className="hover:text-foreground transition">Journey</a>
          </nav>
          <a
            href="#download"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Download Now <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 bg-radial-glow">
        <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-gold-soft bg-card/50 backdrop-blur px-3 py-1.5 text-xs font-medium text-gold mb-6">
              <Smartphone className="w-3.5 h-3.5" /> Available now on iOS & Android
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight">
              Build Your <span className="text-gradient-gold">Global Real Estate</span> Empire
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Buy properties around the world, collect rent, upgrade your assets, and become the ultimate property tycoon.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a
                href="#download"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold shadow-gold-glow hover:translate-y-[-1px] transition"
              >
                Download Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm justify-center">
              <Stat value="190+" label="Countries" />
              <div className="h-8 w-px bg-border" />
              <Stat value="2,000+" label="Properties" />
              <div className="h-8 w-px bg-border" />
              <Stat value="∞" label="Net Worth" />
            </div>
        </div>

        {/* Giant tycoon map showcase */}
        <div className="relative mt-16 md:mt-24 max-w-[1600px] mx-auto px-4">
          <div className="absolute -inset-12 bg-gradient-to-br from-gold/25 via-transparent to-accent/25 blur-3xl" />
          <div className="relative rounded-[2rem] overflow-hidden border-gold-soft shadow-gold-glow">
            <img
              src={tycoonMap}
              alt="Massive top-down isometric tycoon world map filled with skyscrapers and property markers"
              width={1920}
              height={1280}
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-emerald font-semibold uppercase tracking-[0.2em] text-xs mb-2">Live World Map</p>
                <h3 className="font-display text-2xl md:text-4xl font-extrabold">Your empire, in one tap.</h3>
              </div>
              <div className="flex gap-2">
                <span className="rounded-full bg-background/70 backdrop-blur border border-border px-3 py-1.5 text-xs font-semibold text-gold">+ $12.4M /hr</span>
                <span className="rounded-full bg-background/70 backdrop-blur border border-border px-3 py-1.5 text-xs font-semibold text-emerald">Rent collected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-10 bg-gradient-to-tr from-emerald/20 to-gold/10 blur-3xl" />
            <img
              src={phoneMockup}
              alt="Global Property Tycoon mobile game UI"
              width={800}
              height={1600}
              loading="lazy"
              className="relative w-full max-w-md mx-auto h-auto drop-shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-emerald font-semibold uppercase tracking-[0.2em] text-xs mb-4">The Game</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              A mobile idle tycoon for the<br />
              <span className="text-gradient-gold">next generation of investors.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Global Property Tycoon puts a living world map in your pocket. Buy real-world-inspired properties,
              earn rent on every cycle, and watch a tiny seed of capital grow into a worldwide business empire.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <MiniCard icon={Coins} label="Idle Rent" value="24/7" />
              <MiniCard icon={Building2} label="Asset Tiers" value="5 Classes" />
              <MiniCard icon={Globe2} label="World Map" value="Live" />
              <MiniCard icon={Trophy} label="Leaderboards" value="Global" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 md:py-32 bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-emerald font-semibold uppercase tracking-[0.2em] text-xs mb-4">Core Features</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Everything a tycoon needs to <span className="text-gradient-gold">go global.</span>
            </h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-2xl border border-border bg-background/60 backdrop-blur p-6 hover:border-gold/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold/20 to-emerald/10 border-gold-soft grid place-items-center mb-5 group-hover:shadow-gold-glow transition">
                  <f.icon className="w-5 h-5 text-gold" strokeWidth={2} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Progression */}
      <section id="journey" className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-emerald font-semibold uppercase tracking-[0.2em] text-xs mb-4">The Journey</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              From your <span className="text-gradient-gold">first apartment</span> to a worldwide empire.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stages.map((s, i) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-border bg-card p-7 hover:border-gold/50 transition"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-5xl font-display font-extrabold text-gradient-gold">{s.n}</span>
                  {i < stages.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                  )}
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <div className="pt-5 border-t border-border flex items-center gap-2">
                  <Coins className="w-4 h-4 text-gold" />
                  <span className="text-sm font-semibold text-gold">{s.income}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 relative rounded-3xl overflow-hidden border border-border">
            <img
              src={cityDistrict}
              alt="Premium 3D city district"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-xl">
              <h3 className="font-display text-2xl md:text-4xl font-extrabold mb-3">Every district tells a story.</h3>
              <p className="text-muted-foreground">Acquire iconic skylines from Manhattan to Dubai to Tokyo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Download */}
      <section id="download" className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl border-gold-soft bg-gradient-to-br from-card via-background to-card p-10 md:p-16 text-center overflow-hidden shadow-gold-glow">
            <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border-gold-soft bg-background/60 px-3 py-1.5 text-xs font-medium text-gold mb-6">
                <Smartphone className="w-3.5 h-3.5" /> Download today
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-tight">
                Start Building Your <span className="text-gradient-gold">Empire</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-lg mx-auto">
                Global Property Tycoon is live. Download now and begin your journey from small investor to global tycoon.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-background border border-border px-6 py-3.5 font-semibold hover:border-gold/50 hover:-translate-y-0.5 transition"
                >
                  <Apple className="w-5 h-5" />
                  <span>App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.michaelgames.global_assets_tycoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition shadow-gold-glow"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Google Play</span>
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Free to download. Optional in-app purchases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gold to-accent grid place-items-center">
              <Globe2 className="w-4 h-4 text-gold-foreground" strokeWidth={2.5} />
            </div>
            <span>© 2026 Global Property Tycoon</span>
          </div>
          <p>Crafted for tycoons in the making.</p>
        </div>
      </footer>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-extrabold text-gradient-gold">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function MiniCard({ icon: Icon, label, value }: { icon: typeof Coins; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-5">
      <Icon className="w-5 h-5 text-gold mb-3" />
      <div className="font-display text-xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}
