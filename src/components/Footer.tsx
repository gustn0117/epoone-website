import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary-light" />

      <div className="max-w-7xl mx-auto px-4 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="mb-4">
              <Image src="/images/logo.png" alt="EPOONE" width={120} height={40} className="object-contain brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-6">
              친환경 에폭시 바닥재 전문기업<br />
              자연과 사람을 생각하는 기업
            </p>
            <div className="flex gap-3">
              <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400">KS F 4937</div>
              <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400">특허 10-2025206</div>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-accent rounded-full" />
              회사소개
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/company/greeting" className="hover:text-white transition-colors">인사말</Link></li>
              <li><Link href="/company/history" className="hover:text-white transition-colors">연혁</Link></li>
              <li><Link href="/company/certificates" className="hover:text-white transition-colors">인증서</Link></li>
              <li><Link href="/company/location" className="hover:text-white transition-colors">오시는길</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-accent rounded-full" />
              제품소개
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/products/j-epoxy-2000" className="hover:text-white transition-colors">제이폭시-2000 라이닝</Link></li>
              <li><Link href="/products/j-epoxy-1000" className="hover:text-white transition-colors">제이폭시-1000 하도</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-accent rounded-full" />
              연락처
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>경기도 평택시 고덕중앙로 290, 1034호</li>
              <li>TEL 031-623-0525</li>
              <li>E-mail info@epoone.com</li>
              <li>운영시간 09:00 ~ 18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">(주)에포원 | 대표 송득범</p>
          <p className="text-xs text-gray-600">
            Copyright &copy; {new Date().getFullYear()} EPOONE Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
