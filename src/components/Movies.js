import React from "react";

function Movies() {
  return (
    <>
      <div>
        <div className="text-2xl font-bold">Trending Movies</div>
      </div>
      <div className="flex">
        <div
          className="w-[160px] h-[30vh] bg-center bg-cover m-4 md:h[40vh] md:w-[180px] rounded-xl hover:scale-110 duration-300"
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/iqc9C7DtDOE/maxresdefault.jpg)`,
          }}
        ></div>
        <div
          className="w-[160px] h-[30vh] bg-center bg-cover m-4 md:h[40vh] md:w-[180px] rounded-xl hover:scale-110 duration-300"
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/iqc9C7DtDOE/maxresdefault.jpg)`,
          }}
        ></div>
        <div
          className="w-[160px] h-[30vh] bg-center bg-cover m-4 md:h[40vh] md:w-[180px] rounded-xl hover:scale-110 duration-300"
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/iqc9C7DtDOE/maxresdefault.jpg)`,
          }}
        ></div>
        <div
          className="w-[160px] h-[30vh] bg-center bg-cover m-4 md:h[40vh] md:w-[180px] rounded-xl hover:scale-110 duration-300"
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/iqc9C7DtDOE/maxresdefault.jpg)`,
          }}
        ></div>
      </div>
    </>
  );
}

export default Movies;
