import React from "react";

const EXP_DATA = [
  {
    company: "Credflow",
    id: 1,
    duration: "Sept2022 - Dec2022",
    content: (
      <ul className="list-disc pl-4">
        <li>
          Revamped a dashboard featuring stock items, sales, and purchase graphs
          to provide insights into items over different time-periods (weekly,
          monthly, and yearly)
        </li>
        <li>
          Implemented a loan screen for a smooth transaction between businesses
          which helped lots of business owners to take loans and repay their due
          payments to other businesses.
        </li>
        <li>
          Implemented a payment reminder screen which included sending emails,
          ivr calls and text messages to remind the customer of payment.
        </li>
      </ul>
    ),
    tech: "ReactJS, Git, Javascript, Styled-Components, TypeScript, redux."
  },
  {
    company: "Competent groove",
    id: 2,
    duration: "Apr2022 -Aug2022",
    content: (
      <ul className="list-disc pl-4">
        <li>
          Collaborated with cross-functional teams, including Design and
          Backend, to develop and implement a com prehensive workforce
          management system for field employees.  This involved integrating multiple APIs and designing user-friendly UI screens to enhance employee management in the field.
        </li>
        <li>
          Fixed Multiple bugs which resulted in 98 percent crash-free users for
          urva
        </li>
        <li>
          Implemented a screen to keep track records of the attendance of
          employees and records of the salary received by the employees.
        </li>
      </ul>
    ),
    tech: "ReactJS, Node.js, Git, Javascript, CSS-Modules, redux."
  },
  {
    company: "Woovly",
    id: 3,
    duration: "Jan2022 - Mar2022",
    content: (
      <ul className="list-disc pl-4">
        <li>
        Optimized the layout of the homepage on the website, resulting in improved efficiency. and also implemented the footer containing different sections of the website.
        </li>
        <li>
        focused on addressing and fixing issues within the product details component and cart functionality of the web application, while also enhancing overall efficiency
        </li>
        <li>
        Implemented Features: Product Details Page, add to cart, some features on Homepage and its resposiveness responsiveness, from cart to buy the product.
        </li>
      </ul>
    ),
    tech: "ReactJS, Git, Javascript, Tailwind CSS, TypeScript, redux, Ant-Design."

  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="text-center text-white text-4xl font-bold mt-16">
        My Experience
      </h1>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-8">
        {EXP_DATA.map((item) => (
          <div key={item.id} className="bg-[#121212] h-auto rounded-t-xl">
            <div className="flex flex-row gap-2 justify-around m-4">
              <h1 className="text-white text-sm md:text-xl font-semibold">
                {item.company}
              </h1>
              <p className="text-[#ADB7BE] text-sm md:text-lg font-bold">
                {item.duration}
              </p>
            </div>
            <div className="m-4 text-[#ADB7BE]">{item.content}</div>
            <p className="m-4 text-white text-lg">{item.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
