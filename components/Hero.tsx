import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[500px] w-full">
      {/* صورة الخلفية */}
      <div className="absolute inset-0">
        <Image
          src="/spices-hero.jpg"
          alt="توابل متنوعة"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>
      
      {/* المحتوى النصي */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          توابل عزو
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          اكتشف مجموعتنا الواسعة من التوابل الطبيعية
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg transition duration-300">
          تسوق الآن
        </button>
      </div>
    </div>
  );
} 