/**
 * Stil: Ruhiger Aquarell-Begleitraum. Die Routen halten Hauptseite, Leseprobe
 * und Newsletter als ruhige Buchwelt zusammen; die Router-Basis bleibt für
 * GitHub Pages und die spätere eigene Domain gleichermaßen robust.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Datenschutz from "./pages/Datenschutz";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Leseprobe from "./pages/Leseprobe";
import Newsletter from "./pages/Newsletter";
import NotFound from "./pages/NotFound";

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
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/leseprobe" component={Leseprobe} />
        <Route path="/newsletter" component={Newsletter} />
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
