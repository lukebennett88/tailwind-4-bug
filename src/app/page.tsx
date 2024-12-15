export default function Home() {
  return (
    <main className="grid place-content-center min-h-svh">
      <div className="group bg-blue-600 p-12 font-semibold text-white">
        <p className="group-hover:underline">
          Group hover shouldn't be working. Comment out the{" "}
          <code>tailwindcss-react-aria-components</code> plugin from{" "}
          <code>global.css</code> and it should work again.
        </p>
      </div>
    </main>
  );
}
