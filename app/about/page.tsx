import Image from 'next/image'
export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">تعرف علينا </h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4">قصتنا مع التوابل</h2>
          <p className="text-lg mb-4">
          جودة التوابل الأصيلة تمتد جذورها إلى إرث عريق، حيث تُعَدُّ صناعة التوابل وتقديمها فناً متوارثاً أباً عن جد ولسنا حديثين في الميدان. هذه التقاليد العائلية تضمن الاهتمام بأدق التفاصيل في اختيار المكونات، ومعالجتها بطرق طبيعية تحافظ على النكهة والرائحة الغنية. ولأنها تنبع من خبرات طويلة، تُعَدُّ هذه التوابل رمزاً للتميز والجودة التي تعكس أصالة الماضي وحرفية الحاضر.
          </p>
        </div>
        
        <div>
          <img
            src="https://i.pinimg.com/736x/91/53/12/91531283c3821a40a2ae8ea0ff54f190.jpg"
            alt="Spices"
            width={600}
            height={400}
            className="rounded-lg"
          />
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-8">قيمنا</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">الجودة العالية</h3>
            <p> "نوفر أفضل أنواع التوابل الطازجة والمختارة بعناية لضمان مذاق استثنائي وجودة لا تُضاهى.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">الاهتمام بالزبائن الكرام</h3>
            <p>نلتزم بخدمة عملائنا بأعلى مستويات الاحترافية، مع توفير تجربة تسوق مميزة ونصائح طهي مفيدة..</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">الاصالة و التنويع</h3>
            <p>مجموعة واسعة من التوابل الأصلية من جميع أنحاء العالم لتلبية جميع احتياجات الطهي، من التقاليد المحلية إلى النكهات العالمية.</p>
          </div>
        </div>
      </div>

      <div className='rid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
        <h2 className="text-3xl font-semibold mb-8 text-center">فريقنا</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "اسحاق براهيمي", role: "مسؤول فرع 2 لعزو للتوابل" },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4">
                <img className="w-32 h-32 rounded-full" src="https://i.pinimg.com/736x/77/7a/bc/777abc38d98c19ea520725a8adee208d.jpg" alt="" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

