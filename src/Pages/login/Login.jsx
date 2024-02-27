import Link from "next/link";
import AdminLoginForm from "src/Pages/dashboard/admin/AdminLoginForm";

export default function Home() {
  // const router = useRouter();
  // const session = useSession();
  // console.log('session', session);

  // if (session.status === 'loading') {
  //   return <h1>Loading...</h1>;
  // }

  // if (session.status === 'authenticated') {
  //   router.push('/dashboard');
  // }

  // if (session.status === 'unauthenticated') {
  return (
    <>     
        <AdminLoginForm />
      <div className="dashb">
        <Link href="/dashboard" className="p-2 bg-black text-white">
          dashboard
        </Link>
      </div>
    </>
  );
}
// }
