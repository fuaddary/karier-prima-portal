
import { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, Plus, Edit, Trash2, Eye, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Admin = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovation",
      location: "Jakarta",
      salary: "15-25 Juta",
      type: "Full-time",
      status: "Active",
      posted: "2024-01-15",
      applications: 25
    },
    {
      id: 2,
      title: "Digital Marketing Manager",
      company: "Creative Agency",
      location: "Bandung",
      salary: "10-18 Juta",
      type: "Full-time",
      status: "Active",
      posted: "2024-01-14",
      applications: 18
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "FinTech Solutions",
      location: "Surabaya",
      salary: "12-20 Juta",
      type: "Remote",
      status: "Inactive",
      posted: "2024-01-12",
      applications: 12
    }
  ]);

  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Tech Innovation",
      industry: "Technology",
      location: "Jakarta",
      jobs: 15,
      status: "Verified"
    },
    {
      id: 2,
      name: "Creative Agency",
      industry: "Marketing",
      location: "Bandung",
      jobs: 8,
      status: "Pending"
    },
    {
      id: 3,
      name: "FinTech Solutions",
      industry: "Financial Technology",
      location: "Surabaya",
      jobs: 12,
      status: "Verified"
    }
  ]);

  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "",
    description: ""
  });

  const [isAddJobOpen, setIsAddJobOpen] = useState(false);

  const handleAddJob = () => {
    const job = {
      id: jobs.length + 1,
      ...newJob,
      status: "Active",
      posted: new Date().toISOString().split('T')[0],
      applications: 0
    };
    setJobs([...jobs, job]);
    setNewJob({
      title: "",
      company: "",
      location: "",
      salary: "",
      type: "",
      description: ""
    });
    setIsAddJobOpen(false);
  };

  const deleteJob = (id: number) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const toggleJobStatus = (id: number) => {
    setJobs(jobs.map(job => 
      job.id === id 
        ? { ...job, status: job.status === "Active" ? "Inactive" : "Active" }
        : job
    ));
  };

  const stats = {
    totalJobs: jobs.length,
    activeJobs: jobs.filter(job => job.status === "Active").length,
    totalCompanies: companies.length,
    totalApplications: jobs.reduce((sum, job) => sum + job.applications, 0)
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
                <span className="text-xl font-bold text-gray-900">JobPortal Admin</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Kembali ke Situs</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Lowongan</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalJobs}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Lowongan Aktif</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.activeJobs}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Building2 className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Perusahaan</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalCompanies}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Aplikasi</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Jobs Management */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Manajemen Lowongan Kerja</CardTitle>
              <Dialog open={isAddJobOpen} onOpenChange={setIsAddJobOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Tambah Lowongan
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Tambah Lowongan Baru</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Judul Pekerjaan</Label>
                      <Input
                        id="jobTitle"
                        value={newJob.title}
                        onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                        placeholder="Masukkan judul pekerjaan"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobCompany">Perusahaan</Label>
                      <Input
                        id="jobCompany"
                        value={newJob.company}
                        onChange={(e) => setNewJob({...newJob, company: e.target.value})}
                        placeholder="Nama perusahaan"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobLocation">Lokasi</Label>
                      <Input
                        id="jobLocation"
                        value={newJob.location}
                        onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                        placeholder="Lokasi pekerjaan"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobSalary">Gaji</Label>
                      <Input
                        id="jobSalary"
                        value={newJob.salary}
                        onChange={(e) => setNewJob({...newJob, salary: e.target.value})}
                        placeholder="10-15 Juta"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobType">Tipe Pekerjaan</Label>
                      <Select 
                        value={newJob.type}
                        onValueChange={(value) => setNewJob({...newJob, type: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih tipe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full-time">Full-time</SelectItem>
                          <SelectItem value="Part-time">Part-time</SelectItem>
                          <SelectItem value="Remote">Remote</SelectItem>
                          <SelectItem value="Contract">Contract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="jobDescription">Deskripsi</Label>
                      <Textarea
                        id="jobDescription"
                        value={newJob.description}
                        onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                        placeholder="Deskripsi pekerjaan"
                        rows={4}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-4">
                    <Button variant="outline" onClick={() => setIsAddJobOpen(false)}>
                      Batal
                    </Button>
                    <Button onClick={handleAddJob}>
                      Simpan
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pekerjaan</TableHead>
                  <TableHead>Perusahaan</TableHead>
                  <TableHead>Lokasi</TableHead>
                  <TableHead>Gaji</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Aplikasi</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{job.title}</div>
                        <div className="text-sm text-gray-500">{job.type}</div>
                      </div>
                    </TableCell>
                    <TableCell>{job.company}</TableCell>
                    <TableCell>{job.location}</TableCell>
                    <TableCell>Rp {job.salary}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={job.status === "Active" ? "default" : "secondary"}
                        className={job.status === "Active" ? "bg-green-100 text-green-800" : ""}
                      >
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{job.applications}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => toggleJobStatus(job.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => deleteJob(job.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Companies Management */}
        <Card>
          <CardHeader>
            <CardTitle>Manajemen Perusahaan</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Perusahaan</TableHead>
                  <TableHead>Industri</TableHead>
                  <TableHead>Lokasi</TableHead>
                  <TableHead>Lowongan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companies.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell className="font-medium">{company.name}</TableCell>
                    <TableCell>{company.industry}</TableCell>
                    <TableCell>{company.location}</TableCell>
                    <TableCell>{company.jobs}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={company.status === "Verified" ? "default" : "secondary"}
                        className={company.status === "Verified" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                      >
                        {company.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
