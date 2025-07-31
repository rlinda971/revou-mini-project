document.getElementById("belajarForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = this.nama.value;
  const tanggal = this.tanggal.value;
  const gender = this.gender.value;
  const pesan = this.pesan.value;

  const tbody = document.getElementById("dataBody");
  const row = tbody.insertRow();

  row.innerHTML = `
    <td>${nama}</td>
    <td>${new Date(tanggal).toLocaleDateString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric'
    })}</td>
    <td>${gender}</td>
    <td>${pesan}</td>
    <td><a href="#">Klik Disini</a></td>
    <td><button onclick="hapusBaris(this)">🗑️</button></td>
  `;

  this.reset();
});

function hapusBaris(button) {
  const row = button.closest('tr');
  row.remove();
}
