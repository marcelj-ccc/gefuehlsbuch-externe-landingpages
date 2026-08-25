/**
 * Stil: Ruhiger Aquarell-Begleitraum. Die Routen halten Hauptseite, Leseprobe
 * und Newsletter als ruhige Buchwelt zusammen; die Router-Basis bleibt für
 * GitHub Pages und die spätere eigene Domain gleichermaßen robust.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Datenschutz from "./pages/Datenschutz";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Leseprobe from "./pages/Leseprobe";
import Elternratgeber from "./pages/Elternratgeber";
import Newsletter from "./pages/Newsletter";
import { SeoHead } from "./components/SeoHead";
import NotFound from "./pages/NotFound";

function RouteSeo() {
  const [location] = useLocation();
  const seoByPath: Record<string, { title: string; description: string }> = {
    "/": {
      title: "Buch über Gefühle für Kinder | Mein kleines Gefühls-Buch",
      description: "Mitmachbuch für Kinder von 4–8 Jahren: Gefühle benennen, Wut begleiten und gemeinsam ins Gespräch kommen. Entdecke Mein kleines Gefühls-Buch.",
    },
    "/leseprobe": {
      title: "Leseprobe: Buch über Gefühle für Kinder | Mein kleines Gefühls-Buch",
      description: "Sieh dir ausgewählte Buchseiten an: Das Mitmachbuch unterstützt Kinder von 4–8 Jahren dabei, Gefühle wahrzunehmen, zu benennen und darüber zu sprechen.",
    },
    "/newsletter": {
      title: "Elternimpulse zu Kindergefühlen | Mein kleines Gefühls-Buch",
      description: "Erhalte ausgewählte Gesprächsimpulse und Buchneuigkeiten für den Familienalltag – ruhig, kindgerecht und mit konkreten Ideen rund um Kindergefühle.",
    },
  };
  const seo = seoByPath[location] ?? seoByPath["/"];
  return <SeoHead title={seo.title} description={seo.description} path={location} />;
}

function AppRoutes() {
  // Die Router-Basis wird direkt aus dem Pfad erkannt: Läuft die Seite unter
  // dem Projekt-Unterpfad (GitHub Pages oder ein anderer Host mit gleichem
  // Unterordner), wird dieser als Basis gesetzt; auf einer eigenen Domain im
  // Root bleibt die Basis leer. Das hält alle bestehenden URLs stabil.
  const gitHubProjectBase = "/gefuehlsbuch-externe-landingpages";
  const servedUnderProjectBase =
    typeof window !== "undefined" && window.location.pathname.startsWith(gitHubProjectBase);
  const pagesBase = servedUnderProjectBase ? gitHubProjectBase : undefined;

  return (
    <WouterRouter base={pagesBase}>
      <RouteSeo />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/leseprobe" component={Leseprobe} />
        <Route path="/newsletter" component={Newsletter} />
        <Route path="/wut-bei-kindern" component={Elternratgeber} />
        <Route path="/gefuehle-benennen" component={Elternratgeber} />
        <Route path="/abendritual-mit-kindern" component={Elternratgeber} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <AppRoutes />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
