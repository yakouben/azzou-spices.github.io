// بيانات المسؤول
const adminCredentials = {
    email: 'ishak@gmail.com',
    password: 'ishak123'
};

// التحقق من تسجيل الدخول عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

// معالجة تسجيل الدخول
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    
    console.log('محاولة تسجيل الدخول:', { email, password }); // للتأكد من استلام البيانات

    if (email === adminCredentials.email && password === adminCredentials.password) {
        console.log('تسجيل الدخول ناجح'); // للتأكد من نجاح التحقق
        
        // تخزين حالة تسجيل الدخول
        localStorage.setItem('isAdminLoggedIn', 'true');
        localStorage.setItem('adminEmail', email);
        
        // الانتقال إلى لوحة التحكم
        window.location.href = '/admin';
    } else {
        console.log('فشل تسجيل الدخول'); // للتأكد من تنفيذ حالة الخطأ
        showError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
}

// دالة إظهار رسالة الخطأ
function showError(message) {
    // إزالة رسائل الخطأ السابقة
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // إنشاء عنصر رسالة الخطأ
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4';
    errorDiv.innerHTML = `
        <span class="block sm:inline">${message}</span>
    `;

    // إضافة رسالة الخطأ إلى النموذج
    const form = document.getElementById('loginForm');
    form.appendChild(errorDiv);

    // إخفاء رسالة الخطأ بعد 3 ثواني
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}