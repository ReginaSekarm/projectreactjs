import fotoProfil from '../img/foto-sinta.jpeg'

function sinta() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-900 h-48 relative">
        <div className="absolute -bottom-16 left-8">
          <img
            src={fotoProfil}
            alt="Foto Profil"
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 pt-20 pb-8">
        <div className="bg-white rounded-xl shadow p-6 mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Desinta Rahma</h1>
          <div className="mt-2 text-gray-600 space-y-1">
            <p>🎓 <span className="font-medium">Kelas:</span> T2C</p>
            <p>📚 <span className="font-medium">Prodi:</span> Teknologi Informasi</p>
            <p>📍 <span className="font-medium">Domisili:</span> Malang, Jawa Timur</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">Tentang Diri</h2>
          <p className="text-gray-700 leading-relaxed">
            Halo, nama saya Desinta Rahma, mahasiswi D3 Teknologi Informasi di Universitas Brawijaya, Jawa Timur. Saya adalah pribadi yang ramah dan senang berkenalan dengan banyak orang, terlebih jika bisa bekerja sama dan saling berbagi ide bagi saya itu adalah hal yang menyenangkan.
            Di dunia teknologi, saya senang mencoba hal-hal baru dan berpikir kreatif dalam menyelesaikan setiap tantangan. Memang masih banyak yang perlu dipelajari, tapi justru itulah yang membuat prosesnya terasa seru dan bermakna. Selain kuliah, saya juga suka bermain badminton untuk menjaga semangat dan kesehatan. Di waktu luang, saya gemar bermain game yang ternyata juga cukup membantu dalam melatih fokus dan strategi berpikir.
            Harapan saya ke depannya adalah terus berkembang di bidang teknologi dan suatu saat bisa menciptakan sesuatu yang bermanfaat bagi banyak orang. Masih panjang perjalanannya, tapi saya yakin dengan usaha dan kerja keras semuanya bisa tercapai.
          </p>
        </div>
      </div>
    </div>
  );
}

export default sinta;