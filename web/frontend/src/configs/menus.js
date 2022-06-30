const menus = {
    "hire": [
        {
            name: 'Anasayfa',
            path: '/hire/',
            icon: 'dashboard',
            component: 'Dashboard'
        },
        {
            name: 'İş Listem',
            path: '/hire/job',
            icon: 'work',
            component: 'Job'
        },
        {
            name: 'Başvurular',
            icon: 'groups',
            path: '/hire/applications/',
            children: [
                {
                    name: 'Kabul Edilen',
                    path: '/hire/applications/accepted',
                    icon: 'check',
                    component: 'JobApplicationAccepted'
                },
                {
                    name: 'Bekleyen',
                    path: '/hire/applications/pending',
                    icon: 'pending_actions',
                    component: 'JobApplicationPending'
                },
                {
                    name: 'Reddedilen',
                    path: '/hire/applications/rejected',
                    icon: 'close',
                    component: 'JobApplicationRejected'
                }
            ]
        },
    ],
    "worker": [
        {
            name: 'Anasayfa',
            path: '/worker/',
            icon: 'dashboard',
            component: 'Home'
        },
    ]
}

const hire = menus.hire;
const worker = menus.worker;

module.exports = {hire, worker}
