// 移动端跨境电商知识付费平台 - 交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const searchBtn = document.getElementById('searchBtn');
    const searchBar = document.getElementById('searchBar');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            searchBar.classList.add('hidden');
        });
    }
    
    if (searchBtn && searchBar) {
        searchBtn.addEventListener('click', function() {
            searchBar.classList.toggle('hidden');
            mobileMenu.classList.add('hidden');
        });
    }

    // 购物车功能
    let cart = JSON.parse(localStorage.getItem('mobileCart')) || [];
    
    function updateCart() {
        localStorage.setItem('mobileCart', JSON.stringify(cart));
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = cart.length;
            cartCount.style.display = cart.length > 0 ? 'block' : 'none';
        }
    }

    // 添加到购物车
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const courseId = this.dataset.courseId;
            const courseTitle = this.dataset.courseTitle;
            const coursePrice = this.dataset.coursePrice;
            
            // 检查是否已在购物车中
            const existingItem = cart.find(item => item.id === courseId);
            if (!existingItem) {
                cart.push({
                    id: courseId,
                    title: courseTitle,
                    price: coursePrice
                });
                updateCart();
                showMobileNotification('课程已添加到购物车！');
            } else {
                showMobileNotification('课程已在购物车中！');
            }
        });
    });

    // 立即购买
    const buyNowButtons = document.querySelectorAll('.buy-now');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const courseId = this.dataset.courseId;
            const courseTitle = this.dataset.courseTitle;
            const coursePrice = this.dataset.coursePrice;
            
            showMobilePaymentModal(courseTitle, coursePrice);
        });
    });

    // 购物车按钮点击
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            showMobileCart();
        });
    }

    // 显示移动端通知
    function showMobileNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 left-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg z-50 transform translate-y-[-100%] transition-transform duration-300';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // 显示通知
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
        }, 100);
        
        // 隐藏通知
        setTimeout(() => {
            notification.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // 移动端支付模态框
    function showMobilePaymentModal(courseTitle, coursePrice) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-lg w-full max-w-sm">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-4">确认购买</h3>
                    <div class="mb-6">
                        <p class="text-gray-600 mb-2">课程：${courseTitle}</p>
                        <p class="text-2xl font-bold text-blue-600">¥${coursePrice}</p>
                    </div>
                    <div class="space-y-4">
                        <input type="tel" placeholder="请输入手机号" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <div class="flex space-x-2">
                            <input type="text" placeholder="验证码" class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <button class="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                                获取验证码
                            </button>
                        </div>
                    </div>
                    <div class="flex space-x-3 mt-6">
                        <button class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors" onclick="this.closest('.fixed').remove()">
                            取消
                        </button>
                        <button class="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors" onclick="processMobilePayment('${courseTitle}', ${coursePrice})">
                            确认支付
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // 处理移动端支付
    window.processMobilePayment = function(courseTitle, coursePrice) {
        const modal = document.querySelector('.fixed');
        modal.innerHTML = `
            <div class="bg-white rounded-lg w-full max-w-sm p-6 text-center">
                <div class="text-green-500 text-6xl mb-4">✓</div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">支付成功！</h3>
                <p class="text-gray-600 mb-6">您已成功购买《${courseTitle}》课程</p>
                <button class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors" onclick="this.closest('.fixed').remove()">
                    开始学习
                </button>
            </div>
        `;
    };

    // 显示移动端购物车
    function showMobileCart() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        
        let cartContent = '';
        if (cart.length === 0) {
            cartContent = '<p class="text-gray-500 text-center py-8">购物车是空的</p>';
        } else {
            cartContent = cart.map(item => `
                <div class="flex items-center justify-between py-3 border-b border-gray-200">
                    <div>
                        <h4 class="font-medium text-gray-900">${item.title}</h4>
                        <p class="text-sm text-gray-600">¥${item.price}</p>
                    </div>
                    <button class="text-red-500 text-sm" onclick="removeFromCart('${item.id}')">删除</button>
                </div>
            `).join('');
        }
        
        modal.innerHTML = `
            <div class="bg-white rounded-lg w-full max-w-sm">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-xl font-bold text-gray-900">购物车</h3>
                        <button onclick="this.closest('.fixed').remove()" class="text-gray-500">✕</button>
                    </div>
                    <div class="max-h-64 overflow-y-auto">
                        ${cartContent}
                    </div>
                    ${cart.length > 0 ? `
                        <div class="mt-4 pt-4 border-t border-gray-200">
                            <div class="flex items-center justify-between mb-4">
                                <span class="font-medium">总计：</span>
                                <span class="text-xl font-bold text-blue-600">¥${cart.reduce((sum, item) => sum + parseInt(item.price), 0)}</span>
                            </div>
                            <button class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                结算
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // 从购物车移除
    window.removeFromCart = function(courseId) {
        cart = cart.filter(item => item.id !== courseId);
        updateCart();
        showMobileNotification('已从购物车移除');
        // 重新显示购物车
        setTimeout(() => {
            const modal = document.querySelector('.fixed');
            if (modal) {
                modal.remove();
                showMobileCart();
            }
        }, 1000);
    };

    // 搜索功能
    const searchInput = document.querySelector('#searchBar input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const courseCards = document.querySelectorAll('.course-card');
            
            courseCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // 平滑滚动
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // 关闭菜单
                if (mobileMenu) mobileMenu.classList.add('hidden');
            }
        });
    });

    // 触摸反馈
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 防止双击缩放
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // 初始化购物车显示
    updateCart();

    // 底部导航激活状态
    const bottomNavLinks = document.querySelectorAll('nav a');
    bottomNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // 移除所有激活状态
            bottomNavLinks.forEach(l => l.classList.remove('text-blue-600'));
            bottomNavLinks.forEach(l => l.classList.add('text-gray-600'));
            // 添加当前激活状态
            this.classList.remove('text-gray-600');
            this.classList.add('text-blue-600');
        });
    });
});

// 移动端工具函数
function formatMobilePrice(price) {
    return `¥${price}`;
}

function showMobileToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-20 left-4 right-4 px-4 py-3 rounded-lg shadow-lg z-50 transform translate-y-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
        toast.style.transform = 'translateY(full)';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
} 