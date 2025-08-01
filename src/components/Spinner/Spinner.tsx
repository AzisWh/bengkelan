const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center border-4 border-white border-t-transparent rounded-full ">
      <div className="content">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="bars">
            {[...Array(7)].map((_, b) => (
              <div key={b} className="bar"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spinner;
