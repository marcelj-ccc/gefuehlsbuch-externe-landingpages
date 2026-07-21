# Mein kleines Gefühls-Buch – externe Landingpages

Dieses Repository enthält die **zwei eigenständigen externen Zielseiten** für den bestehenden Webador-Auftritt:

| Zielseite | Zweck |
|---|---|
| `/newsletter/` | Ruhige, markenkonforme Informations- und Anmeldeseite für den Newsletter. |
| `/leseprobe/` | Leseproben-Seite mit dem echten Buchcover, der PDF-Leseprobe und dem Kaufweg. |

Die Seiten sind **eigenständig** und haben weder technische noch inhaltliche Abhängigkeiten zum vorhandenen Newsletter-Projekt. Sie werden über GitHub Pages bereitgestellt. Die Webador-Hauptseite bleibt der zentrale Auftritt und verlinkt über ihre Buttons auf diese Zielseiten.

## Newsletter-Formular

Das Formular verarbeitet erst dann personenbezogene Daten, wenn vor dem Build sowohl ein datenschutzkonformer externer Formular-Endpunkt als auch eine veröffentlichte Datenschutzerklärung konfiguriert wurden:

```text
VITE_NEWSLETTER_FORM_ENDPOINT=https://…
VITE_PRIVACY_URL=https://…
```

Solange diese Angaben fehlen, bleibt das Formular bewusst deaktiviert und täuscht keine Anmeldung vor.

## Bereitstellung

Der Workflow `.github/workflows/deploy-pages.yml` erzeugt die statischen Seiten bei jedem Push nach `main` und stellt sie über GitHub Pages bereit. Die Bilder und die Leseproben-PDF werden aus dem Release `assets-v1` geladen, damit das Projekt schlank bleibt und die beiden Seiten unabhängig erreichbar sind.
