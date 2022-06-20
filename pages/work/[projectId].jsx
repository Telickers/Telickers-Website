import { useRouter } from "next/router";

import Header from "@/components/WorkPage/Project/Header";
import { work } from "data";
import ProjectDetails from "@/components/WorkPage/Project/Details";

export default function SingleProject() {
  const router = useRouter();
  const projectId = router.query.projectId;

  const project = work.find((p) => p.id === +projectId);

  return (
    <>
      <Header
        name={project?.name || "Dummy Name"}
        description={
          project?.description ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, perspiciatis fugiat maxime quae facilis nisi ut recusandae provident ea!"
        }
        url={project?.link}
      />
      <ProjectDetails details={project?.details} />
    </>
  );
}
