// 跨境电商知识付费平台 - 交互脚本

document.addEventListener('DOMContentLoaded', function() {
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
            }
        });
    });

    // 购物车功能
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        // 更新购物车图标显示
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = cart.length;
            cartCount.style.display = cart.length > 0 ? 'block' : 'none';
        }
    }

    // 添加到购物车
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
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
                showNotification('课程已添加到购物车！');
            } else {
                showNotification('课程已在购物车中！');
            }
        });
    });

    // 立即购买
    const buyNowButtons = document.querySelectorAll('.buy-now');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.dataset.courseId;
            const courseTitle = this.dataset.courseTitle;
            const coursePrice = this.dataset.coursePrice;
            
            // 模拟支付流程
            showPaymentModal(courseTitle, coursePrice);
        });
    });

    // 显示通知
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // 显示通知
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // 隐藏通知
        setTimeout(() => {
            notification.style.transform = 'translateX(full)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // 支付模态框
    function showPaymentModal(courseTitle, coursePrice) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                <h3 class="text-xl font-bold text-gray-900 mb-4">确认购买</h3>
                <div class="mb-6">
                    <p class="text-gray-600 mb-2">课程：${courseTitle}</p>
                    <p class="text-2xl font-bold text-blue-600">¥${coursePrice}</p>
                </div>
                <div class="space-y-4">
                    <input type="text" placeholder="请输入手机号" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <input type="text" placeholder="请输入验证码" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="flex space-x-4 mt-6">
                    <button class="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors" onclick="this.closest('.fixed').remove()">
                        取消
                    </button>
                    <button class="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors" onclick="processPayment('${courseTitle}', ${coursePrice})">
                        确认支付
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // 处理支付
    window.processPayment = function(courseTitle, coursePrice) {
        // 模拟支付处理
        const modal = document.querySelector('.fixed');
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
                <div class="text-green-500 text-6xl mb-4">✓</div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">支付成功！</h3>
                <p class="text-gray-600 mb-6">您已成功购买《${courseTitle}》课程</p>
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors" onclick="this.closest('.fixed').remove()">
                    开始学习
                </button>
            </div>
        `;
    };

    // 搜索功能
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const courseCards = document.querySelectorAll('.course-card');
            
            courseCards.forEach(card => {
                const title = card.querySelector('.course-title').textContent.toLowerCase();
                const description = card.querySelector('.course-description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // 筛选功能
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            const filterType = this.dataset.filterType;
            const filterValue = this.value;
            const courseCards = document.querySelectorAll('.course-card');
            
            courseCards.forEach(card => {
                const cardValue = card.dataset[filterType];
                if (filterValue === 'all' || cardValue === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 移动端菜单切换
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 滚动时改变导航栏样式
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('bg-white/95', 'backdrop-blur-sm');
        } else {
            header.classList.remove('bg-white/95', 'backdrop-blur-sm');
        }
    });

    // 课程评分功能
    const ratingStars = document.querySelectorAll('.rating-star');
    ratingStars.forEach((star, index) => {
        star.addEventListener('click', function() {
            const rating = index + 1;
            const courseId = this.closest('.course-card').dataset.courseId;
            
            // 更新星星显示
            const stars = this.parentElement.querySelectorAll('.rating-star');
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add('text-yellow-400');
                    s.classList.remove('text-gray-300');
                } else {
                    s.classList.remove('text-yellow-400');
                    s.classList.add('text-gray-300');
                }
            });
            
            // 保存评分
            localStorage.setItem(`rating_${courseId}`, rating);
            showNotification(`感谢您的评分：${rating} 星`);
        });
    });

    // 初始化评分显示
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        const courseId = card.dataset.courseId;
        const savedRating = localStorage.getItem(`rating_${courseId}`);
        if (savedRating) {
            const stars = card.querySelectorAll('.rating-star');
            stars.forEach((star, index) => {
                if (index < parseInt(savedRating)) {
                    star.classList.add('text-yellow-400');
                    star.classList.remove('text-gray-300');
                }
            });
        }
    });
});

// 工具函数
function formatPrice(price) {
    return `¥${price}`;
}

function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}小时${mins}分钟`;
}

// 导出函数供HTML使用
window.showNotification = function(message) {
    // 通知函数已在上面定义
}; 