import CourseList from '@/components/CourseList'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CoursesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <CourseList />
      </div>
      <Footer />
    </main>
  )
} 