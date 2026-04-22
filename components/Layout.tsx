import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { SidebarFooter } from "./SidebarFooter";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-page">
      <div className="lg:grid lg:grid-cols-[28%_1fr] lg:items-start">
        <Nav />
        <main className="px-8 pb-32 pt-12 md:px-16 lg:px-20 lg:pt-24 xl:px-28">
          <div className="max-w-prose">
            {children}
            <Footer />
            {/* On mobile, profile + socials sit at the very bottom of the page */}
            <div className="mt-12 lg:hidden">
              <SidebarFooter />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
