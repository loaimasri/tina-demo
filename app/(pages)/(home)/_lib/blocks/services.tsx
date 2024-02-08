import ServiceCard from "../components/service-card";

export function Services() {
  return (
    <section
      id="services"
      className="flex justify-center flex-col items-center text-center min-h-screen bg-gray-600 py-20"
    >
      <h2 className="text-4xl font-bold leading-[54px]">Our Services</h2>
      <p className="my-12 text-2xl leading-10 font-light">
        Our dedicated engineers serve clients worldwide with our comprehensive
        software solutions.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-5">
        <ServiceCard
          title="Software R&D"
          description="By translating your ideas into a concrete plan for creating an end product, we help you keep up with market trends and gain a competitive edge in your field."
          icon={{
            color: "#70ce88",
            name: "/software-rd.svg",
          }}
        />
        <ServiceCard
          title="Web Development"
          description="We have the skills and experience to build a website that will show off your business to its best advantage. Our comprehensive service covers engineering, graphic design, servers, network security, content development and more. Front end, back end and full stack – we’ve got it all covered."
          icon={{
            color: "#717cff",
            name: "/web-development.svg",
          }}
        />
        <ServiceCard
          title="Customer Support"
          description="We deliver a range of customer services to assist customers in making cost effective and correct use of a product. It includes assistance in planning, installation, training, troubleshooting, maintenance, upgrading, and disposal of a product."
          icon={{
            color: "#ffbc4f",
            name: "/customer-support.svg",
          }}
        />

        <ServiceCard
          title="Mobile Development"
          description="Our goal is to deliver a high-quality product that works exactly as you intended. Developing mobile apps for B2B and B2C, iOS and Android, hybrid and cross-platform – we’ve got everything covered."
          icon={{
            color: "#ed93ff",
            name: "/mobile-development.svg",
          }}
        />

        <ServiceCard
          title="Quality Assurance"
          description="As part of the development process, we carry out stringent quality assurance (QA), both automated and manual, to verify that the end product meets your requirements and expectations. Any outstanding issues that are identified are then resolved, so that you can launch your new product with absolute confidence."
          icon={{
            color: "#fa706c",
            name: "/quality-assurance.svg",
          }}
        />

        <ServiceCard
          title="Microsoft Cloud Services"
          description="We use the Microsoft cloud services to build, deploy and manage services and applications through the network worldwide and are managed by the Data-centers of Microsoft."
          icon={{
            color: "#4a90e2",
            name: "/microsoft-cloud-services.svg",
          }}
        />
      </div>
    </section>
  );
}
