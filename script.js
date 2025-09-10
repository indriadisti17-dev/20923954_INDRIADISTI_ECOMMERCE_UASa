function beliProduk(nama) {
  alert("Anda membeli " + nama + "!");
}

function beliProdukPilihan(nama) {
  const warna = document.getElementById("warna");
  const ukuran = document.getElementById("ukuran");

  let pilihan = "";

  if (warna && warna.value) {
    pilihan += " Warna: " + warna.value;
  }
  if (ukuran && ukuran.value) {
    pilihan += " Ukuran: " + ukuran.value;
  }

  if (!pilihan) {
    alert("Silakan pilih variasi produk terlebih dahulu.");
    return false;
  }

  alert("Anda membeli " + nama + pilihan);
  return false; // supaya form tidak reload
}

