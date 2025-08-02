'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: '基础版',
    price: 99,
    period: '月',
    description: '适合个人学习者和初学者',
    features: [
      '基础课程访问',
      '社区交流',
      '基础技术支持',
      '学习进度跟踪'
    ],
    popular: false
  },
  {
    name: '专业版',
    price: 299,
    period: '月',
    description: '适合有一定基础的卖家',
    features: [
      '全部课程访问',
      '一对一咨询',
      '高级技术支持',
      '专属学习群',
      '实战案例分析',
      '导师答疑服务'
    ],
    popular: true
  },
  {
    name: '企业版',
    price: 599,
    period: '月',
    description: '适合团队和企业用户',
    features: [
      '全部课程访问',
      '团队管理功能',
      '专属客户经理',
      '定制化培训',
      '数据分析报告',
      '优先技术支持'
    ],
    popular: false
  }
]

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            选择适合您的方案
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            灵活的付费方案，满足不同阶段的学习需求
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    最受欢迎
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">¥{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/register"
                className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                立即开始
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            需要定制化方案？联系我们获取专属报价
          </p>
          <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
            联系客服 →
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 