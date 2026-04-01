import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

const tabs = [
  { label: "제이폭시-2000 라이닝", href: "/products/j-epoxy-2000" },
  { label: "제이폭시-1000 하도", href: "/products/j-epoxy-1000" },
];

export default function JEpoxy2000Page() {
  return (
    <SubpageLayout
      category="PRODUCTS"
      title="제품소개"
      description="에포원의 친환경 에폭시 바닥재 제품을 소개합니다"
      tabs={tabs}
      activeTab="/products/j-epoxy-2000"
    >
      <div className="max-w-5xl mx-auto">
        {/* Product Header */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="relative h-[350px] rounded-2xl overflow-hidden">
            <Image
              src="/images/work-1.png"
              alt="제이폭시-2000 시공 현장"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
              무용제 에폭시 바닥재용 페인트
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              제이폭시 - 2000
            </h2>
            <p className="text-lg text-primary font-medium mb-4">(저취) 라이닝</p>

            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3">개요</h4>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <li>1. 에폭시 수지와 변성 폴리아민이 주성분으로 설계된 2액형 상온 경화형 에폭시 라이닝입니다.</li>
                <li>2. 무용제형 친환경 제품입니다.</li>
                <li>3. 주차장, 공장, 사무실, 식당, 병원, 실험실 등 실내 바닥용에 적합하며, 특히 냄새가 없어 입주민이 거주하고 있는 공간에서도 작업이 가능합니다.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">특징</h4>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "1회 도장으로 1mm에서 3mm까지 시공이 가능",
                  "레벨링이 우수하며, 아민브러싱이 없어 경화 후 광택이 뛰어남",
                  "무취형 친환경 제품",
                  "주제 점도가 매우 낮아 겨울철 교반이 용이",
                  "내구성 및 외관이 우수한 방진 바닥재",
                  "내마모성, 내충격성 및 접착력, 기계적 강도 등의 물성이 양호",
                  "후/박막 도장이 가능하고, 도막의 크레터링이 없으며 평활성이 양호",
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">물성</h3>
          <table className="w-full border-t-2 border-primary text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">항목</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">주제</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">경화제</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["주성분", "에폭시 수지", "폴리 아민"],
                ["색상", "녹색/회색", "담황색"],
                ["혼합비중", "1.50 ~ 1.60", ""],
                ["혼합비(중량)", "주제 : 경화제 = 7 : 1", ""],
                ["가사시간(25\u00b0C)", "60 분", ""],
                ["경화시간(25\u00b0C)", "24 시간", ""],
                ["Shore D 경도", "80 이상", ""],
              ].map(([key, val1, val2], i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">{key}</td>
                  <td className="py-3 px-4 text-gray-600">{val1}</td>
                  <td className="py-3 px-4 text-gray-600">{val2}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-2">포장단위: 주제 = 21kg, 경화제 = 3kg / 저장기간: 3개월 (냉암소)</p>
        </div>

        {/* Application */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">용도</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["지하 주차장", "병원", "공장", "연구실", "사무실", "식당", "실험실", "방진 바닥"].map((use, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 text-center text-sm text-gray-700 font-medium">
                {use}
              </div>
            ))}
          </div>
        </div>

        {/* Construction Method */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">시공방법</h3>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-2 text-sm text-accent">시공조건</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                도료나 소지 표면의 온도가 5\u00b0C 이상이어야 하며, 수분의 응축을 피하기 위하여 결로점 보다 3\u00b0C 이상 상대습도 65% 이하에서 작업을 해야 합니다.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">표면처리</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1. 소지표면의 Laitance, 먼지, 유분 등 기타 오염물질을 완전히 제거 하십시오.</li>
                <li>2. 틈새나 홈은 에폭시 퍼티로 메꾸어 주고 표면조정 후 도장 하십시오.</li>
                <li>3. 거친 부분은 그라인더로 매끄럽게 표면 조정하십시오.</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">도장</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1. 정해진 배합비(주제/경화제=7:1 무게비)에 따라 정확히 계량하여 1분 정도 충분히 교반하십시오.</li>
                <li>2. 신너 사용 시 99% 이상 순도의 에탄올(일반 신너도 가능) 1% 이내로 사용하십시오.</li>
                <li>3. 에탄올 과량 희석시 가사시간이 짧아질 수 있고, 경도가 낮아질 수 있습니다.</li>
                <li>4. 레게 장비를 사용하여 평활하게 도포하십시오.</li>
                <li>5. 혼합 교반 후 가사시간이 지나면 경화가 되므로 반드시 가사시간 이내에 사용하십시오.</li>
                <li>6. 온도가 높을수록 가사시간이 빠르고 동절기나 저온지역에서는 경화시간이 지연될 수 있습니다.</li>
                <li>7. 기온이 5\u00b0C이하, 결로점 이하에서는 시공을 피하십시오.</li>
                <li>8. 습도가 높은 환경(80% 이상), 기온이 낮은 환경(5\u00b0C 이하)에서는 정상적인 물성을 발휘하지 못할 수 있으므로 도장작업을 피하십시오.</li>
                <li>9. 도장할 표면은 충분히 건조 시키십시오.</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">도장시방</h4>
              <table className="w-full text-sm border-t border-gray-200">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 px-3 text-left text-gray-700">구분</th>
                    <th className="py-2 px-3 text-left text-gray-700">제품명</th>
                    <th className="py-2 px-3 text-left text-gray-700">도장횟수</th>
                    <th className="py-2 px-3 text-left text-gray-700">도막두께</th>
                    <th className="py-2 px-3 text-left text-gray-700">도장방법</th>
                    <th className="py-2 px-3 text-left text-gray-700">색상</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3 text-gray-600">하도</td>
                    <td className="py-2 px-3 text-gray-600">제이폭시-1000</td>
                    <td className="py-2 px-3 text-gray-600">1회</td>
                    <td className="py-2 px-3 text-gray-600">50\u03bcm</td>
                    <td className="py-2 px-3 text-gray-600">붓, 롤러, 스프레이</td>
                    <td className="py-2 px-3 text-gray-600">투명</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-600">상도</td>
                    <td className="py-2 px-3 text-gray-600">제이폭시-2000</td>
                    <td className="py-2 px-3 text-gray-600">2회</td>
                    <td className="py-2 px-3 text-gray-600">2~3mm</td>
                    <td className="py-2 px-3 text-gray-600">레키, 흙손</td>
                    <td className="py-2 px-3 text-gray-600">회색(II), 녹색</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Caution */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">주의사항</h3>
          <div className="bg-red-50 rounded-xl p-6">
            <ul className="space-y-2 text-sm text-gray-600">
              <li>1. 주제와 경화제를 지정된 비율대로 정확히 혼합하여 교반기로 3분 이상 교반 후 사용하십시오.</li>
              <li>2. 본 도료는 2액형 도료이므로 가사 시간 내에 전량 소진하여 주십시오.</li>
              <li>3. 좁은 장소나 밀폐된 장소에서 도장할 경우 호흡기 보호 장구를 착용하시고 환기를 충분히 시켜주십시오.</li>
              <li>4. 도장할 표면은 충분히 건조시키십시오.</li>
              <li>5. 사용 후 남은 잔량은 완전히 밀폐 후 비전문가, 어린이가 접촉하지 않도록 주의하십시오.</li>
              <li>6. 기타 필요한 사항은 당사 기술연구소에 문의하신 후 도장하십시오.</li>
            </ul>
          </div>
        </div>

        {/* PDF Downloads */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">기술자료 다운로드</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 에포원 제이폭시 */}
            <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-5">
                <Image src="/images/logo.png" alt="EPOONE" width={80} height={28} className="object-contain" />
                <span className="text-xs text-gray-400">에포원</span>
              </div>
              <div className="space-y-3">
                <a href="/pdf/j-epoxy-2000.pdf" download className="group flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">제이폭시-2000 라이닝</p>
                    <p className="text-xs text-gray-400">카탈로그 PDF</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
                <a href="/pdf/j-epoxy-1000.pdf" download className="group flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">제이폭시-1000 하도</p>
                    <p className="text-xs text-gray-400">카탈로그 PDF</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
              </div>
            </div>

            {/* 강남제비스코 프로아 */}
            <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-sm font-bold text-gray-700 tracking-wider">JEVISCO</span>
                <span className="text-xs text-gray-400">강남제비스코</span>
              </div>
              <div className="space-y-3">
                <a href="/pdf/pure-air-lining-tds.pdf" download className="group flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-accent/5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-accent transition-colors">프로아 순에어 라이닝</p>
                    <p className="text-xs text-gray-400">TDS PDF</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
                <a href="/pdf/pure-air-sealer-tds.pdf" download className="group flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-accent/5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-accent transition-colors">프로아 순에어 실러</p>
                    <p className="text-xs text-gray-400">TDS PDF</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
