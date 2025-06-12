document.getElementById('bacentaForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    nom: form.nom.value,
    contact: form.contact.value,
    zone: form.zone.value
  };

  const scriptURL = "https://script.google.com/macros/s/AKfycbyaYMZ1HDv6VzTJCR0He5iWjyUFgQbsx5TJG0kc4s-TTV9Cxe3nhU8yPDqH9Ar5OeM5/exec"; // 👉 Remplace avec l’URL Web App

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (response.ok) {
      form.reset();
      document.getElementById('successMessage').innerText = "✅ Enregistrement réussi !";
    } else {
      alert("❌ Échec de l'envoi.");
    }
  } catch (err) {
    console.error(err);
    alert("❌ Une erreur s’est produite.");
  }
});
