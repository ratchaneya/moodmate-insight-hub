
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PersonalInfo from "./pages/PersonalInfo";
import PersonalInfoTwo from "./pages/PersonalInfoTwo";
import PasswordLogin from "./pages/PasswordLogin";
import TermsPrivacy from "./pages/TermsPrivacy";
import PermissionRequest from "./pages/PermissionRequest";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import LifeDiary from "./pages/LifeDiary";
import ChatBot from "./pages/ChatBot";
import EvaluationForm from "./pages/EvaluationForm";
import EvaluationResults from "./pages/EvaluationResults";
import Podcast from "./pages/Podcast";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/personal-info-2" element={<PersonalInfoTwo />} />
            <Route path="/password-login" element={<PasswordLogin />} />
            <Route path="/terms-privacy" element={<TermsPrivacy />} />
            <Route path="/permission-request" element={<PermissionRequest />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/life-diary" element={<LifeDiary />} />
            <Route path="/chat-bot" element={<ChatBot />} />
            <Route path="/evaluation-form" element={<EvaluationForm />} />
            <Route path="/evaluation-results" element={<EvaluationResults />} />
            <Route path="/podcast" element={<Podcast />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
