// ==================================================
// Configuração automática da URL do backend
// ==================================================

const BACKEND_URL = window.location.hostname === 'localhost' 
  ? "http://localhost:5000"           // Desenvolvimento
  : "http://192.168.68.55:5000";       // Produção (Vercel)

console.log("Backend URL:", BACKEND_URL);
console.log("Hostname:", window.location.hostname);