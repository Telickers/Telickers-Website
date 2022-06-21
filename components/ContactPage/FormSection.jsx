import Image from "next/image";

import Form from "../Common/Form";

export default function ContactForm() {
  return (
    <section
      aria-labelledby="contact-form"
      className="grid grid-cols-1 gap-x-10 gap-y-5 bg-brand py-20 px-10 lg:grid-cols-2 lg:px-32"
    >
      <div>
        <h2 className="mb-2 text-center text-xl font-bold">
          Great Relationships begin with a smart conversation
        </h2>
        <Form />
      </div>
      <div className="aspect-w-3 aspect-h-3">
        <Image
          alt="Man working on computer"
          src="/man-working-on-computer.svg"
          layout="fill"
        />
      </div>
    </section>
  );
}
