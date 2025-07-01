
import { useState } from "react";
import { Search, MapPin, Building2, Users, Briefcase, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovation",
      location: "Jakarta",
      salary: "15-25 Juta",
      type: "Full-time",
      posted: "2 hari yang lalu"
    },
    {
      id: 2,
      title: "Digital Marketing Manager",
      company: "Creative Agency",
      location: "Bandung",
      salary: "10-18 Juta",
      type: "Full-time",
      posted: "1 hari yang lalu"
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "FinTech Solutions",
      location: "Surabaya",
      salary: "12-20 Juta",
      type: "Remote",
      posted: "3 hari yang lalu"
    }
  ];

  const topCompanies = [
    { name: "Tech Innovation", jobs: 15, logo: "TI" },
    { name: "Creative Agency", jobs: 8, logo: "CA" },
    { name: "FinTech Solutions", jobs: 12, logo: "FS" },
    { name: "Global Corp", jobs: 20, logo: "GC" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">JobPortal</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Beranda</Link>
              <Link to="/jobs" className="text-gray-700 hover:text-blue-600 font-medium">Lowongan</Link>
              <Link to="/companies" className="text-gray-700 hover:text-blue-600 font-medium">Perusahaan</Link>
              <Link to="/register" className="text-gray-700 hover:text-blue-600 font-medium">Daftar</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link to="/login">Masuk</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Daftar</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Temukan Karir Impian Anda
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Ribuan lowongan kerja dari perusahaan terpercaya menanti Anda
          </p>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Cari pekerjaan, posisi, atau perusahaan"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="pl-10 h-12 text-gray-900"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Lokasi"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10 h-12 text-gray-900"
                />
              </div>

              <Select>
                <SelectTrigger className="h-12 text-gray-900">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">IT & Software</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="finance">Keuangan</SelectItem>
                  <SelectItem value="sales">Penjualan</SelectItem>
                  <SelectItem value="hr">HR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button size="lg" className="w-full md:w-auto mt-6 bg-green-600 hover:bg-green-700">
              <Search className="mr-2 h-5 w-5" />
              Cari Lowongan
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,000+</div>
              <div className="text-gray-600">Lowongan Aktif</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Perusahaan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600">Pencari Kerja</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lowongan Terpopuler</h2>
            <p className="text-gray-600">Temukan peluang karir terbaik dari perusahaan unggulan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {job.title}
                      </h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                    </div>
                    <Star className="h-5 w-5 text-gray-300" />
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span className="text-sm">{job.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-green-600">
                      Rp {job.salary}
                    </span>
                    <span className="text-sm text-gray-500">{job.posted}</span>
                  </div>

                  <Button className="w-full mt-4" asChild>
                    <Link to={`/jobs/${job.id}`}>Lihat Detail</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/jobs">Lihat Semua Lowongan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Companies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perusahaan Terpercaya</h2>
            <p className="text-gray-600">Bergabunglah dengan perusahaan-perusahaan terbaik</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {topCompanies.map((company, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-lg">{company.logo}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{company.name}</h3>
                  <p className="text-sm text-gray-600">{company.jobs} lowongan tersedia</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/companies">Lihat Semua Perusahaan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Briefcase className="h-6 w-6" />
                <span className="text-lg font-bold">JobPortal</span>
              </div>
              <p className="text-gray-400">
                Platform lowongan kerja terdepan di Indonesia
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Untuk Pencari Kerja</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/jobs" className="hover:text-white">Cari Lowongan</Link></li>
                <li><Link to="/companies" className="hover:text-white">Perusahaan</Link></li>
                <li><Link to="/register" className="hover:text-white">Daftar</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Untuk Perusahaan</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/employer/register" className="hover:text-white">Daftar Perusahaan</Link></li>
                <li><Link to="/employer/post-job" className="hover:text-white">Pasang Lowongan</Link></li>
                <li><Link to="/employer/dashboard" className="hover:text-white">Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Hubungi Kami</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@jobportal.com</li>
                <li>Telepon: (021) 1234-5678</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JobPortal. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
