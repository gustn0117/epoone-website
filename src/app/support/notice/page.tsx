"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useState, useEffect } from "react";

const tabs = [
  { label: "공지사항", href: "/support/notice" },
  { label: "갤러리", href: "/support/gallery" },
];

interface Notice {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

export default function NoticePage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState<Notice | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("epoone-notices");
    if (saved) {
      setNotices(JSON.parse(saved));
    }
  }, []);

  const saveNotices = (list: Notice[]) => {
    setNotices(list);
    localStorage.setItem("epoone-notices", JSON.stringify(list));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== "epoone2026") {
      alert("비밀번호가 올바르지 않습니다.");
      return;
    }
    const newNotice: Notice = {
      id: Date.now(),
      title,
      content,
      author,
      date: new Date().toLocaleDateString("ko-KR"),
    };
    saveNotices([newNotice, ...notices]);
    setTitle("");
    setContent("");
    setAuthor("");
    setPassword("");
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    const pw = prompt("삭제 비밀번호를 입력하세요.");
    if (pw !== "epoone2026") {
      alert("비밀번호가 올바르지 않습니다.");
      return;
    }
    saveNotices(notices.filter((n) => n.id !== id));
    setSelected(null);
  };

  return (
    <SubpageLayout
      category="SUPPORT"
      title="고객센터"
      description="에포원의 소식을 전해드립니다"
      tabs={tabs}
      activeTab="/support/notice"
    >
      <div className="max-w-4xl mx-auto">
        {/* Detail View */}
        {selected ? (
          <div>
            <button
              onClick={() => setSelected(null)}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              목록으로
            </button>
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <div className="border-b border-gray-100 pb-5 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{selected.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{selected.author}</span>
                  <span>{selected.date}</span>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap min-h-[200px]">
                {selected.content}
              </div>
              <div className="mt-8 pt-5 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => handleDelete(selected.id)}
                  className="text-sm text-red-400 hover:text-red-600 transition-colors"
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        ) : showForm ? (
          /* Write Form */
          <div>
            <button
              onClick={() => setShowForm(false)}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              목록으로
            </button>
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">글 작성</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">작성자 <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      required
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all"
                      placeholder="작성자명"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">비밀번호 <span className="text-red-400">*</span></label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all"
                      placeholder="관리자 비밀번호"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">제목 <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all"
                    placeholder="제목을 입력해 주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">내용 <span className="text-red-400">*</span></label>
                  <textarea
                    required
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all resize-none leading-relaxed"
                    placeholder="내용을 입력해 주세요"
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors text-sm"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-all text-sm"
                  >
                    등록
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          /* List View */
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">총 <span className="font-bold text-gray-900">{notices.length}</span>건</p>
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-medium rounded-xl hover:bg-primary-light transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                글쓰기
              </button>
            </div>

            {notices.length === 0 ? (
              <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-400">등록된 공지사항이 없습니다.</p>
              </div>
            ) : (
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                      <th className="py-3.5 px-5 text-left font-semibold text-gray-700 w-16">번호</th>
                      <th className="py-3.5 px-5 text-left font-semibold text-gray-700">제목</th>
                      <th className="py-3.5 px-5 text-left font-semibold text-gray-700 w-24 hidden md:table-cell">작성자</th>
                      <th className="py-3.5 px-5 text-left font-semibold text-gray-700 w-28 hidden md:table-cell">날짜</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notices.map((notice, i) => (
                      <tr
                        key={notice.id}
                        className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 cursor-pointer transition-colors"
                        onClick={() => setSelected(notice)}
                      >
                        <td className="py-3.5 px-5 text-gray-400">{notices.length - i}</td>
                        <td className="py-3.5 px-5 text-gray-900 font-medium hover:text-primary transition-colors">{notice.title}</td>
                        <td className="py-3.5 px-5 text-gray-500 hidden md:table-cell">{notice.author}</td>
                        <td className="py-3.5 px-5 text-gray-400 hidden md:table-cell">{notice.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </SubpageLayout>
  );
}
