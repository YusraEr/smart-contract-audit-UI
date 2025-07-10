import React from "react";
import { Shield, Upload, Search, AlertTriangle, ArrowRight, FileText, Zap } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Layanan</a>
              </li>
              <li>
                <a>Tentang</a>
              </li>
              <li>
                <a>Kontak</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">
            <Shield className="w-6 h-6" />
            SmartAudit
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Layanan</a>
            </li>
            <li>
              <a>Tentang</a>
            </li>
            <li>
              <a>Kontak</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Analisis Kontrak</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center max-w-6xl">
          <div className="max-w-4xl">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-primary rounded-full">
                <Shield className="w-16 h-16 text-primary-content" />
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-base-content">
              Analisis Keamanan Smart Contract dengan AI
            </h1>

            <p className="text-xl lg:text-2xl mb-12 text-base-content opacity-70 max-w-3xl mx-auto">
              Unggah smart contract Anda atau masukkan alamat token untuk mendapatkan analisis keamanan 
              instan yang didukung oleh teknologi Slither dan LLM canggih. Identifikasi kerentanan dan 
              dapatkan rekomendasi untuk mengamankan kode Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="btn btn-primary btn-lg">
                Unggah Kontrak
                <Upload className="w-5 h-5 ml-2" />
              </button>
              <button className="btn btn-outline btn-lg">
                analisis dengan alamat token
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-base-content">
              Cara Kerja
            </h2>
            <p className="text-xl text-base-content opacity-70 max-w-2xl mx-auto">
              Analisis AI canggih dikombinasikan dengan tools standar industri untuk penilaian keamanan yang komprehensif
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="p-4 bg-primary rounded-full mb-4">
                  <Upload className="w-8 h-8 text-primary-content" />
                </div>
                <h3 className="card-title text-2xl mb-4">
                  Unggah Smart Contract
                </h3>
                <p className="text-base-content opacity-70 mb-6">
                  Unggah file smart contract Solidity (.sol) atau paste kode kontrak Anda 
                  langsung untuk analisis instan.
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Coba Sekarang</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="p-4 bg-secondary rounded-full mb-4">
                  <Search className="w-8 h-8 text-secondary-content" />
                </div>
                <h3 className="card-title text-2xl mb-4">
                  analisis dengan alamat token
                </h3>
                <p className="text-base-content opacity-70 mb-6">
                  Masukkan alamat kontrak token untuk otomatis mengambil dan menganalisis 
                  kontrak yang telah diverifikasi dari blockchain.
                </p>
                <div className="card-actions">
                  <button className="btn btn-secondary">Analisis Alamat</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="p-4 bg-accent rounded-full mb-4">
                  <FileText className="w-8 h-8 text-accent-content" />
                </div>
                <h3 className="card-title text-2xl mb-4">Dapatkan Laporan Keamanan</h3>
                <p className="text-base-content opacity-70 mb-6">
                  Terima analisis keamanan detail dengan temuan kerentanan, 
                  penilaian risiko, dan rekomendasi yang dapat ditindaklanjuti.
                </p>
                <div className="card-actions">
                  <button className="btn btn-accent">Lihat Contoh</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-base-content">
              Fitur Analisis
            </h2>
            <p className="text-xl text-base-content opacity-70 max-w-2xl mx-auto">
              Didukung oleh analisis statis Slither dan AI canggih untuk penilaian keamanan yang komprehensif
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-error mr-3" />
                  <h3 className="card-title">Deteksi Kerentanan</h3>
                </div>
                <p className="text-base-content opacity-70">
                  Deteksi reentrancy, overflow, kontrol akses, dan kerentanan kritis lainnya.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-warning mr-3" />
                  <h3 className="card-title">Optimasi Gas</h3>
                </div>
                <p className="text-base-content opacity-70">
                  Identifikasi pola yang tidak efisien gas dan sarankan optimasi untuk mengurangi biaya.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-success mr-3" />
                  <h3 className="card-title">Praktik Terbaik</h3>
                </div>
                <p className="text-base-content opacity-70">
                  Periksa kepatuhan terhadap praktik terbaik Solidity dan standar coding.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-info mr-3" />
                  <h3 className="card-title">Laporan Detail</h3>
                </div>
                <p className="text-base-content opacity-70">
                  Dapatkan laporan komprehensif dengan analisis baris demi baris dan rekomendasi.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <Search className="w-6 h-6 text-primary mr-3" />
                  <h3 className="card-title">Analisis Bertenaga AI</h3>
                </div>
                <p className="text-base-content opacity-70">
                  Analisis LLM canggih untuk pola keamanan kompleks dan rekomendasi yang sadar konteks.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <ArrowRight className="w-6 h-6 text-secondary mr-3" />
                  <h3 className="card-title">Hasil Instan</h3>
                </div>
                <p className="text-base-content opacity-70">
                  Dapatkan hasil analisis dalam hitungan menit, bukan hari. Sempurna untuk siklus pengembangan yang cepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-base-content">
              Cara Kerja Analisis
            </h2>
            <p className="text-xl text-base-content opacity-70 max-w-2xl mx-auto">
              Analisis keamanan otomatis yang didukung oleh tools standar industri dan AI
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ul className="steps steps-vertical lg:steps-horizontal w-full">
              <li className="step step-primary">
                <div className="text-center">
                  <div className="font-bold text-lg mb-2">Input Kontrak</div>
                  <p className="text-sm opacity-70">
                    Unggah file atau masukkan alamat kontrak
                  </p>
                </div>
              </li>
              <li className="step step-primary">
                <div className="text-center">
                  <div className="font-bold text-lg mb-2">Analisis Slither</div>
                  <p className="text-sm opacity-70">
                    Analisis statis untuk kerentanan
                  </p>
                </div>
              </li>
              <li className="step step-primary">
                <div className="text-center">
                  <div className="font-bold text-lg mb-2">
                    Peningkatan AI
                  </div>
                  <p className="text-sm opacity-70">
                    Analisis LLM untuk wawasan yang lebih dalam
                  </p>
                </div>
              </li>
              <li className="step step-primary">
                <div className="text-center">
                  <div className="font-bold text-lg mb-2">Laporan Keamanan</div>
                  <p className="text-sm opacity-70">
                    Temuan detail dan rekomendasi
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Mulai Analisis Smart Contract Anda Sekarang
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Unggah kontrak Anda atau masukkan alamat untuk mendapatkan analisis keamanan instan. 
            Didukung oleh Slither dan AI untuk deteksi kerentanan yang komprehensif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-secondary btn-lg">
              <Upload className="w-5 h-5 mr-2" />
              Unggah Kontrak
            </button>
            <button className="btn btn-outline btn-lg text-primary-content border-primary-content">
              <Search className="w-5 h-5 mr-2" />
              analisis dengan alamat token
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Tentang</a>
          <a className="link link-hover">Cara Kerja</a>
          <a className="link link-hover">Dokumentasi</a>
          <a className="link link-hover">Kebijakan Privasi</a>
        </nav>
        <aside>
          <p className="font-bold">
            SmartAudit
            <br />
            Analisis Keamanan Smart Contract Bertenaga AI
          </p>
          <p>Copyright © 2024 - Semua hak dilindungi</p>
        </aside>
      </footer>
    </div>
  );
};

export default LandingPage;
