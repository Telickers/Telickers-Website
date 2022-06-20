import { useRouter } from "next/router";

import Header from "@/components/WorkPage/Project/Header";
import { work } from "data";

export default function SingleProject() {
  const router = useRouter();
  const projectId = router.query.projectId;

  const project = work.find((p) => p.id === +projectId);

  return (
    <>
      <Header name={project?.name} description={project?.description} url={project?.link} />
    </>
  );
}
