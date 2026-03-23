import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://web.casa',
  base: '/docs',
  integrations: [
    starlight({
      title: {
        en: 'Web.Casa Docs',
        'zh-CN': 'Web.Casa 文档',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        zh: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/web-casa/webcasa',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/web-casa/webcasa/edit/main/docs/',
      },
      lastUpdated: true,
      customCss: ['./src/styles/custom.css'],
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/logo.png',
      },
      components: {
        Head: './src/components/Head.astro',
        Hero: './src/components/Hero.astro',
        SiteTitle: './src/components/SiteTitle.astro',
      },
      head: [
        // og:image for social sharing
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://web.casa/docs/og-image.svg' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:width', content: '1200' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:height', content: '630' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image', content: 'https://web.casa/docs/og-image.svg' },
        },
        // JSON-LD structured data is injected by src/components/Head.astro
        // to support locale-aware name/description.
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar: [
        {
          label: 'Getting Started',
          translations: { 'zh-CN': '快速开始' },
          items: [
            { label: 'Introduction', translations: { 'zh-CN': '简介' }, slug: 'getting-started/introduction' },
            { label: 'Requirements', translations: { 'zh-CN': '系统要求' }, slug: 'getting-started/requirements' },
            { label: 'Installation', translations: { 'zh-CN': '安装' }, slug: 'getting-started/installation' },
            { label: 'Quick Start', translations: { 'zh-CN': '快速上手' }, slug: 'getting-started/quick-start' },
          ],
        },
        {
          label: 'Core Concepts',
          translations: { 'zh-CN': '核心概念' },
          items: [
            { label: 'Architecture', translations: { 'zh-CN': '架构' }, slug: 'concepts/architecture' },
            { label: 'Configuration', translations: { 'zh-CN': '配置' }, slug: 'concepts/configuration' },
            { label: 'Users & Permissions', translations: { 'zh-CN': '用户与权限' }, slug: 'concepts/users-and-permissions' },
          ],
        },
        {
          label: 'AI Assistant',
          translations: { 'zh-CN': 'AI 助手' },
          items: [
            { label: 'Setup', translations: { 'zh-CN': '配置' }, slug: 'ai/setup' },
            { label: 'Use Cases', translations: { 'zh-CN': '使用场景' }, slug: 'ai/use-cases' },
            { label: 'Architecture', translations: { 'zh-CN': 'AI 架构' }, slug: 'ai/architecture' },
            { label: 'MCP Server', translations: { 'zh-CN': 'MCP 服务器' }, slug: 'ai/mcp-server' },
          ],
        },
        {
          label: 'Reverse Proxy',
          translations: { 'zh-CN': '反向代理' },
          items: [
            { label: 'Overview', translations: { 'zh-CN': '概述' }, slug: 'reverse-proxy/overview' },
            { label: 'Managing Sites', translations: { 'zh-CN': '站点管理' }, slug: 'reverse-proxy/managing-sites' },
            { label: 'SSL/TLS Certificates', translations: { 'zh-CN': 'SSL/TLS 证书' }, slug: 'reverse-proxy/ssl-tls' },
            { label: 'DNS Challenge & Wildcards', translations: { 'zh-CN': 'DNS 验证与通配符' }, slug: 'reverse-proxy/dns-challenge' },
          ],
        },
        {
          label: 'Docker',
          translations: { 'zh-CN': 'Docker 容器' },
          items: [
            { label: 'Container Management', translations: { 'zh-CN': '容器管理' }, slug: 'docker/container-management' },
            { label: 'Images & Registries', translations: { 'zh-CN': '镜像与仓库' }, slug: 'docker/images' },
            { label: 'Networks & Volumes', translations: { 'zh-CN': '网络与卷' }, slug: 'docker/networks-volumes' },
          ],
        },
        {
          label: 'Deployment',
          translations: { 'zh-CN': '部署' },
          items: [
            { label: 'Git Projects', translations: { 'zh-CN': 'Git 项目' }, slug: 'deployment/git-projects' },
            { label: 'Build & Deploy', translations: { 'zh-CN': '构建与部署' }, slug: 'deployment/build-deploy' },
          ],
        },
        {
          label: 'Databases',
          translations: { 'zh-CN': '数据库' },
          items: [
            { label: 'MySQL', slug: 'databases/mysql' },
            { label: 'PostgreSQL', slug: 'databases/postgresql' },
            { label: 'Redis', slug: 'databases/redis' },
          ],
        },
        {
          label: 'Backup & Recovery',
          translations: { 'zh-CN': '备份与恢复' },
          items: [
            { label: 'Backup Configuration', translations: { 'zh-CN': '备份配置' }, slug: 'backup/configuration' },
            { label: 'Restore', translations: { 'zh-CN': '恢复' }, slug: 'backup/restore' },
            { label: 'Kopia Backend', translations: { 'zh-CN': 'Kopia 后端' }, slug: 'backup/kopia' },
          ],
        },
        {
          label: 'System',
          translations: { 'zh-CN': '系统' },
          items: [
            { label: 'Monitoring', translations: { 'zh-CN': '系统监控' }, slug: 'system/monitoring' },
            { label: 'File Manager', translations: { 'zh-CN': '文件管理' }, slug: 'system/file-manager' },
            { label: 'Web Terminal', translations: { 'zh-CN': '网页终端' }, slug: 'system/web-terminal' },
            { label: 'Firewall', translations: { 'zh-CN': '防火墙' }, slug: 'system/firewall' },
          ],
        },
        {
          label: 'App Store & Plugins',
          translations: { 'zh-CN': '应用商店与插件' },
          items: [
            { label: 'Application Store', translations: { 'zh-CN': '应用商店' }, slug: 'plugins/app-store' },
            { label: 'Plugin System', translations: { 'zh-CN': '插件系统' }, slug: 'plugins/plugin-system' },
            { label: 'Developing Plugins', translations: { 'zh-CN': '开发插件' }, slug: 'plugins/developing' },
          ],
        },
        {
          label: 'Security',
          translations: { 'zh-CN': '安全' },
          items: [
            { label: 'Authentication & 2FA', translations: { 'zh-CN': '认证与双因素' }, slug: 'security/authentication' },
            { label: 'RBAC', translations: { 'zh-CN': '角色权限控制' }, slug: 'security/rbac' },
            { label: 'Audit Logging', translations: { 'zh-CN': '审计日志' }, slug: 'security/audit-logging' },
          ],
        },
        {
          label: 'API Reference',
          translations: { 'zh-CN': 'API 参考' },
          items: [
            { label: 'REST API', slug: 'api/rest' },
            { label: 'WebSocket API', slug: 'api/websocket' },
          ],
        },
        {
          label: 'Contributing',
          translations: { 'zh-CN': '贡献指南' },
          items: [
            { label: 'Development Setup', translations: { 'zh-CN': '开发环境' }, slug: 'contributing/development-setup' },
            { label: 'Architecture Guide', translations: { 'zh-CN': '架构指南' }, slug: 'contributing/architecture-guide' },
          ],
        },
        { label: 'FAQ', translations: { 'zh-CN': '常见问题' }, slug: 'faq' },
        { label: 'Changelog', translations: { 'zh-CN': '更新日志' }, slug: 'changelog' },
      ],
    }),
  ],
});
