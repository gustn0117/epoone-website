import SubpageLayout from "@/components/SubpageLayout";

const tabs = [
  { label: "인사말", href: "/company/greeting" },
  { label: "연혁", href: "/company/history" },
  { label: "인증서", href: "/company/certificates" },
  { label: "오시는길", href: "/company/location" },
];

export default function LocationPage() {
  return (
    <SubpageLayout
      category="COMPANY"
      title="회사소개"
      description="에포원을 방문해주셔서 감사합니다"
      tabs={tabs}
      activeTab="/company/location"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest mb-3">LOCATION</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">오시는 길</h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-10 border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.8!2d127.0!3d36.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z7JeQ7Y-s7JuQ!5e0!3m2!1sko!2skr!4v1"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="에포원 오시는 길"
          />
        </div>

        {/* Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900">주소</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              준비중
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900">연락처</h4>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium text-gray-700">TEL</span> 031-623-0525</p>
              <p><span className="font-medium text-gray-700">E-mail</span> info@epoone.com</p>
              <p><span className="font-medium text-gray-700">운영시간</span> 09:00 ~ 18:00 (주말/공휴일 휴무)</p>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
