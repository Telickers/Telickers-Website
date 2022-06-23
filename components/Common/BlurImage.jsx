import Image from "next/image";
import { useState } from "react";

export default function BlurImage({ imageSrc, priority = false }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg bg-gray-200 shadow-lg">
      <Image
        priority={priority}
        alt={imageSrc}
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        className={`duration-700 ease-in-out ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
