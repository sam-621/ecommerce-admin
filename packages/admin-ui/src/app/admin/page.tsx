import { AdminPageLayout } from '@/components/layouts';
import { Button } from '@/components/theme';

export default function DashboardRoute() {
  return (
    <AdminPageLayout title="Dashboard" actions={<Button>Export</Button>}>
      <h1>Dashboard</h1>
    </AdminPageLayout>
  );
}
