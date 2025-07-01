
import { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, User, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Register = () => {
  const [jobSeekerForm, setJobSeekerForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    location: "",
    experience: "",
    skills: ""
  });

  const [employerForm, setEmployerForm] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    website: "",
    industry: "",
    companySize: "",
    location: "",
    description: ""
  });

  const handleJobSeekerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job seeker registration:", jobSeekerForm);
    // Handle job seeker registration
  };

  const handleEmployerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Employer registration:", employerForm);
    // Handle employer registration
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
              <Link to="/jobs" className="text-gray-700 hover:text-blue-600 font-medium">Lowongan</Link>
              <Link to="/companies" className="text-gray-700 hover:text-blue-600 font-medium">Perusahaan</Link>
              <Link to="/register" className="text-blue-600 font-medium">Daftar</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link to="/login">Masuk</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Daftar Akun Baru</h1>
          <p className="text-gray-600">Pilih jenis akun yang sesuai dengan kebutuhan Anda</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Formulir Pendaftaran</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="jobseeker" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="jobseeker" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Pencari Kerja</span>
                </TabsTrigger>
                <TabsTrigger value="employer" className="flex items-center space-x-2">
                  <Building2 className="h-4 w-4" />
                  <span>Perusahaan</span>
                </TabsTrigger>
              </TabsList>

              {/* Job Seeker Registration */}
              <TabsContent value="jobseeker">
                <form onSubmit={handleJobSeekerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nama Lengkap</Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        value={jobSeekerForm.fullName}
                        onChange={(e) => setJobSeekerForm({...jobSeekerForm, fullName: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="nama@email.com"
                        value={jobSeekerForm.email}
                        onChange={(e) => setJobSeekerForm({...jobSeekerForm, email: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Minimal 8 karakter"
                        value={jobSeekerForm.password}
                        onChange={(e) => setJobSeekerForm({...jobSeekerForm, password: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Ulangi password"
                        value={jobSeekerForm.confirmPassword}
                        onChange={(e) => setJobSeekerForm({...jobSeekerForm, confirmPassword: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="08123456789"
                        value={jobSeekerForm.phone}
                        onChange={(e) => setJobSeekerForm({...jobSeekerForm, phone: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Lokasi</Label>
                      <Input
                        id="location"
                        type="text"
                        placeholder="Kota, Provinsi"
                        value={jobSeekerForm.location}
                        onChange={(e) => setJobSeekerForm({...jobSeekerForm, location: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Pengalaman Kerja</Label>
                      <Select 
                        value={jobSeekerForm.experience}
                        onValueChange={(value) => setJobSeekerForm({...jobSeekerForm, experience: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih pengalaman" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fresh-graduate">Fresh Graduate</SelectItem>
                          <SelectItem value="1-3">1-3 Tahun</SelectItem>
                          <SelectItem value="3-5">3-5 Tahun</SelectItem>
                          <SelectItem value="5-10">5-10 Tahun</SelectItem>
                          <SelectItem value="10+">10+ Tahun</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Keahlian (Opsional)</Label>
                    <Textarea
                      id="skills"
                      placeholder="Sebutkan keahlian Anda, pisahkan dengan koma"
                      value={jobSeekerForm.skills}
                      onChange={(e) => setJobSeekerForm({...jobSeekerForm, skills: e.target.value})}
                      rows={3}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Daftar sebagai Pencari Kerja
                  </Button>
                </form>
              </TabsContent>

              {/* Employer Registration */}
              <TabsContent value="employer">
                <form onSubmit={handleEmployerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Nama Perusahaan</Label>
                      <Input
                        id="companyName"
                        type="text"
                        placeholder="PT. Nama Perusahaan"
                        value={employerForm.companyName}
                        onChange={(e) => setEmployerForm({...employerForm, companyName: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyEmail">Email Perusahaan</Label>
                      <Input
                        id="companyEmail"
                        type="email"
                        placeholder="hr@perusahaan.com"
                        value={employerForm.email}
                        onChange={(e) => setEmployerForm({...employerForm, email: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyPassword">Password</Label>
                      <Input
                        id="companyPassword"
                        type="password"
                        placeholder="Minimal 8 karakter"
                        value={employerForm.password}
                        onChange={(e) => setEmployerForm({...employerForm, password: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyConfirmPassword">Konfirmasi Password</Label>
                      <Input
                        id="companyConfirmPassword"
                        type="password"
                        placeholder="Ulangi password"
                        value={employerForm.confirmPassword}
                        onChange={(e) => setEmployerForm({...employerForm, confirmPassword: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyPhone">Telepon Perusahaan</Label>
                      <Input
                        id="companyPhone"
                        type="tel"
                        placeholder="021-12345678"
                        value={employerForm.phone}
                        onChange={(e) => setEmployerForm({...employerForm, phone: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Website (Opsional)</Label>
                      <Input
                        id="website"
                        type="url"
                        placeholder="https://perusahaan.com"
                        value={employerForm.website}
                        onChange={(e) => setEmployerForm({...employerForm, website: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Industri</Label>
                      <Select 
                        value={employerForm.industry}
                        onValueChange={(value) => setEmployerForm({...employerForm, industry: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih industri" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="other">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companySize">Ukuran Perusahaan</Label>
                      <Select 
                        value={employerForm.companySize}
                        onValueChange={(value) => setEmployerForm({...employerForm, companySize: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih ukuran perusahaan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 karyawan</SelectItem>
                          <SelectItem value="11-50">11-50 karyawan</SelectItem>
                          <SelectItem value="51-200">51-200 karyawan</SelectItem>
                          <SelectItem value="201-500">201-500 karyawan</SelectItem>
                          <SelectItem value="500+">500+ karyawan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="companyLocation">Lokasi Perusahaan</Label>
                      <Input
                        id="companyLocation"
                        type="text"
                        placeholder="Alamat lengkap perusahaan"
                        value={employerForm.location}
                        onChange={(e) => setEmployerForm({...employerForm, location: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Deskripsi Perusahaan</Label>
                    <Textarea
                      id="description"
                      placeholder="Ceritakan tentang perusahaan Anda"
                      value={employerForm.description}
                      onChange={(e) => setEmployerForm({...employerForm, description: e.target.value})}
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Daftar sebagai Perusahaan
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-blue-600 hover:underline font-medium">
                  Masuk di sini
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
