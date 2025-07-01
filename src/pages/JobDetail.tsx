
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Briefcase, Clock, DollarSign, Building2, Calendar, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const JobDetail = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock data - in real app this would come from API
  const job = {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovation",
    location: "Jakarta",
    salary: "15-25 Juta",
    type: "Full-time",
    category: "IT & Software",
    posted: "2 hari yang lalu",
    remote: false,
    description: `Kami mencari Senior Frontend Developer yang berpengalaman untuk bergabung dengan tim engineering kami. Anda akan bertanggung jawab untuk mengembangkan dan memelihara aplikasi web modern menggunakan teknologi terdepan.

Sebagai Senior Frontend Developer, Anda akan bekerja dalam lingkungan yang kolaboratif dan dinamis, berkontribusi pada produk yang digunakan oleh ribuan pengguna setiap hari.`,
    requirements: [
      "Minimal 4 tahun pengalaman dalam pengembangan frontend",
      "Mahir dalam React.js, TypeScript, dan modern JavaScript",
      "Pengalaman dengan state management (Redux, Zustand, atau Context API)",
      "Familiar dengan CSS preprocessors (Sass/SCSS) dan CSS-in-JS",
      "Pengalaman dengan build tools (Webpack, Vite, atau Parcel)",
      "Pemahaman yang baik tentang responsive design dan cross-browser compatibility",
      "Pengalaman dengan version control (Git) dan collaborative development",
      "Kemampuan komunikasi yang baik dalam bahasa Indonesia dan Inggris"
    ],
    responsibilities: [
      "Mengembangkan dan memelihara aplikasi web frontend yang scalable dan performant",
      "Berkolaborasi dengan tim design untuk mengimplementasikan UI/UX yang menarik",
      "Melakukan code review dan mentoring kepada junior developers",
      "Optimasi performa aplikasi dan memastikan best practices",
      "Berpartisipasi dalam sprint planning dan technical discussions",
      "Menulis dan memelihara dokumentasi teknis",
      "Debugging dan troubleshooting issues yang kompleks"
    ],
    benefits: [
      "Gaji kompetitif sesuai pengalaman",
      "Asuransi kesehatan untuk karyawan dan keluarga",
      "Flexible working hours dan work from home options",
      "Annual bonus berdasarkan performa",
      "Budget untuk professional development dan training",
      "Laptop dan equipment yang disediakan perusahaan",
      "Paid time off dan cuti melahirkan",
      "Team building dan company retreat"
    ],
    company: {
      name: "Tech Innovation",
      industry: "Technology",
      size: "51-200 karyawan",
      founded: "2018",
      website: "https://techinnovation.com",
      description: "Tech Innovation adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital inovatif untuk berbagai industri. Kami berkomitmen untuk menciptakan produk yang memberikan dampak positif bagi masyarakat."
    }
  };

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
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Beranda</Link>
            <span>/</span>
            <Link to="/jobs" className="hover:text-blue-600">Lowongan</Link>
            <span>/</span>
            <span className="text-gray-900">{job.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Job Header */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h1>
                      <p className="text-lg text-blue-600 font-medium mb-3">{job.company.name}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.posted}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setIsBookmarked(!isBookmarked)}
                    >
                      <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-green-600">
                      <DollarSign className="h-5 w-5 mr-1" />
                      <span className="text-lg font-semibold">Rp {job.salary}</span>
                    </div>
                    <Badge variant="secondary">{job.category}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Deskripsi Pekerjaan</h2>
                <div className="prose prose-gray max-w-none">
                  {job.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Persyaratan</h2>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Tanggung Jawab</h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefit & Fasilitas</h2>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Apply Card */}
            <Card className="mb-6 sticky top-6">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    Rp {job.salary}
                  </div>
                  <p className="text-sm text-gray-600">per bulan</p>
                </div>

                <Button size="lg" className="w-full mb-4">
                  Lamar Sekarang
                </Button>

                <Button variant="outline" size="lg" className="w-full">
                  Simpan Lowongan
                </Button>

                <Separator className="my-4" />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tipe Pekerjaan:</span>
                    <span className="font-medium">{job.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kategori:</span>
                    <span className="font-medium">{job.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lokasi:</span>
                    <span className="font-medium">{job.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Diposting:</span>
                    <span className="font-medium">{job.posted}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Tentang Perusahaan</h3>
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{job.company.name}</h4>
                    <p className="text-sm text-gray-600">{job.company.industry}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ukuran:</span>
                    <span className="font-medium">{job.company.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Didirikan:</span>
                    <span className="font-medium">{job.company.founded}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-4">
                  {job.company.description}
                </p>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to={`/companies/${job.company.name}`}>
                    Lihat Profil Perusahaan
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
