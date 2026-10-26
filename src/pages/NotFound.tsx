import { ButtonLink } from "@/components/ui/links";

export default function NotFound() {
  return (
    <div className="relative z-10 px-6 pb-20 pt-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-body">
          This page does not exist. The case studies are a good place to start.
        </p>
        <div className="mt-8">
          <ButtonLink to="/systems-in-practice">Read the Case Studies</ButtonLink>
        </div>
      </div>
    </div>
  );
}
