import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from "react";
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentLogIn from './components/StudentLogIn';
import StudentRegister from './components/StudentRegister';
import CompanyLogin from './components/CompanyLogIn';
import CompanyRegister from './components/CompanyRegister'
import AdminLogin from './components/AdminLogIn';
import AdminRegister from './components/AdminRegister';
import CompanyHome from './components/CompanyHome';
import StudentProfile from './components/StudentProfile';
import EditStudentProfile from './components/EditStudentProfile';
import ChatPage from './components/chat';
import CompanyJobPosting from './components/CompanyJobPosting';
import HiringCompanies from './components/HiringCompanies';
import StudentHiringView from './components/StudentHiringView';
import AllJobPosted from './components/AllJobPosted';
import LOSA from './components/ListOfStudentApplied'
import InterviewForm from './components/InterviewForm';
import Createresume from './components/createResume';
// import UploadResume from './components/uploadResume';
import ViewCandidateResume from './components/ResumeViewCompany'
import StudentSlotSelection from './components/StudentSlotSelection'
import StudentSchedule from './components/StudentSchedule'
import StudentScheduled from './components/StudentScheduled'
import InterviewCompany from './components/InteviewCompany'
import CareerCounselling from './components/CareerCounselling'
import StudentHome from './components/StudentHome'
import SystemEngineering from './components/SystemEngineer'
import ElecticalEngineering from './components/ElectricalEngineer'
import ChemicalEngineering from './components/ChemicalEngineer'
import BigDataEngineering from './components/BigDataEngineer'
import AerospaceEngineering from './components/AerospaceEngineer'
import SoftwareDeveloper from './components/SoftwareDeveloper'
import Uiux from './components/UiUxDesigner'
import CHEngineer from './components/ComputerHardwareEngineer'
import StructuralEngineer from './components/StructuralEngineer'
import StudentAnalyticsandRepo from './components/StudentAnalyticsandRepo';
import StudentsAcademics from './components/StudentsAcademics';
import AdminHome from './components/AdminHome';
import AdminCompany from './components/AdminCompany'
import AdminJobPosting from './components/AdminJobPosting'
import AdminPlacedStudent from './components/AdminPlacedStudent'
import AdminStudentView from './components/AdminStudentView'
import AdminStudentApplied from './components/AdminStudentsApplied'
import AdminStudent from './components/AdminStudent'
import AdminJobDetails from './components/AdminJobDetails'
import Resume from './components/Resume'
import ResumeDetail from'./components/ResumeDetail'
import StudentCoverLetter from './components/StudentCoverLetter';
import CoverLetter from './components/CoverLetter';
import CompanyInterview from './components/CompanyInterview'
import StudentResume from './components/PdfViewer';
import FeedbackTable from './components/Feedback';
import AdminCompanyView from './components/AdminCompanyView';
import AboutUs from './components/home/about/AboutUs';
import Courses from './components/home/course/Courses';
import Team from './components/home/team/Team';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ResumeCreate' element={<ResumeDetail />} />
          <Route path='/createResume' element={<Createresume />} />
          <Route path='/adminCompanyView' element={<AdminCompanyView />} />
          <Route path='/Feedback' element={<FeedbackTable />} />
          <Route path='/StudentResume' element={<StudentResume />} />
          <Route path='/CompanyInterview' element ={<CompanyInterview/>}/>
          <Route path='/StudentCoverLetter' element={<StudentCoverLetter />} />
          <Route path='/CoverLetter' element={<CoverLetter />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/admin/companies' element={<AdminCompany />} />
          <Route path='/admin/jobPosting' element={<AdminJobPosting />} />
          <Route path='/admin/students' element={<AdminStudent />} />
          <Route path='/admin/studentapplied' element={<AdminStudentApplied />} />
          <Route path='/admin/placedStudent' element={<AdminPlacedStudent />} />
          <Route path='/admin/jobDetails' element={<AdminJobDetails  />} />
          <Route path='/CareerCounseling' element={<CareerCounselling />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/admin/home' element={<AdminHome />} />
          <Route path='/StudentHome' element={<StudentHome />} />
          <Route path='/StudentLogIn' element={<StudentLogIn />} />
          <Route path='/CompanyLogIn' element={<CompanyLogin />} />
          <Route path='/StudentRegister' element={<StudentRegister />} />
          <Route path='/CompanyRegister' element={<CompanyRegister />} />
          <Route path='/AdminLogIn' element={<AdminLogin />} />
          <Route path='/AdminRegister' element={<AdminRegister />} />
          <Route path='/CompanyHome' element={<CompanyHome />} />
          <Route path='/StudentProfile' element={<StudentProfile />} />
          <Route path='/EditStudentProfile' element={<EditStudentProfile />} />
          <Route path='/chat' element={<ChatPage />} />
          <Route path='/NewJobPosting' element={<CompanyJobPosting />} />
          <Route path='/ALLJobRole' element={<HiringCompanies />} />
          <Route path='/JobDescription' element={<StudentHiringView />} />
          <Route path='/ViewJobPosting' element={<AllJobPosted />} />
          <Route path='/LOSA' element={<LOSA />} />
          <Route path='/scheduleInterview' element={<InterviewForm />} />
          <Route path='/StudentSlotSelection' element={<StudentSlotSelection />} />
          <Route path='/StudentSchedule' element={<StudentSchedule />} />
          <Route path='/StudentScheduled' element={<StudentScheduled />} />
          <Route path='/CompanyInterviewSchedule' element={<InterviewCompany />} />
          <Route path="/system-engineering" element={<SystemEngineering/>} />
          <Route path="/electrical-engineering" element={<ElecticalEngineering/>} />
          <Route path="/chemical-engineering" element={<ChemicalEngineering/>} />
          <Route path="/big-data-engineering" element={<BigDataEngineering/>} />
          <Route path="/aerospace-engineering" element={<AerospaceEngineering/>} />
          <Route path="/software-developer" element={<SoftwareDeveloper/>} />
          <Route path="/ui-ux-designer" element={<Uiux/>} />
          <Route path="/computer-hardware-engineer" element={<CHEngineer/>} />
          <Route path="/structural-engineer" element={<StructuralEngineer/>} />
          <Route path="/analytics-reporting" element={<StudentAnalyticsandRepo/>} />    
          <Route path="/student-academics" element={<StudentsAcademics/>}/>      
          <Route path='/viewCandidateResume' usn={localStorage.getItem('usn')} element={<ViewCandidateResume />} />
          <Route path="/AdminHome" element={<AdminHome/>}/>      
          <Route path="/AdminJobPosting" element={<AdminJobPosting/>}/>   
          <Route path="/AdminPlacedStudent" element={<AdminPlacedStudent/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/courses" element={<Courses />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App;
