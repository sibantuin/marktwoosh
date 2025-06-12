import { Suspense } from "react";
import Contact from "../components/ContactComponent";

export default function Page() {
    return (
        <Suspense fallback={null}>
            <Contact />
        </Suspense>
    );
}