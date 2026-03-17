export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md glass rounded-[30px] p-8">
        <h1 className="text-3xl font-bold">إنشاء حساب</h1>
        <p className="text-gray-400 mt-2">ابدأ رحلتك مع Millionaire</p>

        <form className="mt-8 space-y-4">
          <input type="text" placeholder="الاسم الكامل" className="input-dark" />
          <input type="email" placeholder="البريد الإلكتروني" className="input-dark" />
          <input type="password" placeholder="كلمة المرور" className="input-dark" />
          <button className="w-full py-3 rounded-2xl gold-btn">إنشاء الحساب</button>
        </form>
      </div>
    </main>
  )
}
