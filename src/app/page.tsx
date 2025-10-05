import { redirect } from 'next/navigation';

export default function RootPage() {
  // 重定向到主页
  redirect('/home');
}
