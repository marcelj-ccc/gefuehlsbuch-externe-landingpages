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
import Home from "./pages/Home";
import Leseprobe from "./pages/Leseprobe";
import Newsletter from "./pages/Newsletter";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  const buildBase = import.meta.env.BASE_URL;
  const pagesBase = buildBase === "/" || buildBase === "./" ? undefined : buildBase.replace(/\/$/, "");

  return (
    <WouterRouter base={pagesBase}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/leseprobe" component={Leseprobe} />
        <Route path="/newsletter" component={Newsletter} />
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
