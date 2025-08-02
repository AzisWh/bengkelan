import { serviceData } from "../../Data/ServiceData";

const Service = () => {
  return (
    <div className="max-w-6xl px-4 py-16 mx-auto service-section" id="service">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-2 text-lg text-gray-500">
          Explore the range of professional auto services we offer
        </p>
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
