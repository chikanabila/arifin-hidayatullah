import React from "react";
import Navbar from "../../components/Navbar";

const Home = () => {
    // Menampilkan halaman web
    return (
      <html lang="en">
        <Navbar />
        <head >
          <title>Cuci motor by Arif</title>
        </head>
        <body >
        
          <header >
            <h1>Rif's carwash</h1>
            <h2>Jasa cuci motor dan mobil</h2>
          </header>
  
          <section id="tentang-kami">
            <h2>Tentang Kami</h2>
            <p>
                Rif's carwash merupakan tempat cuci motor dan mobil.
                Kami melayani jasa:
                <ul>
                    <li>Cuci motor</li>
                    <li>Cuci mobil</li>
                    <li>Dll...</li>
                </ul>
            </p>
          </section>
  
          <section id="kontak-kami">
            <h2>Kontak Kami</h2>
            <p>
                <h4>Rif's carwash</h4>
                <ul>
                    <h4>Nama Pemilik: A. Arifin Hidayatullah</h4>
                    <h4>Alamat: Dusun Badolan Desa Bajulmati Kecamatan Wongsorejo</h4>
                    <h4>Telepon: 083834686929</h4>
                    <h4>Email: arifincoba80@gmail.com</h4>
                </ul>
            </p>
          </section>
        
        </body>
      </html>
    );
};
  
  export default Home;