'use client';

import { FC, useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  fullName: string;
  phone: string;
  question: string;
}

const SendQuestion: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    question: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form data submitted:', formData);

    setFormData({
      fullName: '',
      phone: '',
      question: '',
    });
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
            Envie sua pergunta!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-[20px] font-bold text-[#262626] mb-1">
                Nome completo:
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Digite seu nome..."
                className="w-full px-4 py-3 bg-[#D9D9D9] border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 placeholder-gray-400 text-[20px] sm:text-base"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-[20px] font-bold text-[#262626] mb-1">
                Telefone:
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Digite seu telefone..."
                className="w-full px-4 py-3 bg-[#D9D9D9] border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 placeholder-gray-400 text-[20px] sm:text-base"
                required
              />
            </div>

            <div>
              <label htmlFor="question" className="block text-[20px] font-bold text-gray-700 mb-1">
                Faça sua pergunta:
              </label>
              <textarea
                name="question"
                id="question"
                value={formData.question}
                onChange={handleChange}
                rows={4}
                placeholder="Digite sua pergunta aqui..."
                className="w-full px-4 py-3 bg-[#D9D9D9] border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 placeholder-gray-400 text-[20px] sm:text-base"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-md shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-base sm:text-lg"
              >
                Enviar pergunta
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SendQuestion;
