import SubpageLayout from "@/components/SubpageLayout";

const tabs = [
  { label: "제이폭시-2000 라이닝", href: "/products/j-epoxy-2000" },
  { label: "제이폭시-1000 하도", href: "/products/j-epoxy-1000" },
  { label: "프로아 순에어 라이닝", href: "/products/pure-air-lining" },
  { label: "프로아 순에어 실러", href: "/products/pure-air-sealer" },
];

export default function PureAirLiningPage() {
  return (
    <SubpageLayout
      category="PRODUCTS"
      title="제품소개"
      description="에포원의 친환경 에폭시 바닥재 제품을 소개합니다"
      tabs={tabs}
      activeTab="/products/pure-air-lining"
    >
      <div className="max-w-5xl mx-auto">
        {/* Product Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
              D886
            </span>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              저취형 무용제계 에폭시 바닥재
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">프로아 순에어 라이닝</h2>
          <p className="text-gray-500 text-sm mb-1">JEVISCO</p>
          <p className="text-gray-600 leading-relaxed mt-4">
            저취성 원료를 주성분으로 한 무용제형 에폭시계 2액형 도료로써 시공 시 발생하는 냄새를 최소화하였으며 내충격성, 내마모성
            및 내구성 등의 기계적 물성이 우수하고 1회 도장으로 후막도장이 가능하고 자체 평활성(Self-Levelling) 및 광택이 우수합니다.
          </p>
        </div>

        {/* Specs */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">도료특성</h3>
            <table className="w-full border-t-2 border-primary text-sm">
              <tbody>
                {[
                  ["색상", "회색(II), 녹색, 기타 주문색"],
                  ["광택(60\u00b0, %)", "유광"],
                  ["고형분 용적비(%)", "약 98\u00b13"],
                  ["비중 (20\u00b0C)", "약 1.5 ~ 1.6"],
                  ["저장기간(냉암소)", "6개월"],
                ].map(([key, val], i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50 w-[160px]">{key}</td>
                    <td className="py-3 px-4 text-gray-600">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">기본 정보</h3>
            <table className="w-full border-t-2 border-primary text-sm">
              <tbody>
                {[
                  ["사용 경화제", "프로아 순에어 라이닝 경화제"],
                  ["혼합비율(무게비)", "주제 : 경화제 = 7 : 1"],
                  ["추천건조도막(mm)", "1 ~ 3"],
                  ["이론도포면적(m\u00b2/kg)", "약 0.22 (건조도막 3mm 기준)"],
                  ["가사시간(20\u00b0C)", "1시간"],
                  ["추천신나", "원액 사용"],
                  ["세척용 신나", "A 109 신나"],
                ].map(([key, val], i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50 w-[180px]">{key}</td>
                    <td className="py-3 px-4 text-gray-600">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Drying Time */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">건조시간</h3>
          <table className="w-full border-t-2 border-primary text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">구분</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">5\u00b0C</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">10\u00b0C</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">20\u00b0C</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">30\u00b0C</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">지촉건조</td>
                <td className="py-3 px-4 text-gray-600">10시간</td>
                <td className="py-3 px-4 text-gray-600">6시간</td>
                <td className="py-3 px-4 text-gray-600">4시간</td>
                <td className="py-3 px-4 text-gray-600">2시간</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">경화건조</td>
                <td className="py-3 px-4 text-gray-600">48시간</td>
                <td className="py-3 px-4 text-gray-600">36시간</td>
                <td className="py-3 px-4 text-gray-600">24시간</td>
                <td className="py-3 px-4 text-gray-600">18시간</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-2">* 상기 건조시간은 실험실 조건이며 현장 온도, 습도에 따라 달라질 수 있습니다.</p>
        </div>

        {/* Recoat Interval */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">재도장 간격</h3>
          <table className="w-full border-t-2 border-primary text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">구분</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">5\u00b0C</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">10\u00b0C</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">20\u00b0C</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">30\u00b0C</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">재도장 간격(최저)</td>
                <td className="py-3 px-4 text-gray-600">72시간</td>
                <td className="py-3 px-4 text-gray-600">60시간</td>
                <td className="py-3 px-4 text-gray-600">48시간</td>
                <td className="py-3 px-4 text-gray-600">24시간</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">재도장 간격(최고)</td>
                <td className="py-3 px-4 text-gray-600">9일</td>
                <td className="py-3 px-4 text-gray-600">6일</td>
                <td className="py-3 px-4 text-gray-600">4일</td>
                <td className="py-3 px-4 text-gray-600">3일</td>
              </tr>
            </tbody>
          </table>
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

        {/* Packaging */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">포장단위</h3>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-sm text-gray-600">24kg (주제: 21kg, 경화제: 3kg)</p>
          </div>
        </div>

        {/* Recommended Paint System */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">추천관련도료</h3>
          <div className="bg-gray-50 rounded-xl p-6 space-y-2 text-sm text-gray-600">
            <p><strong className="text-gray-700">&lt;하도&gt;</strong> 프로아 순에어 실러, 프로아 순에어 라이닝 하도, 프로아 수성 실러</p>
            <p><strong className="text-gray-700">&lt;상도, 필요 시&gt;</strong> 프로아 코팅</p>
          </div>
        </div>

        {/* Construction Method */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">시공방법</h3>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">1. 바탕처리</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1) 소지는 충분히 양생되고 pH 7~9, 함수율 6% 이하이어야 합니다. (20\u00b0C, 30일 이상 양생)</li>
                <li>2) 표면의 레이턴스(Laitance), 먼지, 유분 등 기타 오염물질을 완전히 제거하십시오.</li>
                <li>3) 틈새나 홈은 에폭시계 퍼티인 &apos;프로아 에폭시 퍼티&apos;로 메꾼 후 표면을 조정하십시오.</li>
                <li>4) 거친 부분은 그라인더로 매끄럽게 표면 조정합니다.</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">2. 도장시방</h4>
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
                    <td className="py-2 px-3 text-gray-600">프로아 순에어 실러</td>
                    <td className="py-2 px-3 text-gray-600">1</td>
                    <td className="py-2 px-3 text-gray-600">50\u03bcm</td>
                    <td className="py-2 px-3 text-gray-600">B, R, S</td>
                    <td className="py-2 px-3 text-gray-600">투명</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-600">상도</td>
                    <td className="py-2 px-3 text-gray-600">프로아 순에어 라이닝</td>
                    <td className="py-2 px-3 text-gray-600">2</td>
                    <td className="py-2 px-3 text-gray-600">2~3mm</td>
                    <td className="py-2 px-3 text-gray-600">레키, 흙손</td>
                    <td className="py-2 px-3 text-gray-600">회색(II), 녹색</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-400 mt-2">* 도장방법 약어 : B(붓), R(로울러), S(스프레이)</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">3. 제품별 도장방법</h4>
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-700 mb-2">&lt;하도&gt;</p>
                  <ul className="space-y-1.5">
                    <li>1) 바탕 처리가 끝난 후 &apos;프로아 순에어 실러&apos;의 주제와 경화제를 1:1(무게비)로 충분히 혼합하여 로울러 또는 붓으로 50\u03bcm, 1회 도장합니다.</li>
                    <li>2) 후속 공정 표면의 기포 및 핀홀 현상 방지를 위해 누락 부위가 없어야 하며 부착 불량 방지를 위해 부분적으로 후도막이 되지 않도록 균일하게 도장합니다.</li>
                    <li>3) 1회 도장 시 도장면의 흡수가 심한 부분은 하도를 추가 도장합니다.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-2">&lt;상도&gt;</p>
                  <ul className="space-y-1.5">
                    <li>1) 상도는 콘크리트 기공에 의한 핀홀 및 기포 발생 방지를 위해 1차 스크래핑, 2차 본도장을 실시합니다.</li>
                    <li>2) 하도 도장 후 20\u00b0C에서 최소 12시간 경과한 다음 &apos;프로아 순에어 라이닝&apos;의 주제와 경화제를 7:1(무게비)로 충분히 혼합 후 1mm 내외로 1차 선행도장(스크래핑) 도장하십시오.</li>
                    <li>3) 상도 1차 도장 후 20\u00b0C에서 최소 24시간 경과한 다음 &apos;프로아 순에어 라이닝&apos;의 주제와 경화제를 7:1(무게비)로 충분히 혼합 후 1~2mm 두께로 2차 도장합니다.</li>
                    <li>4) 원액 사용이 가능하나 동절기 필요 시 &apos;A 109 신나&apos;를 1% 이내로 사용하십시오.</li>
                    <li>5) 라인 마킹(Line Marking)이 필요한 경우에는 상도 도장 후 20\u00b0C에서 최소 48시간 경과한 다음 Marking 주변을 마스킹 테이프로 Taping 처리 후 원하는 색상으로 도장하십시오.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Precautions */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">주의사항</h3>
          <div className="bg-red-50 rounded-xl p-6">
            <ul className="space-y-2 text-sm text-gray-600">
              <li>1) 도장 시나 경화 시 주위 온도는 10\u00b0C 이상, 30\u00b0C 이하가 적합하며, 수분의 응축을 피하기 위해 소지 표면온도는 이슬점보다 3\u00b0C 이상이어야 합니다.</li>
              <li>2) 각각의 도료는 도장하기 전 주제와 경화제를 추천된 비율에 따라 고속 교반기(RPM 1,000~1,500)로 약 3~5분간 균일하게 혼합하여 사용하십시오.</li>
              <li>3) 습도가 높은 날에 도장을 실시하게 되면 백화현상 등의 불량이 발생하기 쉬우므로 상대습도 80% 이상에서는 가급적 도장을 삼가 하십시오.</li>
              <li>4) 혼합된 도료는 반드시 가사시간 내에 전량 사용하여야 하며, 특히 사용하던 잔량의 도료에 새로운 도료를 혼합하여 사용을 금합니다.</li>
              <li>5) 작업장 내는 충분히 환기 시키십시오.</li>
              <li>6) 본 제품은 타 도료와 혼합하여 사용을 금합니다.</li>
              <li>7) 도료의 보관은 밀봉된 상태에서 건조하고 서늘한 곳에 보관하십시오.</li>
              <li>8) 특수한 소지, 구도막 위에 도장 시 사전에 시험도장을 한 후 이상이 없으면 도장하십시오(부착력, 색분리, 투명성 등 확인).</li>
              <li>9) 구도막 위 하도 도장 시 하도를 묽게 희석하여 후도막이 형성되지 않도록 도장하십시오(하도의 도막이 두꺼우면 부착력이 저하됩니다).</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
