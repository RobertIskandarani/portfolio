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
  const resume = {
    $schema:
      "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: {
      name: profile.name,
      label: profile.jobTitle,
      image: profile.image,
      email: profile.email || undefined,
      url: SITE_URL,
      summary: profile.description,
      location: { countryCode: "AR", region: "Argentina" },
      profiles: [
        {
          network: "LinkedIn",
          username: "robertiskandarani",
          url: profile.linkedin,
        },
        {
          network: "GitHub",
          username: "RobertIskandarani",
          url: profile.github,
        },
      ],
    },
    work: experiences.map((exp) => ({
      name: exp.company,
      position: exp.role,
      url: exp.url,
      location: exp.location,
      startDate: exp.startISO,
      endDate: exp.endISO,
      summary: exp.description,
      highlights: exp.highlights ?? [],
    })),
    projects: projects.map((p) => ({
      name: p.name,
      description: p.description,
      url: p.url,
      keywords: p.tech.map((t) => t.name),
      ...(p.repo ? { source: p.repo } : {}),
    })),
    skills: [
      { name: "Frontend", keywords: [...skills.frontend] },
      { name: "Languages", keywords: [...skills.languages] },
      { name: "Backend", keywords: [...skills.backend] },
      { name: "AI", keywords: [...skills.ai] },
      { name: "Tools", keywords: [...skills.tools] },
    ],
    languages: languages.map((l) => ({
      language: l.language,
      fluency: l.fluency,
    })),
    meta: {
      canonical: `${SITE_URL}/resume.json`,
      lastModified: new Date().toISOString(),
      theme: "elegant",
    },
  };

  return new Response(JSON.stringify(resume, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
