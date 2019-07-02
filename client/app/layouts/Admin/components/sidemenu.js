//https://material.io/tools/icons
const menu = [
  { key: '1', name: 'Dashboard', icon: 'dashboard', link: '/admin/dashboard' },
  {
    key: '2',
    name: 'Content Manage',
    icon: 'format_size',
    menu: [
      {
        key: '2.1',
        name: 'Static Content',
        icon: 'format_size',
        link: '/admin/content-manage',
      },
      {
        key: '2.2',
        name: 'FAQ',
        icon: 'question_answer',
        link: '/admin/faq-manage',
      },
      {
        key: '2.3',
        name: 'FAQ Category',
        icon: 'question_answer',
        link: '/admin/faq-cat-manage',
      },
      {
        key: '2.4',
        name: 'Media',
        icon: 'perm_media',
        link: '/admin/media-manage',
      },
      {
        key: '2.5',
        name: 'Slider',
        icon: 'slideshow',
        link: '/admin/slider-manage',
      },
      {
        key: '2.6',
        name: 'Blog',
        icon: 'note_add',
        link: '/admin/blog-manage',
      },
      {
        key: '2.7',
        name: 'Blog Category',
        icon: 'note_add',
        link: '/admin/blog-cat-manage',
      },
    ],
  },
  {
    key: '3',
    name: 'Access Manage',
    icon: 'nature_people',
    menu: [
      {
        key: '3.1',
        name: 'Users',
        icon: 'account_circle',
        link: '/admin/user-manage',
      },
      {
        key: '3.2',
        name: 'Roles',
        icon: 'people',
        link: '/admin/role-manage',
      },
      {
        key: '3.3',
        name: 'Modules',
        icon: 'extension',
        link: '/admin/module-manage',
      },
    ],
  },
  {
    key: '4',
    name: 'Settings',
    icon: 'settings',
    menu: [
      {
        key: '4.1',
        name: 'Email Template',
        icon: 'email',
        link: '/admin/template-manage',
      },
    ],
  },
  {
    key: '5',
    name: 'Reports',
    icon: 'insert_chart',
    menu: [
      {
        key: '5.1',
        name: 'Contacts',
        icon: 'contact_phone',
        link: '/admin/contact-manage',
      },
      {
        key: '5.2',
        name: 'Subscribes',
        icon: 'subscriptions',
        link: '/admin/subscribe-manage',
      },
      {
        key: '5.3',
        name: 'Reports',
        icon: 'insert_chart',
        link: '/admin/reports',
      },
      {
        key: '5.4',
        name: 'Errors',
        icon: 'error_outline',
        link: '/admin/errors',
      },
    ],
  },
];
export default menu;
