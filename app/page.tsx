import Image from 'next/image'
import styles from './page.module.css'
import TodoList from './component/todo-list'

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto overflow-hidden p-10 bg-gray-50">
      <TodoList />
    </main>
  )
}
