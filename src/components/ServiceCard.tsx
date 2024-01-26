import Image, { StaticImageData } from "next/image";

interface Service {
  img: StaticImageData;
  title: string;
  description: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group text-card-foreground rounded-3xl border border-gray-300 shadow-sm bg-background relative overflow-hidden duration-300 sm:min-w-[300px] xl:min-w-[333px] px-6 py-5 custom-box-shadow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:text-primary absolute -right-4 -top-8 h-24 w-24 origin-top-right stroke-[0.5] md:text-gray-300 text-sky-500 duration-300 group-hover:scale-90 group-hover:text-sky-700"
      >
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:text-primary absolute -right-4 -top-8 h-32 w-32 origin-top-right stroke-[0.4] md:text-gray-300 text-sky-500 duration-500 group-hover:scale-90 group-hover:text-sky-700"
      >
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
      <div className="flex flex-col items-start gap-5 text-left">
        <div className="bg-gradient w-20 h-20 grid place-items-center p-2 rounded-full">
          <Image
            src={service.img}
            alt={service.title}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <h4 className="text-lg font-semibold tracking-wide text-balance">
          {service.title}
        </h4>
        <p className="sm:text-base font-light sm:leading-7 text-sm text-balance">
          {service.description}
        </p>
      </div>
    </div>
  );
}
