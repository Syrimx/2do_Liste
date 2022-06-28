# Persistente To Do Liste
-------------------------
## Usage
--------
1. Möchte man diese App ausführen kann man in den Projektordner **"2Do"** wechseln und anschließend ein Terminal öffnen.
2. Wenn das Terminal innerhalb des Projektordners geöffnet ist gibt man folgende Befehle ein:
```bash
	npm install
```

```bash
	npm start run
```
3. Sind die Befehle ausgeführt worden kann innerhalb des Browsers zu **localhost:3000** navigiert werden um die App aufzurufen.

## Funtionsumfang der Applikation
---------------------------------
* [x] Sollten keine Aufgaben vorhanden sein, wird ein Alternativtext angezeigt
* [x] Aufgaben lassen sich hinzufügen
* [x] Aufgaben lassen sich entfernen -> erledigte Aufgaben werden aus dem localStorage und component state gelöscht 
* [x] Aufgaben sind persistent im localStorage des Browsers gespeichert -> sodass die offenen Aufgaben bei neuladen des Fensters nach wie vor angezeigt werden


#### Quellen
-----------
[React Hooks](https://reactjs.org/docs/hooks-reference.html#lazy-initial-state)
[sticky Custom Hook](https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/)
