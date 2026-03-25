import fotoProfil from '../img/foto-regina.jpeg'

function Regina() {
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
          <h1 className="text-2xl font-bold text-gray-800">Regina Sekar Melati</h1>
          <div className="mt-2 text-gray-600 space-y-1">
            <p>🎓 <span className="font-medium">Kelas:</span> T2C</p>
            <p>📚 <span className="font-medium">Prodi:</span> Teknologi Informasi</p>
            <p>📍 <span className="font-medium">Domisili:</span> Malang, Jawa Timur</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">Tentang Diri</h2>
          <p className="text-gray-700 leading-relaxed">
            Halo! Saya Regina Sekar Melati, seorang mahasiswi program studi Teknologi Informasi di Universitas Brawijaya yang memiliki ketertarikan pada bidang teknologi. Saya senang mempelajari hal baru serta mengembangkan kemampuan soft skill maupun hard skill yang belum pernah saya miliki sebelumnya. Saya dikenal sebagai pribadi yang disiplin dan komunikatif. Selain kuliah, saya juga mengikuti kegiatan seperti organisasi kampus, UKM, serta beberapa kepanitiaan. Saya berusaha untuk mencari pengalaman sebanyak-banyaknya dari manapun dan dari siapapun sekaligus memperluas wawasan dan relasi. Saya percaya setiap pengalaman adalah kesempatan untuk belajar dan berkembang. Ke depannya, saya ingin terus meningkatkan kemampuan diri serta memberikan kontribusi positif di bidang teknologi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Regina;