import Header from '@/components/Header';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
  <>
    <Header/>
    <main className="w-full min-h-screen">
      {children}
    </main>
  </>
  );
}

export default RootLayout