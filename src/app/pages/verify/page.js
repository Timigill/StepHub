import { Suspense } from "react";
import VerifyPage from "./VerifyPage";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading verification...</p>}>
      <VerifyPage />
    </Suspense>
  );
}
