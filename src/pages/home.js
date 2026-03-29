import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl shadow p-8 text-center">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Halaman Profil Tim</h1>
        <div className="space-y-3">
          <Link to="/regina" className="block bg-blue-900 text-white rounded-lg px-6 py-3 hover:bg-blue-700">
            Regina Sekar Melati
          </Link>
          <Link to="/nilam" className="block bg-blue-900 text-white rounded-lg px-6 py-3 hover:bg-blue-700">
            Nilam Dwi Widya Ningrum
          </Link>
          <Link to="/sinta" className="block bg-blue-900 text-white rounded-lg px-6 py-3 hover:bg-blue-700">
            Desinta Rahma
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;