import Link from "next/link";
import ProjectContent from "./ProjectContent";

// Project data
const projectsData: Record<string, any> = {
  "01": { title: "Visionaire", category: "Editorial / Print", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" },
  "02": { title: "Luxe Noir", category: "Brand Identity", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" },
  "03": { title: "FinFlow App", category: "Digital / UI/UX", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" },
  "04": { title: "Aura Beauty", category: "Packaging", image: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=2000&auto=format&fit=crop" },
};

// Required for Next.js static export
export function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({ id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <h1 className="text-4xl font-display uppercase font-bold">Project Not Found</h1>
        <Link href="/" className="mt-8 text-accent uppercase tracking-widest border-b border-accent pb-1">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <ProjectContent
      id={id}
      title={project.title}
      category={project.category}
      image={project.image}
    />
  );
}
