import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

type PortalLayoutProps = {
  children: ReactNode;
};

export default function PortalLayout({ children }: PortalLayoutProps) {
  return (
    <>
      <Header title="student portal" />
      <div className="layout">
        <Sidebar />
        <section className="content">{children}</section>
      </div>
      <Footer />
    </>
  );
}
