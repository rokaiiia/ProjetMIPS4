// Gère l'inscription
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
  
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    const result = await response.json();
    alert(result.message || "Inscription effectuée !");
  });
  
  // Gère la connexion
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
  
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    const result = await response.json();
    if (response.ok) {
      alert("Connexion réussie !");
      localStorage.setItem("token", result.token); // JWT sauvegardé
    } else {
      alert(result.message || "Erreur de connexion");
    }
  });