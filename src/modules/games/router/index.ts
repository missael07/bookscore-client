const ROUTE_NAME = 'games';

export default {
    path: `/${ROUTE_NAME}`,
    redirect: `/${ROUTE_NAME}/list`,
    name: 'games',
    component: () => import('@/modules/games/layouts/GamesLayout.vue'),
    children: [
        {
            path: `/${ROUTE_NAME}/list`,
            name: 'games-list',
            component: () => import('@/modules/games/views/GamesListView.vue'),
            props: {
                title: 'Listado de Juegos'
            }
        }
    ]
}