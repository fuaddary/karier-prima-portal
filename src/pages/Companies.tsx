
import { useState } from "react";
import { Search, Building2, MapPin, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Companies = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const companies = [
    {
      id: 1,
      name: "Tech Innovation",
      logo: "TI",
      industry: "Technology",
      location: "Jakarta",
      size: "51-200 karyawan",
      jobs: 15,
      description: "Perusahaan teknologi yang berfokus pada pengembangan solusi digital inovatif untuk berbagai industri.",
      founded: "2018"
    },
    {
      id: 2,
      name: "Creative Agency",
      logo: "CA",
      industry: "Marketing & Advertising",
      location: "Bandung",
      size: "11-50 karyawan",
      jobs: 8,
      description: "Agensi kreatif yang mengkhususkan diri dalam branding, digital marketing, dan desain komunikasi visual.",
      founded: "2020"
    },
    {
      id: 3,
      name: "FinTech Solutions",
      logo: "FS",
      industry: "Financial Technology",
      location: "Surabaya",
      size: "51-200 karyawan",
      jobs: 12,
      description: "Penyedia solusi teknologi finansial untuk memudahkan transaksi dan pengelolaan keuangan digital.",
      founded: "2019"
    },
    {
      id: 4,
      name: "Global Corp",
      logo: "GC",
      industry: "Manufacturing",
      location: "Jakarta",
      size: "500+ karyawan",
      jobs: 20,
      description: "Perusahaan manufaktur multinasional dengan fokus pada produk konsumen dan solusi industri.",
      founded: "1995"
    },
    {
      id: 5,
      name: "Design Studio",
      logo: "DS",
      industry: "Design & Creative",
      location: "Yogyakarta",
      size: "11-50 karyawan",
      jobs: 6,
      description: "Studio desain yang menghadirkan solusi kreatif untuk branding, UI/UX, dan desain produk.",
      founded: "2021"
    },
    {
      id: 6,
      name: "EduTech Platform",
      logo: "EP",
      industry: "Education Technology",
      location: "Jakarta",
      size: "101-500 karyawan",
      jobs: 18,
      description: "Platform pendidikan online yang menyediakan kursus dan pelatihan profesional berkualitas tinggi.",
      founded: "2017"
    }
  ];

  const industries = [
    "Technology",
    "Marketing & Advertising",
    "Financial Technology",
    "Manufacturing",
    "Design & Creative",
    "Education Technology"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">JobPortal</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Beranda</Link>
              <Link to="/jobs" className="text-gray-700 hover:text-blue-600 font-medium">Lowongan</Link>
              <Link to="/companies" className="text-blue-600 font-medium">Perusahaan</Link>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Perusahaan Terpercaya</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan perusahaan impian Anda dan jelajahi peluang karir dari berbagai industri
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari nama perusahaan atau industri"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Cari Perusahaan
            </Button>
          </div>
        </div>

        {/* Industry Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter berdasarkan Industri</h3>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <Badge 
                key={industry} 
                variant="outline" 
                className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">{company.logo}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                      {company.name}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium mb-2">{company.industry}</p>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {company.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {company.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{company.size}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building2 className="h-4 w-4 mr-1" />
                      <span>Didirikan {company.founded}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-green-600 font-semibold">
                      {company.jobs} lowongan tersedia
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link to={`/companies/${company.id}`}>
                      Lihat Profil
                    </Link>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <Link to={`/jobs?company=${company.name}`}>
                      Lihat Lowongan
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Muat Lebih Banyak Perusahaan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Companies;
