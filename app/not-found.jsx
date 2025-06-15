export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Topilmadi</h1>
                <p className="text-gray-700 mb-4">Kechirasiz, bu foydalanuvchi mavjud emas.</p>
                <a href="/" className="text-blue-600 hover:underline">Bosh sahifaga qaytish</a>
            </div>
        </div>
    );
}
