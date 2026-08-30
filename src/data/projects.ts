export type Project = { slug: string; name: string; eyebrow: string; description: string; tags: readonly string[]; features: readonly string[]; stack: readonly string[]; status: string; github?: string; };
export const projects: readonly Project[] = [{
  slug: "ppgl-assist", name: "PPGL Assist", eyebrow: "Full-stack AI Medical Imaging Application",
  description: "一个从影像数据管理、AI 分割与 2D / 3D 可视化，到结构化报告和医学知识问答的一体化应用系统。",
  tags: ["Medical AI", "RAG", "FastAPI", "Vue"],
  features: ["CT case management and access control", "AI segmentation with 2D / 3D imaging visualization", "Structured reporting and RAG medical Q&A", "Local LLM inference, backend APIs and database services"],
  stack: ["Vue", "Spring Boot", "FastAPI", "Python", "PyTorch", "Milvus", "vLLM", "MySQL", "Redis", "Docker"], status: "Independent project",
}];
export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
