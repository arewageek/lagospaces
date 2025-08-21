import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BookingPaymentModal from '../components/payment/BookingPaymentModal';

// Mock property data - in a real app, this would come from an API
const PROPERTY = {
  id: '1',
  title: 'Modern Apartment with Ocean View',
  description: 'Stunning ocean view apartment with modern amenities, perfect for young professionals.',
  location: 'Victoria Island, Lagos',
  price: 450000,
  currency: '₦',
  imageUrls: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1600607687644-a6ed68e3f2ce?auto=format&fit=crop&w=1000&q=80',
  ],
  videoUrl: 'https://example.com/video1.mp4',
  features: ['2 Bedrooms', '2 Bathrooms', 'Fully Furnished', '24/7 Security', 'Swimming Pool', 'Gym'],
  amenities: ['Water', 'Electricity', 'Internet', 'Parking Space', 'CCTV'],
  likes: 245,
  comments: 32,
  owner: {
    id: 'user1',
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    isVerified: true,
    phone: '+2348012345678',
    email: 'sarah@example.com',
  },
  verificationStatus: 'Verified',
  availableFrom: '2023-10-01',
  leaseTerm: '1 year',
};

const formatPrice = (amount: number, currency: string): string => {
  return currency + new Intl.NumberFormat('en-NG', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(amount);
};

const PropertyListingPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showBookingPayment, setShowBookingPayment] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [note, setNote] = useState('');
  console.log(note)
  console.log(id);

  // In a real app, we would fetch the property based on the id
  const property = PROPERTY;

  const handleBookVisit = () => {
    setShowBookingForm(true);
  };

  const handleBookingFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBookingForm(false);
    setShowBookingPayment(true);
  };

  const handlePaymentComplete = () => {
    // Here we would handle the post-payment actions
    // Such as creating a booking record in the database
    console.log('Payment completed for property visit');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Property Hero Section */}
      <div className="relative h-[60vh] overflow-hidden bg-slate-900">
        {/* Main Image Display */}
        <div className="absolute inset-0">
          <img
            src={property.imageUrls[currentImageIndex]}
            alt={property.title}
            className="h-full w-full object-cover transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20" />
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-30">
          {/* Back Button */}
          <Link
            to="/feed"
            className="w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-slate-900 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </Link>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-slate-900 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.935-2.186 2.25 2.25 0 00-3.935 2.186z" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-orange-500 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Image Counter */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30">
          <div className="bg-slate-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentImageIndex + 1} / {property.imageUrls.length}
          </div>
        </div>

        {/* Enhanced Image Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {property.imageUrls.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-300 ${index === currentImageIndex
                ? 'w-8 h-3 bg-orange-500 rounded-full'
                : 'w-3 h-3 bg-white/60 hover:bg-white/90 rounded-full'
                }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>

        {/* Enhanced Image Navigation Arrows */}
        {property.imageUrls.length > 1 && (
          <>
            <button
              onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? property.imageUrls.length - 1 : currentImageIndex - 1)}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-slate-900 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg z-30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentImageIndex(currentImageIndex === property.imageUrls.length - 1 ? 0 : currentImageIndex + 1)}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-slate-900 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg z-30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </>
        )}

        {/* Thumbnail Strip */}
        <div className="absolute bottom-6 right-6 z-30">
          <div className="flex gap-2 max-w-xs overflow-x-auto">
            {property.imageUrls.slice(0, 4).map((imageUrl, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === currentImageIndex
                    ? 'border-orange-500 scale-105'
                    : 'border-white/50 hover:border-white'
                  }`}
              >
                <img
                  src={imageUrl}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
            {property.imageUrls.length > 4 && (
              <div className="flex-shrink-0 w-16 h-12 rounded-lg bg-slate-900/80 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center">
                <span className="text-white text-xs font-medium">+{property.imageUrls.length - 4}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Property Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {property.verificationStatus && (
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                )}
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {property.imageUrls.length} Photos
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-2">
                {property.title}
              </h1>
              <p className="flex items-center gap-1 text-slate-600 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {property.location}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                {formatPrice(property.price, property.currency)}
              </div>
              <div className="text-slate-600 text-lg font-medium">/month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="container mx-auto px-4 py-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Availability Info */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" />
                </svg>
                Available from {property.availableFrom}
              </div>
              <div className="bg-slate-100 text-slate-800 px-4 py-2 rounded-xl text-sm font-semibold">
                {property.leaseTerm} lease
              </div>
            </div>

            {/* Property Overview Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                  About This Property
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed">{property.description}</p>
              </div>

              {/* Features Grid */}
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4">
                  Property Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-slate-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities Grid */}
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4">
                  Amenities Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-slate-100 transition-colors duration-300">
                      <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-slate-800">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Owner Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">
                Property Owner
              </h2>

              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-orange-200">
                    <img src={property.owner.avatar} alt={property.owner.name} className="w-full h-full object-cover" />
                  </div>
                  {property.owner.isVerified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{property.owner.name}</h3>
                    {property.owner.isVerified && (
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-lg text-xs font-semibold">Verified</span>
                    )}
                  </div>
                  <p className="text-slate-600 text-sm mb-3">Member since January 2023</p>

                  <button
                    onClick={() => setShowContactInfo(!showContactInfo)}
                    className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300 text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {showContactInfo ? 'Hide contact info' : 'Show contact info'}
                  </button>

                  {showContactInfo && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-xl">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-slate-800 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-white">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                          </div>
                          <span className="font-medium text-slate-800 text-sm">{property.owner.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-slate-800 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-white">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                          </div>
                          <span className="font-medium text-slate-800 text-sm">{property.owner.email}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking & Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Pricing Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-3xl font-display font-bold text-slate-900 mb-1">
                    {formatPrice(property.price, property.currency)}
                  </div>
                  <div className="text-slate-600 text-lg font-medium">/month</div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleBookVisit}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" />
                    </svg>
                    Book Visit (₦5,000)
                  </button>

                  <Link
                    to={`/messages?user=${property.owner.id}`}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    Message Owner
                  </Link>
                </div>

                {/* Booking Info */}
                <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-900 mb-1 text-sm">Booking Fee Info</h4>
                      <p className="text-xs text-orange-800 leading-relaxed">
                        The ₦5,000 booking fee is fully refundable if you visit within 7 days or if the owner fails to accommodate your visit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Stats */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-display font-bold text-slate-900 mb-4">Property Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-slate-600">Views</span>
                    <span className="font-semibold text-slate-900">1,234</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-slate-600">Likes</span>
                    <span className="font-semibold text-slate-900">{property.likes}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-slate-600">Comments</span>
                    <span className="font-semibold text-slate-900">{property.comments}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-600">Listed</span>
                    <span className="font-semibold text-slate-900">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" />
                  </svg>
                  Book a Visit
                </h2>
                <p className="text-slate-600">Schedule your property viewing</p>
              </div>
              <button
                onClick={() => setShowBookingForm(false)}
                className="group w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-600 group-hover:scale-110 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-6 border border-amber-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-amber-900 text-lg mb-2">Booking Fee: ₦5,000</h3>
                  <p className="text-amber-800 leading-relaxed">
                    This is a fully refundable security fee. Your money will be returned if you visit the property
                    within 7 days or if the owner fails to accommodate your scheduled visit.
                  </p>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleBookingFormSubmit}>
              <div>
                <label className="block text-slate-700 font-semibold mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" />
                  </svg>
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value ? new Date(e.target.value) : null)}
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Preferred Time
                </label>
                <select
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                >
                  <option value="">Select a time slot</option>
                  <option value="Morning (9AM - 12PM)">🌅 Morning (9AM - 12PM)</option>
                  <option value="Afternoon (12PM - 4PM)">☀️ Afternoon (12PM - 4PM)</option>
                  <option value="Evening (4PM - 7PM)">🌆 Evening (4PM - 7PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.691 1.35 3.061 3.016 3.061 1.667 0 3.016-1.37 3.016-3.061-1.667 0-3.016-1.37-3.016-3.061s1.35-3.061 3.016-3.061 3.016 1.37 3.016 3.061c1.667 0 3.016 1.37 3.016 3.061z" />
                  </svg>
                  Note to Owner (Optional)
                </label>
                <textarea
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm h-32 resize-none"
                  placeholder="Any special requirements, questions about the property, or preferred contact method..."
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:scale-110 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Booking Payment Modal */}
      <BookingPaymentModal
        isOpen={showBookingPayment}
        onClose={() => setShowBookingPayment(false)}
        onPaymentComplete={handlePaymentComplete}
        propertyId={property.id}
        propertyTitle={property.title}
        propertyImage={property.imageUrls[0]}
        ownerName={property.owner.name}
        selectedDate={selectedDate || undefined}
        selectedTime={selectedTime}
      />
    </div>
  );
};

export default PropertyListingPage; 