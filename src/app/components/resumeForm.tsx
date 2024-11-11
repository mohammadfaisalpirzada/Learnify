'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';

export default function ResumeForm() {
  const [formData, setFormData] = useState({
    name: 'Muhammad Faisal Peerzada',
    address: 'Karachi, Pakistan',
    phone: '0345-8340-xxx',
    email: 'abcd@gmail.com',
    professionalExperience: 'Approx 20 years Teaching experience',
    education: 'Master of Education along B.Ed',
    skills: 'JavaScript, React, Node.js, Python',
    interests: 'Watching Movies',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const printRef = useRef<HTMLDivElement | null>(null);

  // Type the event parameter explicitly for TypeScript
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAsPDF = () => {
    if (printRef.current) {
      const originalContents = document.body.innerHTML;
      const printContents = printRef.current.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
    }
  };

  const PreviewContent = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto" ref={printRef}>
      {imagePreview && (
        <Image 
          src={imagePreview} 
          alt="Profile" 
          width={128} 
          height={128} 
          className="w-32 h-32 object-cover rounded-lg mx-auto mb-4"
        />
      )}
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">{formData.name}</h2>
      <div className="text-center space-y-1 mb-6">
        <p>{formData.address}</p>
        <p>{formData.phone}</p>
        <p>{formData.email}</p>
      </div>
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Professional Experience</h3>
          <p>{formData.professionalExperience}</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Education</h3>
          <p>{formData.education}</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Skills</h3>
          <p>{formData.skills}</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Interests</h3>
          <p className="whitespace-pre-line">{formData.interests}</p>
        </section>
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-white max-w-4xl mx-auto shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Resume Form</h1>

      {/* Image Upload Section */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <label className="w-48 font-medium">Profile Photo:</label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Upload Image
          </button>
        </div>
        {imagePreview && (
          <div className="ml-48">
            <Image 
              src={imagePreview} 
              alt="Profile Preview" 
              width={128} 
              height={128} 
              className="w-32 h-32 object-cover rounded-lg border-2 border-gray-300"
            />
          </div>
        )}
      </div>

      {/* Form Fields */}

      <div className="flex items-center">
          <label className="w-48 font-medium">Name:</label>
          <input 
            type="text" 
            name="name" 
            className="flex-1 p-2 border rounded" 
            value={formData.name} 
            onChange={handleInputChange} 
          />
        </div>

        <div className="flex items-center">
          <label className="w-48 font-medium">Address:</label>
          <input 
            type="text" 
            name="address" 
            className="flex-1 p-2 border rounded" 
            value={formData.address} 
            onChange={handleInputChange} 
          />
        </div>

      <div className="space-y-4">
        <div className="flex items-center">
          <label className="w-48 font-medium">Phone:</label>
          <input 
            type="text" 
            name="phone" 
            className="flex-1 p-2 border rounded" 
            value={formData.phone} 
            onChange={handleInputChange} 
          />
        </div>

        <div className="flex items-center">
          <label className="w-48 font-medium">Email:</label>
          <input 
            type="text" 
            name="email" 
            className="flex-1 p-2 border rounded" 
            value={formData.email} 
            onChange={handleInputChange} 
          />
        </div>
    
        <div className="flex items-center">
          <label className="w-48 font-medium">Professional Experience:</label>
          <input 
            type="text" 
            name="professionalExperience" 
            className="flex-1 p-2 border rounded" 
            value={formData.professionalExperience} 
            onChange={handleInputChange} 
          />
        </div>

        <div className="flex items-center">
          <label className="w-48 font-medium">Education:</label>
          <input 
            type="text" 
            name="education" 
            className="flex-1 p-2 border rounded" 
            value={formData.education} 
            onChange={handleInputChange} 
          />
        </div>

        <div className="flex items-center">
          <label className="w-48 font-medium">Skills:</label>
          <input 
            type="text" 
            name="skills" 
            className="flex-1 p-2 border rounded" 
            value={formData.skills} 
            onChange={handleInputChange} 
          />
        </div>

        <div className="flex items-center">
          <label className="w-48 font-medium">Interests:</label>
          <input 
            type="text" 
            name="interests" 
            className="flex-1 p-2 border rounded" 
            value={formData.interests} 
            onChange={handleInputChange} 
          />
        </div>



      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-6">
        <button 
          onClick={() => setIsPreviewOpen(true)} 
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Preview
        </button>
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-auto">
          <div className="bg-white p-6 rounded-lg w-full max-w-4xl m-4">
            <PreviewContent />
            <div className="mt-6 flex justify-end space-x-4">
              <button 
                onClick={handleSaveAsPDF} 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save as PDF
              </button>
              <button 
                onClick={() => setIsPreviewOpen(false)} 
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
