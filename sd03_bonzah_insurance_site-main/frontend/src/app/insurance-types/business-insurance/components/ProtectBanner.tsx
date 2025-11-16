// comment for adding
import Image from "next/image";

export default function ProtectBanner() {
  return (
    <div className="text-center">
      <div className="relative rounded-lg overflow-hidden min-h-[300px] flex items-center justify-center">
        {/* Background Image */}
        {/* <Image
          src="/images/business-meeting.jpg" // Placeholder - replace with your image
          alt="Business meeting"
          layout="fill"
          objectFit="cover"
          className="z-0"
        /> */}
        {/* Pink Overlay */}
        <div className="absolute inset-0 bg-[var(--color-pink)] opacity-75 z-10"></div>
        
        {/* Diagonal shape - this is tricky, using a simple gradient for now */}
        {/* A true diagonal cut would use clip-path or an SVG */}
        <div 
          className="absolute inset-0 z-20"
          style={{ background: 'linear-gradient(to top right, transparent 50%, var(--color-pink) 50.1%)' }}
        ></div>

        {/* Content */}
        <h2 className="relative z-30 text-4xl sm:text-5xl font-bold text-white px-4">
          You Build It. We Protect It.
        </h2>
      </div>
      <h3 className="mt-8 text-3xl font-bold text-[var(--color-black)] sm:text-4xl">
        Whatever Insurance You Need, We've Got You Covered
      </h3>
    </div>
  );
}