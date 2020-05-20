/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  adminSidebar: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/setup',
        'getting-started/clusters',
        'getting-started/spaces',
        'getting-started/users-limits',
        'getting-started/templates',
        'getting-started/teams',
      ],
    },
    {
      type: 'category',
      label: 'Spaces',
      items: [
        'spaces/basics',
        'spaces/sharing',
        'spaces/sleep-mode',
        'spaces/isolation',
      ],
    },
    {
      type: 'category',
      label: 'Clusters',
      items: [
        'clusters/basics',
        'clusters/accounts',
        'clusters/account-quotas',
        'clusters/templates',
        'clusters/apps',
      ],
    },
    {
      type: 'category',
      label: 'Users & Teams',
      items: [
        'users/users',
        'users/teams',
        'users/authentication',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'administration/basics',
        'administration/license',
        'administration/upgrade',
        'administration/uninstall',
        'administration/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Profile',
      items: [
        'profile/basics',
        'profile/access-keys',
      ],
    },
    {
      type: 'category',
      label: 'Kubernetes Resources',
      items: [
        'resources/basics',
        'resources/cluster',
        'resources/user',
        'resources/team',
        'resources/account',
        'resources/account-quota',
        'resources/template',
        'resources/template-instance',
        'resources/space',
      ],
    },
    {
      type: 'category',
      label: 'CLI Commands',
      items: [],
    },
    {
      type: 'doc',
      id: 'architecture/basics',
    },
    {
      type: 'doc',
      id: 'onboarding/basics',
    },
    {
      type: 'link',
      label: '↗️ DevSpace',
      href: 'https://devspace.sh/cli/docs/introduction',
    },
  ],
};