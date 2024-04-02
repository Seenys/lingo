//component for marketing layout
import { Header } from "@/app/(marketing)/header";
import { Footer } from "@/app/(marketing)/footer";

type marketingLayoutProps = {
  children: React.ReactNode;
};

const marketingLayout = ({ children }: marketingLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default marketingLayout;
