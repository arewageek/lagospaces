import { useState } from 'react';
import { Link } from 'react-router-dom';

interface PropertyImage {
  id: string;
  url: string;
  alt: string;
}

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  currency?: string;
  images: PropertyImage[];
  note?: string;
  isVerified?: boolean;
  isFeatured?: boolean;
  owner: {
    id: string;
    name: string;
    avatar?: string;
    isVerified?: boolean;
  };
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  currency = '₦',
  images,
  note,
  isVerified = false,
  isFeatured = false,
  owner,
}: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const formatPrice = (amount: number): string => {
    return new Intl.NumberFormat('en-NG', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group/card border border-slate-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Simplified Image Gallery */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image) => (
            <div key={image.id} className="relative flex-shrink-0 w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Simple Gallery Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-slate-600 opacity-0 group-hover/card:opacity-100 transition-opacity shadow-sm"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-slate-600 opacity-0 group-hover/card:opacity-100 transition-opacity shadow-sm"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`block h-1.5 rounded-full transition-all ${index === currentImageIndex
                    ? 'bg-white w-6'
                    : 'bg-white/60 w-1.5'
                    }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Simplified Badges */}
        {isVerified && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Verified
            </span>
          </div>
        )}

        {/* Simple Price Tag */}
        <div className="absolute top-3 right-3">
          <div className="px-3 py-1.5 rounded-lg bg-slate-900/80 text-white font-semibold text-sm backdrop-blur-sm">
            {currency}{formatPrice(price)}/mo
          </div>
        </div>

        {/* Simple Save Action */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover/card:opacity-100 transition-opacity">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/90 text-slate-600 hover:text-orange-500 transition-colors shadow-sm"
            aria-label="Save property"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Simplified Content */}
      <div className="p-5">
        <div className="mb-4">
          <h3 className="font-display font-semibold text-lg text-slate-900 line-clamp-1 mb-2">{title}</h3>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {location}
          </p>
        </div>

        {note && (
          <p className="text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
            {note}
          </p>
        )}

        {/* Simple Property Features */}
        <div className="flex items-center gap-4 mb-4 text-xs text-slate-500">
          <span>3 beds</span>
          <span>•</span>
          <span>2 baths</span>
          <span>•</span>
          <span>120 sqm</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <Link
            to={`/profile/${owner.id}`}
            className="flex items-center gap-2.5"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center text-xs font-medium">
                {owner.avatar ? (
                  <img
                    src={owner.avatar}
                    alt={owner.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-slate-600">{owner.name.slice(0, 2).toUpperCase()}</span>
                )}
              </div>
              {owner.isVerified && (
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full flex items-center justify-center border border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2 h-2 text-white">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div>
              <span className="text-sm font-medium text-slate-800 line-clamp-1">
                {owner.name}
              </span>
            </div>
          </Link>

          <Link
            to={`/property/${id}`}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard; 