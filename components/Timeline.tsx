import { timelineItems } from "@/data/data";

export default function Timeline() {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="container">
        {/* title  */}
        <div className="">
          <h2 className="text-3xl text-center sm:text-4xl lg:text-6xl">
            From Concept to Launch
          </h2>
          <p className="text-[#9F1239] text-center mt-4 text-sm">
            Every project follows a proven workflow focused on quality,
            collaboration, and measurable results.
          </p>
        </div>
        {/* wrapper */}
        <ul className="relative mx-auto max-w-4xl mt-20 lg:mt-24">
          {timelineItems.map((item) => (
            <li key={item.id} className="grid lg:grid-cols-2 group ">
              {/* content  */}
              <div className="group-odd:order-1 lg:group-even:text-right p-5">
                <div className="inline-flex items-center">
                  <span className="">{item.category}</span>
                </div>
                <h3 className="font-zendots text-orange-500 text-xl md:text-3xl lg:text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="font-tasa">{item.description}</p>
              </div>
              {/* empty div  */}
              <div className=" hidden lg:block h-36 w-full" />
            </li>
          ))}
          {/* center divider */}
          <div className="h-full w-0.5 bg-black absolute top-0 left-0 lg:left-1/2 -translate-x-1/2">
            <span>
              {[1, 2, 3, 4, 5].map((item) => (
                <span
                  key={item}
                  className="
                    size-3 bg-[#9F1239] rounded-full absolute left-1/2 -translate-x-1/2

                    nth-[1]:top-8
                    nth-[2]:top-45
                    nth-[3]:top-80
                    nth-[4]:top-114
                    nth-[5]:top-150

                    sm:nth-[1]:top-10
                    sm:nth-[2]:top-40
                    sm:nth-[3]:top-62
                    sm:nth-[4]:top-88
                    sm:nth-[5]:top-114

                    md:nth-[1]:top-12
                    md:nth-[2]:top-42
                    md:nth-[3]:top-72
                    md:nth-[4]:top-102
                    md:nth-[5]:top-132

                    lg:nth-[1]:top-14
                    lg:nth-[2]:top-50
                    lg:nth-[3]:top-85
                    lg:nth-[4]:top-122
                    lg:nth-[5]:top-157
                    "
                />
              ))}
            </span>
          </div>
        </ul>
      </div>
    </section>
  );
}
