import { BarbellIcon, UsersIcon, WrenchIcon } from "@phosphor-icons/react";
import data from "../data/data.json";

function Services() {
  const iconMap = {
    dumbbell: BarbellIcon,
    users: UsersIcon,
    wrench: WrenchIcon,
  };

  return (
    <section className="bg-white flex flex-col justify-center items-center px-10 py-9">
      <h2 className="text-2xl font-semibold font-poppins text-black mb-13">
        Services
      </h2>
      <div className="flex justify-center items-center flex-col md:flex-row gap-10 text-balance md:px-20">
        {data.services.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          if (!IconComponent) return null;
          return (
            <div key={index}>
              <IconComponent size={32} weight="thin" />
              <h3 className="font-semibold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
