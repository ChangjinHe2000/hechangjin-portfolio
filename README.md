# Changjin He — Personal Portfolio

面向 AI Application Developer 岗位的个人技术主页。首版聚焦项目、工程能力、实践经历与研究背景，使用深色且克制的视觉系统。

## 技术栈

- Next.js（App Router）
- TypeScript
- Tailwind CSS 4

## 本地运行

要求：Node.js 20.9 或更高版本。

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)。生产构建验证：

```bash
npm run build
```

## 内容编辑

所有展示文案与数据都和 UI 组件分开维护：

- `src/data/profile.ts`：姓名、定位、Hero 与 About 文案、个人链接
- `src/data/projects.ts`：项目摘要、详情能力与技术栈
- `src/data/skills.ts`：技术栈分组
- `src/data/experience.ts`：经历
- `src/data/research.ts`：论文、竞赛和专利信息
- `src/data/notes.ts`：Notes 草稿与后续文章元数据

GitHub 和 Email 目前是明显的占位状态；在 `src/data/profile.ts` 填入真实地址后，所有对应链接会自动生效。请勿在仓库中提交 API Key、密码或其他密钥。

## 页面

- `/`：个人主页
- `/projects/ppgl-assist`：PPGL Assist 项目详情框架
- `/notes`：笔记归档框架

后续可将 Markdown / MDX 文章放入内容目录，并为 `/notes/[slug]` 接入解析逻辑。

## 部署

将仓库推送至 GitHub 后，在 Vercel 导入项目即可部署。Vercel 会自动识别 Next.js，构建命令使用 `npm run build`。
