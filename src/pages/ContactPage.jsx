import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from 'lucide-react';

const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
import EnquiryForm from '../components/EnquiryForm';

export default function ContactPage() {
  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5 text-primary shrink-0" />,
      title: 'Our Location',
      value: 'House no-36, Salbagan Road, 2nd St, Benachity, Durgapur, West Bengal 713213, India',
      link: 'https://maps.google.com/?q=House+no-36,+Salbagan+Road,+2nd+St,+Benachity,+Durgapur,+West+Bengal+713213'
    },
    {
      icon: <Phone className="w-5 h-5 text-primary shrink-0" />,
      title: 'Phone Numbers',
      value: '7407609666 / 9735990666',
      link: 'tel:7407609666'
    },
    {
      icon: <Instagram className="w-5 h-5 text-primary shrink-0" />,
      title: 'Official Instagram',
      value: '@fitg122023',
      link: 'https://www.instagram.com/fitg122023/'
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-primary uppercase tracking-widest border-b-2 border-primary pb-1">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-wide">
          Contact Fit-G Gym
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Ready to claim your admission discounts or ask about our training plans? Reach out via phone, direct WhatsApp chat, or visit our facility in Benachity.
        </p>
      </section>

      {/* CORE INFO & FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contacts Details & Hours */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between h-full">
            
            {/* Info cards */}
            <div className="space-y-6">
              <h2 className="text-xl font-extrabold uppercase text-white tracking-wider border-l-4 border-primary pl-3">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                {contactDetails.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-4 p-4 glassmorphism rounded-xl border border-dark-border hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-black border border-dark-border group-hover:bg-primary/10 group-hover:border-primary/20 rounded-lg transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-xxs font-black text-gray-500 uppercase tracking-widest">
                        {item.title}
                      </span>
                      <span className="block text-xs sm:text-sm text-white font-semibold mt-1 leading-normal group-hover:text-primary transition-colors">
                        {item.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Timings card */}
            <div className="p-5 glassmorphism rounded-xl border border-dark-border space-y-4">
              <h3 className="text-sm font-black uppercase text-white tracking-widest flex items-center gap-2 border-b border-dark-border pb-3">
                <Clock className="w-4 h-4 text-primary" />
                Gym Timing Matrix
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
                <div>
                  <span className="block text-gray-500 uppercase tracking-widest">Mon - Sat</span>
                  <span className="block text-white text-sm mt-1">05:00 AM - 10:00 PM</span>
                </div>
                <div>
                  <span className="block text-gray-500 uppercase tracking-widest">Sunday</span>
                  <span className="block text-primary text-sm mt-1">Rest Day (Closed)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-6">
            <EnquiryForm />
          </div>

        </div>
      </section>

      {/* GOOGLE MAPS EMBED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-dark-border pb-3">
            <h2 className="text-xl font-extrabold uppercase text-white tracking-wider flex items-center gap-2">
              Find Us On Google Maps
            </h2>
            <a
              href="https://maps.google.com/?q=House+no-36,+Salbagan+Road,+2nd+St,+Benachity,+Durgapur,+West+Bengal+713213"
              target="_blank"
              rel="noreferrer"
              className="text-xxs font-bold uppercase tracking-wider text-primary hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Iframe wrap */}
          <div className="h-[350px] sm:h-[450px] w-full rounded-2xl overflow-hidden border border-dark-border shadow-glow-card relative group">
            <iframe
              title="Fit-G Gym Benachity Durgapur Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.702758117769!2d87.31174987590806!3d23.579133495323867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7727140f09a5f%3A0xe54d8f28fa8f8bc9!2sSalbagan%20Rd%2C%20Benachity%2C%20Durgapur%2C%20West%20Bengal%20713213!5e0!3m2!1sen!2sin!4v1716220800000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
