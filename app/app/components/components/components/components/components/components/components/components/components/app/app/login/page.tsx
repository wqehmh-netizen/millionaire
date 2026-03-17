export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md glass rounded-[30px] p-8">
        <h1 className="text-3xl font-bold">تسجيل الدخول</h1>
        <p className="text-gray-400 mt-2">أهلًا بعودتك إلى Millionaire</p>

        <form className="mt-8 space-y-4">
          <input type="email" placeholder="البريد الإلكتروني" className="input-dark" />
          <input type="password" placeholder="كلمة المرور" className="input-dark" />
          <button className="w-full py-3 rounded-2xl gold-btn">دخول</button>
        </form>
      </div>
    </main>
  )
}
