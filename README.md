# 跨境电商知识付费平台

一个现代化的中文跨境电商知识付费网站，基于 Next.js 14 和 TypeScript 构建。

## 功能特性

### 🎯 核心功能
- **课程管理**: 完整的课程展示和管理系统
- **用户认证**: 用户注册、登录和个人中心
- **支付系统**: 集成 Stripe 支付网关
- **响应式设计**: 支持桌面端和移动端
- **现代化UI**: 使用 Tailwind CSS 构建美观界面

### 📚 课程内容
- 跨境电商入门基础
- 亚马逊运营实战
- Shopify独立站建设
- 跨境电商营销策略
- 物流与供应链管理
- 数据分析与决策

### 🎨 设计特色
- 现代化渐变色彩方案
- 流畅的动画效果
- 直观的用户界面
- 专业的视觉设计

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **表单**: React Hook Form + Zod
- **认证**: NextAuth.js
- **支付**: Stripe
- **数据库**: Prisma + PostgreSQL
- **部署**: Vercel

## 快速开始

### 1. 克隆项目
```bash
git clone <repository-url>
cd cross-border-ecommerce-platform
```

### 2. 安装依赖
```bash
npm install
```

### 3. 环境配置
创建 `.env.local` 文件并配置以下环境变量：

```env
# 数据库
DATABASE_URL="postgresql://username:password@localhost:5432/crossborder"

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."

# 邮件服务
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
```

### 4. 数据库设置
```bash
# 生成 Prisma 客户端
npx prisma generate

# 运行数据库迁移
npx prisma db push
```

### 5. 启动开发服务器
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

## 项目结构

```
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── courses/           # 课程页面
├── components/            # React 组件
│   ├── Header.tsx        # 网站头部
│   ├── Hero.tsx          # 首页英雄区域
│   ├── Features.tsx      # 特色功能
│   ├── Courses.tsx       # 课程展示
│   ├── Testimonials.tsx  # 用户评价
│   ├── Pricing.tsx       # 价格方案
│   ├── Footer.tsx        # 网站底部
│   └── CourseList.tsx    # 课程列表
├── lib/                  # 工具库
├── prisma/              # 数据库模型
└── public/              # 静态资源
```

## 部署

### Vercel 部署
1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 部署完成

### 其他平台
项目支持部署到任何支持 Next.js 的平台：
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

- 项目链接: [https://github.com/your-username/cross-border-ecommerce-platform](https://github.com/your-username/cross-border-ecommerce-platform)
- 邮箱: contact@crossborder.com
- 电话: 400-123-4567

## 致谢

感谢所有为这个项目做出贡献的开发者和设计师。 