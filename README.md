# 🎬 Movie Explorer  

> Applicazione **React** per esplorare i film più popolari, cercare nuovi titoli e gestire una lista di preferiti.  
> Alimentata da [The Movie Database (TMDb)](https://www.themoviedb.org/).  

![React](https://img.shields.io/badge/React-18-blue?logo=react)  
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)  
![License](https://img.shields.io/badge/License-MIT-green)  

---

## ✨ Funzionalità  

- 📺 **Film Popolari**: caricamento automatico dei titoli più visti da TMDb  
- 🔍 **Ricerca**: cerca film tramite titolo  
- ❤️ **Preferiti**: aggiungi/rimuovi film e salvali in `localStorage`  
- 🌐 **Routing**: navigazione tra *Home* e *Preferiti* con React Router  
- ⚡ **UX migliorata**: gestione errori e stato di caricamento  

---

## 🛠️ Tecnologie Utilizzate  

- [React 18](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [React Router DOM](https://reactrouter.com/)  
- Context API (per stato globale dei preferiti)  
- [TMDb API](https://developer.themoviedb.org/docs)  

---

## 🚀 Installazione  

 **Clona la repository**  
   ```bash
   git clone https://github.com/tuo-username/movie-explorer.git
   cd movie-explorer
 ```
Installa le dipendenze
```bash
npm install
```



Crea un file .env
e aggiungi la tua API key personale:
```bash
const API_KEY = la_tua_api_key
```

Avvia il progetto in locale
```bash
npm run dev
```

L’app sarà disponibile su: http://localhost:5173

## 📂 Struttura del Progetto  

```
movie-explorer/
├── App.jsx
├── main.jsx
├── contexts/
│ └── MovieContext.jsx
├── pages/
│ ├── Favorites.jsx
│ └── Home.jsx
├── components/
│ ├── NavBar.jsx
│ └── MovieCard.jsx
├── services/
│ └── api.js 
└── ...
```

- **App.jsx** → definisce il routing e avvolge tutto in `MovieProvider`  
- **contexts/MovieContext.jsx** → gestisce i preferiti con persistenza in `localStorage`  
- **pages/Home.jsx** → film popolari e ricerca  
- **pages/Favorites.jsx** → lista preferiti salvati  
- **components/MovieCard.jsx** → card con poster, titolo, anno e pulsante preferiti  
- **services/api.js** → funzioni per interrogare TMDb


## 📌 Miglioramenti

 - Creare pagina dettaglio film con info aggiuntive



## 📜 Licenza

Questo progetto è distribuito sotto licenza MIT.
Fonte dati: TMDb


