import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('idle');
    }, 3000);
  };

  return (
    <div id="contact-section" className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-4 text-xl text-slate-400">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">{t.contact.phone}</h3>
                <p className="mt-2 text-slate-300">+90 (212) 555 0123</p>
                <p className="text-slate-400 text-sm">09:00 - 18:00</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">{t.contact.email}</h3>
                <p className="mt-2 text-slate-300">info@danismanpro.com</p>
                <p className="text-slate-400 text-sm">24h Response</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">{t.contact.office}</h3>
                <p className="mt-2 text-slate-300 whitespace-pre-line">
                  {t.contact.officeAddress}
                </p>
              </div>
            </div>
            
             <div className="mt-12 bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h4 className="text-lg font-semibold text-indigo-400 mb-2">{t.contact.faqTitle}</h4>
                <p className="text-slate-300 text-sm italic">
                  "{t.contact.faq1q}"
                </p>
                <p className="text-slate-400 text-sm mb-4">
                  {t.contact.faq1a}
                </p>
                 <p className="text-slate-300 text-sm italic">
                  "{t.contact.faq2q}"
                </p>
                <p className="text-slate-400 text-sm">
                  {t.contact.faq2a}
                </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">{t.contact.form.name}</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-3 px-4 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder={t.contact.form.namePh}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">{t.contact.form.email}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-3 px-4 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder={t.contact.form.emailPh}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700">{t.contact.form.subject}</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-3 px-4 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder={t.contact.form.subjectPh}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">{t.contact.form.message}</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-3 px-4 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder={t.contact.form.messagePh}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'success'}
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:bg-green-600 disabled:cursor-default"
              >
                {status === 'success' ? (
                    <span className="flex items-center">{t.contact.form.success} <CheckCircle className="ml-2 h-5 w-5"/></span>
                ) : (
                    <span className="flex items-center">{t.contact.form.send} <Send className="ml-2 h-4 w-4"/></span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;