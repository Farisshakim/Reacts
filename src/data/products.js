// File: src/data/products.js

// Ganti path ini sesuai dengan nama file gambar yang Anda simpan di src/assets
import tomatoesImage from '../assets/tomatoes.jpg';
import leafyGreensImage from '../assets/leafy-greens.jpg';
import carrotsImage from '../assets/carrots.jpg';
import bellPeppersImage from '../assets/bell-peppers.jpg';

export const allProducts = [
    { id: 1, name: 'Fresh Tomatoes', imageUrl: tomatoesImage },
    { id: 2, name: 'Leafy Greens', imageUrl: leafyGreensImage },
    { id: 3, name: 'Colorful Carrots', imageUrl: carrotsImage },
    { id: 4, name: 'Bell Peppers', imageUrl: bellPeppersImage },
    // Anda bisa menambahkan produk lain di sini
];