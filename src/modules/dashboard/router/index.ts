const ROUTE_NAME = 'dashboard';

export default {
    path: `/${ROUTE_NAME}`,
    redirect: `/${ROUTE_NAME}/overview`,
    name: ROUTE_NAME,
    component: () => import('@/modules/dashboard/layouts/DashboardLayout.vue'),
    children: [
        {
            path: `/${ROUTE_NAME}/overview`,
            name: 'dashboard-overview',
            component: () => import('@/modules/dashboard/views/DashboardView.vue'),
            props: {
                title: 'Listado de Juegos'
            }
        }
    ]
}