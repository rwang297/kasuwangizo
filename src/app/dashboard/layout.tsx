import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Dashboard | msmeHub',
  description: 'Manage your business on msmeHub',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-0">
        {children}
      </main>
    </div>
  );
}
