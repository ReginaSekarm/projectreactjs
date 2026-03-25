function sinta() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-900 h-48 relative">
        <div className="absolute -bottom-16 left-8">
          <img
            src="https://via.placeholder.com/120"
            alt="Foto Profil"
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 pt-20 pb-8">
        <div className="bg-white rounded-xl shadow p-6 mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Rifqi Ardhian</h1>
          <div className="mt-2 text-gray-600 space-y-1">
            <p>🎓 <span className="font-medium">Kelas:</span> T2C</p>
            <p>📚 <span className="font-medium">Prodi:</span> Teknologi Informasi</p>
            <p>📍 <span className="font-medium">Domisili:</span> Malang, Jawa Timur</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">Tentang Diri</h2>
          <p className="text-gray-700 leading-relaxed">
            Tulis deskripsi diri minimal 100 kata di sini...
          </p>
        </div>
      </div>
    </div>
  );
}

export default sinta;