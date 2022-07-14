const menus = {
    "hire": [
        {
            name: 'İş Sepetim',
            path: '/hire/',
            icon: 'dashboard',
        },
        {
            name: 'Başvurular',
            icon: 'groups',
            path: "/hire/job/applications",
            children: [
                {
                    name: 'Kabul Edilen',
                    path: '/hire/job/applications/accepted',
                    icon: 'check',
                },
                {
                    name: 'Bekleyen',
                    path: '/hire/job/applications/pending',
                    icon: 'pending_actions',
                },
                {
                    name: 'Reddedilen',
                    path: '/hire/job/applications/rejected',
                    icon: 'close',
                }
            ]
        },
    ],
    "worker": [
        {
            name: 'Anasayfa',
            path: '/worker/',
            icon: 'dashboard',
        },
        {
            name: 'İş Bul',
            path: '/worker/find-job',
            icon: 'search',
        }
    ]
}

const hire = menus.hire;
const worker = menus.worker;

module.exports = {hire, worker}
