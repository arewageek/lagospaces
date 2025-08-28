import { useState } from 'react';
import { PropertyCard } from '../components/property';

const MOCK_PROPERTIES = [
  {
    id: '1',
    title: 'Modern Apartment with Ocean View',
    location: 'Victoria Island, Lagos',
    price: 450000,
    currency: '₦',
    images: [
      { id: '101', url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80', alt: 'Living room' },
      { id: '102', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80', alt: 'Kitchen' },
      { id: '103', url: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1000&q=80', alt: 'Bedroom' },
    ],
    note: 'Stunning ocean view apartment with modern amenities, perfect for young professionals.',
    isVerified: true,
    isFeatured: true,
    owner: {
      id: 'user1',
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      isVerified: true,
    },
  },
  {
    id: '2',
    title: 'Cozy 2-Bedroom Flat',
    location: 'Lekki Phase 1, Lagos',
    price: 320000,
    currency: '₦',
    images: [
      { id: '201', url: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb', alt: 'Living room' },
      { id: '202', url: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28', alt: 'Kitchen' },
    ],
    note: 'Comfortable flat in a secure compound with 24/7 power and water supply.',
    isVerified: true,
    owner: {
      id: 'user2',
      name: 'David Okafor',
      isVerified: false,
    },
  },
  {
    id: '3',
    title: 'Luxury Penthouse with Pool',
    location: 'Ikoyi, Lagos',
    price: 950000,
    currency: '₦',
    images: [
      { id: '301', url: 'https://images.unsplash.com/photo-1600607687644-a6ed68e3f2ce', alt: 'Living room' },
      { id: '302', url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115', alt: 'Kitchen' },
      { id: '303', url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea', alt: 'Bedroom' },
    ],
    note: 'Exquisite penthouse with private pool and breathtaking city views.',
    isFeatured: true,
    owner: {
      id: 'user3',
      name: 'Jennifer Balogun',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      isVerified: true,
    },
  },
  {
    id: '4',
    title: 'Spacious 3-Bedroom Apartment',
    location: 'Ikeja GRA, Lagos',
    price: 550000,
    currency: '₦',
    images: [
      { id: '401', url: 'https://images.unsplash.com/photo-1617104678098-de229db51b21', alt: 'Living room' },
      { id: '402', url: 'https://images.unsplash.com/photo-1586105251261-72a756497a11', alt: 'Kitchen' },
    ],
    note: 'Family-friendly apartment in a quiet neighborhood with excellent amenities.',
    isVerified: true,
    owner: {
      id: 'user4',
      name: 'Michael Adeyemi',
      isVerified: true,
    },
  },
  {
    id: '5',
    title: 'Stylish Studio Apartment',
    location: 'Yaba, Lagos',
    price: 250000,
    currency: '₦',
    images: [
      { id: '501', url: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30', alt: 'Living room' },
      { id: '502', url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7', alt: 'Kitchen' },
    ],
    note: 'Perfect for students or young professionals, located close to tech hubs.',
    owner: {
      id: 'user5',
      name: 'Tolu Akande',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      isVerified: false,
    },
  },
  {
    id: '6',
    title: 'Waterfront 4-Bedroom Villa',
    location: 'Banana Island, Lagos',
    price: 1200000,
    currency: '₦',
    images: [
      { id: '601', url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227', alt: 'Exterior' },
      { id: '602', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0', alt: 'Living room' },
      { id: '603', url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', alt: 'Pool' },
    ],
    note: 'Exclusive waterfront villa with private garden and boat dock.',
    isVerified: true,
    isFeatured: true,
    owner: {
      id: 'user6',
      name: 'Alex Okonkwo',
      avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
      isVerified: true,
    },
  },
];

const HomePage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'feed'>('grid');

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative w-full h-[85vh] bg-white overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
            alt="Modern luxury apartment interior"
            className="w-full h-full object-cover object-center scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/60 to-orange-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              {/* Enhanced Logo Badge */}
              <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-xl px-8 py-4 rounded-2xl mb-10 border border-white/20 shadow-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <span className="text-white font-display font-bold text-xl">LagosSpaces</span>
                <div className="px-3 py-1 bg-orange-500/90 text-white text-xs font-bold rounded-full">BETA</div>
              </div>

              {/* Enhanced Main Content */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white leading-tight mb-8">
                Find Your Perfect Home
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Direct from Owners</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                Connect directly with verified property owners in Lagos. Skip the middleman, save on fees, and find your perfect home faster than ever.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/25">
                  <span className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:scale-110 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    Find Properties
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </button>

                <button className="group px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-2xl border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  <span className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:scale-110 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    List Your Property
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">1000+</div>
              <div className="text-slate-400 text-sm font-medium">Properties Listed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">500+</div>
              <div className="text-slate-400 text-sm font-medium">Happy Tenants</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">200+</div>
              <div className="text-slate-400 text-sm font-medium">Verified Owners</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-orange-400 mb-2">₦0</div>
              <div className="text-slate-400 text-sm font-medium">Agent Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Why Choose LagosSpaces?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience a better way to find and rent properties in Lagos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Verified Owners</h3>
              <p className="text-slate-600">All property owners are verified for your safety and peace of mind.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Zero Agent Fees</h3>
              <p className="text-slate-600">Connect directly with owners and save thousands on agent commissions.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Support</h3>
              <p className="text-slate-600">Round-the-clock customer support to help you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Explore Properties Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Simplified Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Featured Properties
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Handpicked properties from verified owners across Lagos
            </p>
          </div>

          {/* Simplified Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16 gap-6">
            {/* Simple Filter Tabs */}
            <div className="flex items-center gap-2">
              <button className="px-5 py-2.5 bg-slate-900 text-white rounded-lg font-medium text-sm">
                All
              </button>
              <button className="px-5 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg font-medium text-sm transition-colors">
                Apartments
              </button>
              <button className="px-5 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg font-medium text-sm transition-colors">
                Houses
              </button>
            </div>

            {/* Simple View Toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${viewMode === 'grid'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
                Grid
              </button>
              <button
                onClick={() => setViewMode('feed')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${viewMode === 'feed'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
                List
              </button>
            </div>
          </div>

          {/* Properties Grid/List */}
          <div className="relative">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {MOCK_PROPERTIES.map((property, index) => (
                  <div
                    key={property.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <PropertyCard {...property} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-10">
                {MOCK_PROPERTIES.map((property, index) => (
                  <div
                    key={property.id}
                    className="max-w-4xl mx-auto animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <PropertyCard {...property} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Simple Load More */}
          <div className="text-center mt-20">
            <button className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Are you a Property Owner?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            List your property on LagosSpaces and connect directly with verified tenants. No more dealing with agents or payment delays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
              Post Your Property
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105">
              Learn About Verification
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">How LagosSpaces Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our platform connects verified landlords with serious tenants, eliminating middlemen and reducing costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">1. Verified Identities</h3>
              <p className="text-slate-600">
                Both landlords and tenants undergo ID verification with government-issued documents to ensure security and trust.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. Direct Communication</h3>
              <p className="text-slate-600">
                Chat directly with property owners, schedule viewings, and negotiate terms without paying agent fees.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. Secure Payments</h3>
              <p className="text-slate-600">
                Small refundable booking fees to deter unserious inquiries and escrow system for rent deposits that protect both parties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 