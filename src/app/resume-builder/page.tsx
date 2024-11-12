import ResumeForm from "../components/resumeForm";
import React from "react";

export default function resume(){

return(
  <div>
  
<div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Create Your Professional Resume</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">Why Create a Resume with Us?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Professional templates designed by career experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>ATS-friendly formats to pass applicant tracking systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Easy-to-use builder with real-time preview</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Export options in multiple formats (PDF, Print)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">Resume Writing Tips</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Use action verbs and quantifiable achievements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Keep your content clear, concise, and relevant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Customize for each job application</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Include keywords from the job description</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Getting Started</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-2">1</div>
                <p className="text-gray-600">Fill in your personal and professional details in the form below</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-2">2</div>
                <p className="text-gray-600">Preview your resume and make any necessary adjustments</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-2">3</div>
                <p className="text-gray-600">Download your professionally formatted resume as PDF</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResumeForm />


</div> 
)


}
