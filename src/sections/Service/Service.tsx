import { serviceData } from "../../Data/ServiceData";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { IconContext } from "react-icons";

const Service = () => {
  return (
    <div className="max-w-6xl px-4 py-16 mx-auto service-section">
      <div className="flex flex-col mb-8 lg:flex-row lg:-mx-8">
        <div className="w-full lg:w-1/2 lg:px-8">
          <h2 className="text-sm font-semibold tracking-widest uppercase">
            BengkelAlpinos
          </h2>
          <h2 className="mt-4 text-3xl font-bold leading-tight">
            Welcome to BengkelAlpinos – Your Trusted Car Workshop
          </h2>
          <p className="mt-4 text-lg font-semibold">
            Quality Auto Care and Reliable Service for Every Journey
          </p>
          <p className="mt-2 leading-relaxed">
            At BengkelAlpinos, we are committed to keeping your car in top
            condition. From routine maintenance to major repairs, our skilled
            team provides professional service with modern equipment and genuine
            parts. Drive with confidence, knowing your vehicle is in the right
            hands.
          </p>
        </div>

        <div className="w-full mt-12 lg:w-1/2 lg:px-8 lg:mt-0">
          <div className="md:flex">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full ">
              <IconContext.Provider
                value={{ className: "text-gray-600 text-3xl w-14 h-14 px-2" }}
              >
                <div className="flex space-x-4">
                  <HiOutlineWrenchScrewdriver />
                </div>
              </IconContext.Provider>
            </div>
            <div className="mt-4 md:ml-8 md:mt-0">
              <h4 className="text-xl font-bold leading-tight">
                Complete Car Care in One Place
              </h4>
              <p className="mt-2 leading-relaxed">
                At BengkelAlpinos, we provide all the services your car needs
                under one roof – from routine maintenance and engine tune‑ups to
                bodywork, painting, and spare parts replacement. Our modern
                workshop and expert mechanics ensure your car always performs at
                its best.
              </p>
            </div>
          </div>

          <div className="mt-8 md:flex">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full ">
              <IconContext.Provider
                value={{ className: "text-gray-600 text-3xl w-14 h-14 px-2" }}
              >
                <div className="flex space-x-4">
                  <HiOutlineWrenchScrewdriver />
                </div>
              </IconContext.Provider>
            </div>
            <div className="mt-4 md:ml-8 md:mt-0">
              <h4 className="text-xl font-bold leading-tight">
                Customer‑Focused Service
              </h4>
              <p className="mt-2 leading-relaxed">
                Your car’s needs, schedule, and budget are always our priority.
                Whether it’s regular service or urgent repair, our friendly team
                and transparent process will give you peace of mind. At
                BengkelAlpinos, we treat every car as if it were our own.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        {serviceData.map((item) => (
          <div className="news-card" key={item.id}>
            <a href="#" className="news-card__card-link"></a>
            <img
              src={item.image}
              alt={item.title}
              className="news-card__image"
            />

            <div className="news-card__text-wrapper">
              <h2 className="news-card__title">{item.title}</h2>
              <div className="news-card__post-date">{item.date}</div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt">{item.excerpt}</p>
                <a href="#" className="news-card__read-more">
                  Read more <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
