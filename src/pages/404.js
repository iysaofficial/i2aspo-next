import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
return (
    <>
        <Navigation />
        <main className="notfound-main">
            <div className="notfound-content">
                <Image
                    src="/assets/img/error-404.png"
                    alt="Page Not Found"
                    width={340}
                    height={260}
                    className="notfound-illustration"
                    priority
                />
                <h2 className="notfound-title">Oops! Page Not Found</h2>
                <p className="notfound-desc">
                    The page you are looking for was not found or has been moved.
                </p>
                <Link href="/" className="notfound-btn">
                    Back to Home
                </Link>
            </div>
        </main>
        <Footer />
    </>
);
}