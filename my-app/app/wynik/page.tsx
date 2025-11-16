import { Suspense } from "react";
import WynikContent from "./WynikContent";

function WynikLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="mt-4 text-base-content">Ładowanie wyników...</p>
      </div>
    </div>
  );
}

export default function WynikPage() {
  return (
    <Suspense fallback={<WynikLoading />}>
      <WynikContent />
    </Suspense>
  );
}
