const Card = (props) => {
  return (
    <>
      <div className="p-10 ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            className="w-full"
            src= {props.imageurl}
            alt="Mountain"
          />
          <div className="px-6 py-4">
              <h1 className="text-white  text-2xl">{props.moviename}</h1>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-[#00df9a] rounded font-medium px-5 py-3">Book Tickets</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
