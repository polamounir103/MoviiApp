export default function NoPage() {
  return (
    <div className="text-center flex flex-col gap-6">
      <h1 className="text-4xl text-red-700 font-bold">404 Page Not Found</h1>
      <p className="text-2xl">The page you are looking for doesnot exist.</p>
      <a
        href="/"
        className=" bg-amber-600 w-max self-center p-3 rounded-lg text-white text-xl"
      >
        Go back
      </a>
    </div>
  );
}
