'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, Users, Star, Play } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: '跨境电商入门基础',
    description: '从零开始学习跨境电商基础知识',
    price: 299,
    originalPrice: 399,
    duration: '8小时',
    students: 1250,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    category: '入门课程',
    level: '初级'
  },
  {
    id: 2,
    title: '亚马逊运营实战',
    description: '深入掌握亚马逊平台运营技巧',
    price: 599,
    originalPrice: 799,
    duration: '16小时',
    students: 890,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
    category: '实战课程',
    level: '中级'
  },
  {
    id: 3,
    title: 'Shopify独立站建设',
    description: '学习Shopify独立站搭建和运营',
    price: 499,
    originalPrice: 699,
    duration: '12小时',
    students: 756,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    category: '技术课程',
    level: '中级'
  }
]

export default function Courses() {
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
            精选课程
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            专业的跨境电商课程体系，从入门到精通
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}人
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-600">
                      ¥{course.price}
                    </span>
                    <span className="text-gray-400 line-through">
                      ¥{course.originalPrice}
                    </span>
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    查看详情
                    <Play className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
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
          <Link href="/courses" className="btn-primary text-lg px-8 py-3">
            查看全部课程
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 