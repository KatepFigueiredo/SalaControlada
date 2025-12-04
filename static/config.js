// ==================================================
// Configuração automática da URL do backend
// ==================================================

const BACKEND_URL = window.location.hostname === 'localhost' 
  ? "http://localhost:5000"           // Desenvolvimento
  : "https://backend-sala-controlada.onrender.com";       // Produção (Vercel)

console.log("Backend URL:", BACKEND_URL);
console.log("Hostname:", window.location.hostname);