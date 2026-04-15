"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Notice {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
}

interface GalleryItem {
  id: number;
  title: string;
  description: string | null;
  image_url: string;
  created_at: string;
}

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  company: string | null;
  category: string;
  title: string;
  content: string;
  is_read: boolean;
  created_at: string;
}

export default function AdminDashboard({
  initialNotices,
  initialGallery,
  initialContacts,
}: {
  initialNotices: Notice[];
  initialGallery: GalleryItem[];
  initialContacts: Contact[];
}) {
  const router = useRouter();
  const [tab, setTab] = useState<"notices" | "gallery" | "contacts">("contacts");
  const [notices, setNotices] = useState(initialNotices);
  const [gallery, setGallery] = useState(initialGallery);
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const unreadContacts = contacts.filter((c) => !c.is_read).length;

  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContent, setNoticeContent] = useState("");
  const [noticeAuthor, setNoticeAuthor] = useState("EPOONE");

  const [galleryTitle, setGalleryTitle] = useState("");
  const [galleryDesc, setGalleryDesc] = useState("");
  const [galleryFile, setGalleryFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  const submitNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/notices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: noticeTitle, content: noticeContent, author: noticeAuthor }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data.error || "등록 실패");
      return;
    }
    const { data } = await res.json();
    setNotices([data, ...notices]);
    setNoticeTitle("");
    setNoticeContent("");
  };

  const deleteNotice = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    const res = await fetch(`/api/notices/${id}`, { method: "DELETE" });
    if (!res.ok) {
      alert("삭제 실패");
      return;
    }
    setNotices(notices.filter((n) => n.id !== id));
  };

  const submitGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryFile) {
      alert("이미지를 선택해주세요.");
      return;
    }
    setUploading(true);
    const fd = new FormData();
    fd.append("title", galleryTitle);
    fd.append("description", galleryDesc);
    fd.append("file", galleryFile);
    const res = await fetch("/api/gallery", { method: "POST", body: fd });
    setUploading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data.error || "업로드 실패");
      return;
    }
    const { data } = await res.json();
    setGallery([data, ...gallery]);
    setGalleryTitle("");
    setGalleryDesc("");
    setGalleryFile(null);
    (document.getElementById("gallery-file") as HTMLInputElement).value = "";
  };

  const deleteGallery = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    const res = await fetch(`/api/gallery/${id}`, { method: "DELETE" });
    if (!res.ok) {
      alert("삭제 실패");
      return;
    }
    setGallery(gallery.filter((g) => g.id !== id));
  };

  const openContact = async (c: Contact) => {
    setSelectedContact(c);
    if (!c.is_read) {
      await fetch(`/api/contacts/${c.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_read: true }),
      });
      setContacts(contacts.map((x) => (x.id === c.id ? { ...x, is_read: true } : x)));
    }
  };

  const deleteContact = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    const res = await fetch(`/api/contacts/${id}`, { method: "DELETE" });
    if (!res.ok) {
      alert("삭제 실패");
      return;
    }
    setContacts(contacts.filter((c) => c.id !== id));
    setSelectedContact(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">관리자 페이지</h1>
          <p className="text-sm text-gray-500 mt-1">공지사항, 갤러리, 문의를 관리합니다.</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
        >
          로그아웃
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-gray-200">
        <button
          onClick={() => setTab("contacts")}
          className={`relative px-5 py-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
            tab === "contacts"
              ? "text-primary border-primary"
              : "text-gray-400 border-transparent hover:text-gray-600"
          }`}
        >
          문의 ({contacts.length})
          {unreadContacts > 0 && (
            <span className="ml-2 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold bg-red-500 text-white rounded-full">
              {unreadContacts}
            </span>
          )}
        </button>
        <button
          onClick={() => setTab("notices")}
          className={`px-5 py-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
            tab === "notices"
              ? "text-primary border-primary"
              : "text-gray-400 border-transparent hover:text-gray-600"
          }`}
        >
          공지사항 ({notices.length})
        </button>
        <button
          onClick={() => setTab("gallery")}
          className={`px-5 py-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
            tab === "gallery"
              ? "text-primary border-primary"
              : "text-gray-400 border-transparent hover:text-gray-600"
          }`}
        >
          갤러리 ({gallery.length})
        </button>
      </div>

      {/* Notices */}
      {tab === "notices" && (
        <div className="space-y-8">
          <form
            onSubmit={submitNotice}
            className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4"
          >
            <h3 className="font-bold text-gray-900">새 공지사항 작성</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                required
                value={noticeTitle}
                onChange={(e) => setNoticeTitle(e.target.value)}
                placeholder="제목"
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none"
              />
              <input
                type="text"
                value={noticeAuthor}
                onChange={(e) => setNoticeAuthor(e.target.value)}
                placeholder="작성자"
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none"
              />
            </div>
            <textarea
              required
              rows={6}
              value={noticeContent}
              onChange={(e) => setNoticeContent(e.target.value)}
              placeholder="내용"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none resize-none"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light text-sm"
              >
                등록
              </button>
            </div>
          </form>

          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="py-3 px-5 text-left font-semibold text-gray-700 w-16">#</th>
                  <th className="py-3 px-5 text-left font-semibold text-gray-700">제목</th>
                  <th className="py-3 px-5 text-left font-semibold text-gray-700 w-24 hidden md:table-cell">
                    작성자
                  </th>
                  <th className="py-3 px-5 text-left font-semibold text-gray-700 w-28 hidden md:table-cell">
                    날짜
                  </th>
                  <th className="py-3 px-5 w-20"></th>
                </tr>
              </thead>
              <tbody>
                {notices.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-10 text-center text-gray-400">
                      등록된 공지사항이 없습니다.
                    </td>
                  </tr>
                ) : (
                  notices.map((n, i) => (
                    <tr key={n.id} className="border-b border-gray-50 last:border-0">
                      <td className="py-3 px-5 text-gray-400">{notices.length - i}</td>
                      <td className="py-3 px-5 text-gray-900 font-medium">{n.title}</td>
                      <td className="py-3 px-5 text-gray-500 hidden md:table-cell">{n.author}</td>
                      <td className="py-3 px-5 text-gray-400 hidden md:table-cell">
                        {new Date(n.created_at).toLocaleDateString("ko-KR")}
                      </td>
                      <td className="py-3 px-5">
                        <button
                          onClick={() => deleteNotice(n.id)}
                          className="text-xs text-red-400 hover:text-red-600"
                        >
                          삭제
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Gallery */}
      {tab === "gallery" && (
        <div className="space-y-8">
          <form
            onSubmit={submitGallery}
            className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4"
          >
            <h3 className="font-bold text-gray-900">새 갤러리 항목 추가</h3>
            <input
              type="text"
              required
              value={galleryTitle}
              onChange={(e) => setGalleryTitle(e.target.value)}
              placeholder="제목"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none"
            />
            <input
              type="text"
              value={galleryDesc}
              onChange={(e) => setGalleryDesc(e.target.value)}
              placeholder="설명 (선택)"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none"
            />
            <input
              id="gallery-file"
              type="file"
              required
              accept="image/*"
              onChange={(e) => setGalleryFile(e.target.files?.[0] || null)}
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={uploading}
                className="px-6 py-2.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light text-sm disabled:opacity-50"
              >
                {uploading ? "업로드 중..." : "등록"}
              </button>
            </div>
          </form>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.length === 0 ? (
              <p className="col-span-full py-10 text-center text-gray-400 text-sm">
                등록된 갤러리 항목이 없습니다.
              </p>
            ) : (
              gallery.map((g) => (
                <div
                  key={g.id}
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden group"
                >
                  <div className="relative aspect-[4/3] bg-gray-50">
                    <Image
                      src={g.image_url}
                      alt={g.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <button
                      onClick={() => deleteGallery(g.id)}
                      className="absolute top-2 right-2 w-8 h-8 bg-red-500/90 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M10 7V3a2 2 0 012-2h0a2 2 0 012 2v4" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-semibold text-gray-900 truncate">{g.title}</p>
                    {g.description && (
                      <p className="text-xs text-gray-500 truncate mt-1">{g.description}</p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Contacts */}
      {tab === "contacts" && (
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
          {contacts.length === 0 ? (
            <p className="py-20 text-center text-gray-400 text-sm">접수된 문의가 없습니다.</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="py-3 px-5 text-left font-semibold text-gray-700 w-12">#</th>
                  <th className="py-3 px-5 text-left font-semibold text-gray-700 w-20">유형</th>
                  <th className="py-3 px-5 text-left font-semibold text-gray-700">제목</th>
                  <th className="py-3 px-5 text-left font-semibold text-gray-700 w-24 hidden md:table-cell">이름</th>
                  <th className="py-3 px-5 text-left font-semibold text-gray-700 w-28 hidden md:table-cell">날짜</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c, i) => (
                  <tr
                    key={c.id}
                    onClick={() => openContact(c)}
                    className={`border-b border-gray-50 last:border-0 cursor-pointer transition-colors hover:bg-gray-50/50 ${
                      !c.is_read ? "bg-red-50/30 font-semibold" : ""
                    }`}
                  >
                    <td className="py-3 px-5 text-gray-400">{contacts.length - i}</td>
                    <td className="py-3 px-5">
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                        {c.category}
                      </span>
                    </td>
                    <td className="py-3 px-5 text-gray-900">
                      {!c.is_read && <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full mr-2" />}
                      {c.title}
                    </td>
                    <td className="py-3 px-5 text-gray-500 hidden md:table-cell">{c.name}</td>
                    <td className="py-3 px-5 text-gray-400 hidden md:table-cell">
                      {new Date(c.created_at).toLocaleDateString("ko-KR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelectedContact(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-100 flex items-start justify-between">
              <div>
                <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full mb-2">
                  {selectedContact.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{selectedContact.title}</h3>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(selectedContact.created_at).toLocaleString("ko-KR")}
                </p>
              </div>
              <button
                onClick={() => setSelectedContact(null)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-3 border-b border-gray-100 text-sm">
              <div>
                <p className="text-gray-400 text-xs mb-1">이름</p>
                <p className="text-gray-900 font-medium">{selectedContact.name}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">연락처</p>
                <p className="text-gray-900 font-medium">
                  <a href={`tel:${selectedContact.phone}`} className="hover:text-primary">
                    {selectedContact.phone}
                  </a>
                </p>
              </div>
              {selectedContact.email && (
                <div>
                  <p className="text-gray-400 text-xs mb-1">이메일</p>
                  <p className="text-gray-900 font-medium">
                    <a href={`mailto:${selectedContact.email}`} className="hover:text-primary">
                      {selectedContact.email}
                    </a>
                  </p>
                </div>
              )}
              {selectedContact.company && (
                <div>
                  <p className="text-gray-400 text-xs mb-1">회사/기관명</p>
                  <p className="text-gray-900 font-medium">{selectedContact.company}</p>
                </div>
              )}
            </div>

            <div className="p-6">
              <p className="text-gray-400 text-xs mb-2">문의 내용</p>
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {selectedContact.content}
              </p>
            </div>

            <div className="px-6 pb-6 flex justify-end">
              <button
                onClick={() => deleteContact(selectedContact.id)}
                className="text-sm text-red-400 hover:text-red-600"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
