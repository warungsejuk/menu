const gambarData = [
    { src: "https://via.placeholder.com/300x200?text=Gambar+1", nama: "Gambar 1", harga: 100000 },
    { src: "https://via.placeholder.com/300x200?text=Gambar+2", nama: "Gambar 2", harga: 150000 },
    { src: "https://via.placeholder.com/300x200?text=Gambar+3", nama: "Gambar 3", harga: 200000 },
    { src: "https://via.placeholder.com/300x200?text=Gambar+4", nama: "Gambar 4", harga: 250000 }
];

let currentImageIndex = 0; 

function tampilkanForm() {
    const gambar = gambarData[currentImageIndex];

    const currentImage = document.querySelector('.slideshow img'); 
    currentImage.src = gambar.src;

    document.getElementById('item').value = gambar.nama;
    document.getElementById('harga').value = `Rp ${gambar.harga.toLocaleString()}`;

    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'block';

    formContainer.scrollIntoView({ behavior: 'smooth' });
}

function kirimPesanan(event) {
    event.preventDefault(); 

    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const item = document.getElementById('item').value;
    const harga = document.getElementById('harga').value;

    if (!item) {
        alert('Pilih gambar terlebih dahulu!');
        return;
    }

    alert(`Pesanan Berhasil!\n\nDetail Pesanan:\nNama: ${nama}\nAlamat: ${alamat}\nItem: ${item}\nHarga: ${harga}`);
    
    document.getElementById('formPemesanan').reset();
    document.getElementById('formContainer').style.display = 'none'; 
}

function updateSelectedItem() {
    const selectElement = document.getElementById("item-select");
    const inputElement = document.getElementById("item");
    inputElement.value = selectElement.value;
}