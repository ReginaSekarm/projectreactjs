import { Link } from 'react-router-dom';
import teamPhoto from '../img/foto-tim.jpeg';

const teamMembers = [
  { name: "Nilam Dwi Widya Ningrum", to: "/nilam" },
  { name: "Regina Sekar Melati",     to: "/regina" },
  { name: "Desinta Rahma",           to: "/sinta" },
];

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

        {/* Header */}
        <div className="text-center px-6 py-5 border-b border-gray-100">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
            Profil Tim · Universitas Brawijaya
          </p>
          <h1 className="text-2xl font-bold text-gray-900">INCES</h1>
        </div>

        {/* Team Photo */}
        <div className="w-full overflow-hidden" style={{ height: "360px" }}>
          <img
            src={teamPhoto}
            alt="Foto Tim"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        </div>

        {/* Member Names */}
        <div className="flex divide-x divide-gray-100 border-t border-gray-100">
          {teamMembers.map((member) => (
            <Link
              key={member.to}
              to={member.to}
              className="flex-1 py-4 px-2 text-center hover:bg-gray-50 transition-colors"
            >
              <p className="text-xs text-gray-400 mb-1">Anggota</p>
              <p className="text-xs font-semibold text-gray-800 leading-snug">
                {member.name}
              </p>
              <span className="text-xs text-blue-400 mt-1 inline-block">
                Lihat Profil →
              </span>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center py-3 border-t border-gray-100">
          <p className="text-xs text-gray-300">
            Building Up Noble Future · Universitas Brawijaya
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;