# Movie Explorer

Un'applicazione React per esplorare film popolari e gestire una lista di preferiti. Si collega al database di [The Movie Database (TMDb)](https://www.themoviedb.org/) per mostrare i film più popolari e permette di cercare nuovi titoli.

---

## 🔧 Requisiti e Dipendenze

- Node.js (consigliato: >= 18.x)
- npm

Dipendenze principali (già incluse in `package.json`, da installare con `npm install`):

- `react`
- `react-dom`
- `react-router-dom`

---

## 🚀 Installazione ed Esecuzione

1. **Clona il progetto** o copia i file nel tuo ambiente locale.

2. **Installa le dipendenze**:

   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**:

   ```bash
   npm run dev
   ```

4. **Apri il browser** su `http://localhost:5173`.

---

## 💡 Esempio di Utilizzo

### ✅ Caricamento Film Popolari
Aprendo la home, vengono caricati i film più popolari da TMDb.

### 🔍 Ricerca Film
Nel campo di input scrivi ad esempio `Inception`, premi "Search" → (attualmente mostra un alert con il testo cercato).

### ❤️ Aggiunta ai Preferiti
Clicca sull’icona `♥` su una card film (al momento attiva solo un alert).

---

## 🧩 Struttura e Componenti Principali

- **App.jsx**  
  Inizializza il routing tra `Home` e `Favorites`, e include la barra di navigazione.

- **pages/Home.jsx**  
  Visualizza film popolari e contiene il modulo di ricerca. Usa `getPopularMovies` da `api.js`.

- **pages/Favorites.jsx**  
  Placeholder statico per la pagina dei preferiti.

- **components/NavBar.jsx**  
  Barra di navigazione semplice con link a "Home" e "Favorites".

- **components/MovieCard.jsx**  
  Rappresentazione visiva di ogni film, mostra titolo, data e poster. Include un pulsante `♥` (clic = alert).

- **services/api.js**  
  Contiene:
  - `getPopularMovies`: richiede i film popolari.
  - `searchMovies`: cerca i film.

---


## 📂 Struttura delle Cartelle

```
├── App.jsx
├── assets/
│   └── react.svg
├── components/
│   ├── MovieCard.jsx
│   └── NavBar.jsx
├── main.jsx
├── pages/
│   ├── Favorites.jsx
│   └── Home.jsx
├── services/
│   └── api.js
```

---

## 📌 To-Do / Miglioramenti Futuri

- [ ] Completare funzionalità "Preferiti"
- [ ] Salvare preferiti su `localStorage`
- [ ] Aggiornare stile CSS globale


---

## 📜 Licenza

Distribuito per scopi educativi o personali. TMDb è utilizzato solo come fonte dati.
