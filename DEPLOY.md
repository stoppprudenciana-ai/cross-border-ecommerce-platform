# 跨境电商知识付费平台 - 部署指南

## 快速开始

### 1. 本地预览
由于项目使用了静态HTML文件，您可以直接在浏览器中打开 `index.html` 文件来预览网站。

### 2. 使用本地服务器（推荐）
为了获得更好的体验，建议使用本地服务器：

#### 使用Python（如果已安装）
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### 使用Node.js（如果已安装）
```bash
# 安装 http-server
npm install -g http-server

# 启动服务器
http-server -p 8000
```

#### 使用PHP（如果已安装）
```bash
php -S localhost:8000
```

然后在浏览器中访问 `http://localhost:8000`

### 3. 部署到线上

#### GitHub Pages
1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为源
4. 访问生成的URL

#### Netlify
1. 注册Netlify账户
2. 连接GitHub仓库
3. 设置构建命令（可选）
4. 部署完成

#### Vercel
1. 注册Vercel账户
2. 导入GitHub仓库
3. 自动部署完成

#### 传统虚拟主机
1. 将所有HTML、CSS、JS文件上传到服务器
2. 确保文件权限正确
3. 配置域名解析

## 文件结构

```
├── index.html          # 首页
├── courses.html        # 课程详情页
├── script.js           # 交互脚本
├── README.md           # 项目说明
├── DEPLOY.md           # 部署指南
└── components/         # Next.js组件（可选）
    ├── Header.tsx
    ├── Hero.tsx
    ├── Features.tsx
    ├── Courses.tsx
    ├── Testimonials.tsx
    ├── Pricing.tsx
    ├── Footer.tsx
    └── CourseList.tsx
```

## 功能特性

### 已实现功能
- ✅ 响应式设计
- ✅ 现代化UI界面
- ✅ 课程展示
- ✅ 购物车功能
- ✅ 支付模拟
- ✅ 搜索和筛选
- ✅ 用户评分
- ✅ 平滑滚动
- ✅ 移动端适配

### 待扩展功能
- 🔄 用户注册/登录
- 🔄 真实支付集成
- 🔄 视频播放器
- 🔄 学习进度跟踪
- 🔄 社区讨论
- 🔄 后台管理系统

## 技术栈

### 前端
- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (ES6+)
- 响应式设计

### 设计
- 现代化UI设计
- 渐变色彩方案
- 流畅动画效果
- 直观用户体验

## 自定义配置

### 修改颜色主题
在HTML文件中找到以下CSS类并修改：
```css
.bg-blue-600  /* 主色调 */
.text-blue-600 /* 文字颜色 */
```

### 添加新课程
在 `index.html` 中的课程网格部分添加新的课程卡片：
```html
<div class="course-card" data-course-id="新ID" data-category="课程分类" data-level="难度等级">
    <!-- 课程内容 -->
</div>
```

### 修改联系信息
在页面底部的联系信息部分修改：
- 邮箱地址
- 电话号码
- 公司地址

## 性能优化

### 图片优化
- 使用WebP格式图片
- 压缩图片大小
- 使用CDN加速

### 代码优化
- 压缩CSS和JavaScript
- 启用Gzip压缩
- 使用浏览器缓存

## 安全考虑

### 生产环境
- 使用HTTPS协议
- 配置CSP头
- 启用HSTS
- 定期更新依赖

### 数据保护
- 用户数据加密
- 支付信息保护
- 隐私政策合规

## 维护指南

### 定期更新
- 检查依赖更新
- 更新安全补丁
- 优化性能

### 监控
- 网站可用性监控
- 性能监控
- 错误日志记录

## 联系支持

如果在部署过程中遇到问题，请联系：
- 邮箱：contact@crossborder.com
- 电话：400-123-4567

## 许可证

本项目采用MIT许可证，详情请查看LICENSE文件。 