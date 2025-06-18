import Breadcrumbs from "../components/UI/Breadcrumbs";
import MakeList from "../components/Home/MakeList";
import Link from "next/link";
import SingleCarForm from "../components/SingleCarForm";

export default function Custom404() {
    return (
        <>
            <Breadcrumbs />

            <section className="contact-inner-sec sec-m" style={{ textAlign: 'center' }}>
                <main className="main-inner">
                <h1>Error 404: File not found.</h1>
                <p>The page you are looking for does not exist.</p>
                </main>

            </section>

            <MakeList />
        </>
    )
}
