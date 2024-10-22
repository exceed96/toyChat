export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-svh flex sm:justify-center sm:items-center">
      {children}
    </div>
  );
}
