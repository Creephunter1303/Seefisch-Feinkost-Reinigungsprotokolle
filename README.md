# Seefisch-Feinkost · Reinigungsprotokolle

Tablet-App für die Reinigungsprotokolle der Verkaufswagen (Seico, Borco Neu, Borco Alt).

**Stand:** Maske mit Beispieldaten, noch ohne Speichern.

| Datei | Wofür |
|---|---|
| `docs/index.html` | Maske v0.5 der App (dunkler Demo-Balken oben gehört nicht zur App) |
| `docs/test.html` | Test: Kann die Web-App die Protokoll-PDFs auf dem Tablet anzeigen? |
| `docs/seefisch.css`, `docs/schriften/` | Seefisch-Designsystem (unverändert) |

**Veröffentlichung:** GitHub Pages aus dem Ordner `docs/` (Settings → Pages → Branch `main`, Ordner `/docs`).

- App: https://creephunter1303.github.io/Seefisch-Feinkost-Reinigungsprotokolle/
- Test: https://creephunter1303.github.io/Seefisch-Feinkost-Reinigungsprotokolle/test.html

Geplante Technik: PWA (HTML/CSS/JS, kein Framework), Google Apps Script legt die PDFs in Google Drive ab (`Reinigung/Protokolle`, monatlich ins Archiv), FolderSync spiegelt den Ordner aufs Tablet.
