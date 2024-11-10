import { useRouter } from "next/navigation";

const SessionRoute = () => {
  const router = useRouter();
  router.push("/all-sessions");
  return <div>SessionRoute</div>;
};
export default SessionRoute;
