import type { APIRoute } from "astro";
import {
  profile,
  experiences,
  projects,
  skills,
  languages,
  SITE_URL,
} from "@/data/profile";

export const GET: APIRoute = () => {
  const body = `# ${profile.name}

${profile.description}

- Sitio: ${SITE_URL}
- LinkedIn: ${profile.linkedin}
- GitHub: ${profile.github}
- CV (PDF): ${profile.cvUrl}
- Resume (JSON): ${SITE_URL}/resume.json

---

## Experiencia laboral completa

${experiences
  .map((exp) => {
    const period = `${exp.start} - ${exp.end}`;
    const company = exp.url ? `${exp.company} (${exp.url})` : exp.company;
    const highlights = exp.highlights?.length
      ? `\n\nHighlights:\n${exp.highlights.map((h) => `- ${h}`).join("\n")}`
      : "";
    const location = exp.location ? `\nUbicación: ${exp.location}` : "";
    return `### ${exp.role} — ${company}
Período: ${period}${location}

${exp.description}${highlights}`;
  })
  .join("\n\n---\n\n")}

---

## Proyectos

${projects
  .map((p) => {
    return `### ${p.name}

${p.description}

- Sitio: ${p.url}${p.repo ? `\n- Repositorio: ${p.repo}` : ""}
- Stack: ${p.tech.map((t) => t.name).join(", ")}`;
  })
  .join("\n\n---\n\n")}

---

## Skills

- Frontend: ${skills.frontend.join(", ")}
- Lenguajes: ${skills.languages.join(", ")}
- Backend: ${skills.backend.join(", ")}
- AI / IA: ${skills.ai.join(", ")}
- Herramientas: ${skills.tools.join(", ")}

## Idiomas

${languages.map((l) => `- ${l.language}: ${l.fluency}`).join("\n")}
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
