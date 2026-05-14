import type { APIRoute } from "astro";
import { profile, experiences, projects, SITE_URL } from "@/data/profile";

export const GET: APIRoute = () => {
  const body = `# ${profile.name}

> ${profile.description}

- Sitio: ${SITE_URL}
- LinkedIn: ${profile.linkedin}
- GitHub: ${profile.github}
- CV (PDF): ${profile.cvUrl}
- Resume (JSON): ${SITE_URL}/resume.json

## Experiencia laboral

${experiences
  .map((exp) => {
    const period = `${exp.start} - ${exp.end}`;
    const company = exp.url ? `[${exp.company}](${exp.url})` : exp.company;
    return `- **${exp.role}** en ${company} (${period}) — ${exp.description}`;
  })
  .join("\n")}

## Proyectos

${projects
  .map((p) => {
    return `- **${p.name}** — ${p.description} Sitio: ${p.url}${
      p.repo ? `, repositorio: ${p.repo}` : ""
    }. Stack: ${p.tech.map((t) => t.name).join(", ")}.`;
  })
  .join("\n")}

## Tecnologías

${profile.knowsAbout.map((k) => `- ${k}`).join("\n")}

## Recursos adicionales

- Resume en formato JSON Resume: ${SITE_URL}/resume.json
- Sitemap: ${SITE_URL}/sitemap-index.xml
- Versión expandida para LLMs: ${SITE_URL}/llms-full.txt
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
