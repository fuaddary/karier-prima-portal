
import { useState } from "react";
import { Search, MapPin, Briefcase, Filter, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovation",
      location: "Jakarta",
      salary: "15-25 Juta",
      type: "Full-time",
      category: "IT & Software",
      posted: "2 hari yang lalu",
      remote: false
    },
    {
      id: 2,
      title: "Digital Marketing Manager",
      company: "Creative Agency",
      location: "Bandung",
      salary: "10-18 Juta",
      type: "Full-time",
      category: "Marketing",
      posted: "1 hari yang lalu",
      remote: true
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "FinTech Solutions",
      location: "Surabaya",
      salary: "12-20 Juta",
      type: "Remote",
      category: "IT & Software",
      posted: "3 hari yang lalu",
      remote: true
    },
    {
      id: 4,
      title: "Sales Executive",
      company: "Global Corp",
      location: "Jakarta",
      salary: "8-15 Juta",
      type: "Full-time",
      category: "Sales",
      posted: "1 minggu yang lalu",
      remote: false
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "Yogyakarta",
      salary: "9-16 Juta",
      type: "Part-time",
      category: "Design",
      posted: "4 hari yang lalu",
      remote: true
    },
    {
      id: 6,
      title: "Backend Developer",
      company: "Tech Innovation",
      location: "Jakarta",
      salary: "18-28 Juta",
      type: "Full-time",
      category: "IT & Software",
      posted: "5 hari yang lalu",
      remote: false
    }
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
              <Link to="/jobs" className="text-blue-600 font-medium">Lowongan</Link>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari pekerjaan atau perusahaan"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Lokasi"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="it">IT & Software</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="finance">Keuangan</SelectItem>
                <SelectItem value="sales">Penjualan</SelectItem>
                <SelectItem value="design">Design</SelectItem>
              </SelectContent>
            </Select>

            <Button>
              <Search className="mr-2 h-4 w-4" />
              Cari
            </Button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter Lanjutan
            </Button>
            <span className="text-sm text-gray-600">{jobs.length} lowongan ditemukan</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Filter</h3>
                  
                  {/* Job Type */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-3">Tipe Pekerjaan</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fulltime" />
                        <label htmlFor="fulltime" className="text-sm text-gray-600">Full-time</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="parttime" />
                        <label htmlFor="parttime" className="text-sm text-gray-600">Part-time</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remote" />
                        <label htmlFor="remote" className="text-sm text-gray-600">Remote</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="contract" />
                        <label htmlFor="contract" className="text-sm text-gray-600">Kontrak</label>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-3">Lokasi</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="jakarta" />
                        <label htmlFor="jakarta" className="text-sm text-gray-600">Jakarta</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="bandung" />
                        <label htmlFor="bandung" className="text-sm text-gray-600">Bandung</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="surabaya" />
                        <label htmlFor="surabaya" className="text-sm text-gray-600">Surabaya</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="yogyakarta" />
                        <label htmlFor="yogyakarta" className="text-sm text-gray-600">Yogyakarta</label>
                      </div>
                    </div>
                  </div>

                  {/* Salary Range */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-3">Rentang Gaji</h4>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih rentang gaji" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-5">0 - 5 Juta</SelectItem>
                        <SelectItem value="5-10">5 - 10 Juta</SelectItem>
                        <SelectItem value="10-15">10 - 15 Juta</SelectItem>
                        <SelectItem value="15-25">15 - 25 Juta</SelectItem>
                        <SelectItem value="25+">25+ Juta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Jobs List */}
          <div className={showFilters ? "lg:col-span-3" : "lg:col-span-4"}>
            <div className="space-y-4">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Building2 className="h-6 w-6 text-blue-600" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              <Link to={`/jobs/${job.id}`} className="hover:text-blue-600">
                                {job.title}
                              </Link>
                            </h3>
                            <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {job.location}
                                {job.remote && <span className="ml-1 text-green-600">(Remote)</span>}
                              </div>
                              <div className="flex items-center">
                                <Briefcase className="h-4 w-4 mr-1" />
                                {job.type}
                              </div>
                              <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                                {job.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 md:mt-0 md:ml-6 text-right">
                        <div className="text-lg font-semibold text-green-600 mb-2">
                          Rp {job.salary}
                        </div>
                        <div className="text-sm text-gray-500 mb-3">
                          {job.posted}
                        </div>
                        <Button asChild>
                          <Link to={`/jobs/${job.id}`}>Lihat Detail</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <Button variant="outline" disabled>
                  Sebelumnya
                </Button>
                <Button variant="outline" className="bg-blue-600 text-white">
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">
                  Selanjutnya
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
