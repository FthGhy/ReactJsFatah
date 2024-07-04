export default function ShowMenu() {
  return (
    <>
      <div className="py-20 px-32">
        <div className="">
          <h2 className="text-violet-600 font-bold">Our Menu</h2>
          <h1 className="text-3xl py-10 text-black font-bold">
            Menu That Always <br />
            Makes You Fall In Love
          </h1>
        </div>
        <div className="flex">
          <div className="rounded-full font-bold  bg-red-500 w-36 px-3 py-3 text-center items-center ">
            <div className="flex items-center ">
              <img src="images/icon-pizza.png" alt="" />
              <h1 className="px-4 pr-16">Pizza</h1>
            </div>
          </div>
          <div>
            <div className=" text-center items-center font-bold bg-white w-36 px-3 py-3 ml-10">
              <button className="flex items-center">
                <img src="images/icon-burger.png" alt="" />
                <h1 className="px-4">Burger</h1>
              </button>
            </div>
          </div>
          <div className=" text-center items-center font-bold bg-white w-36 px-3 py-3 ml-10">
            <button className="flex items-center">
              <img src="images/icon-cupcake.png" alt="" />
              <h1 className="px-4">Cupcake</h1>
            </button>
          </div>
          <div className=" text-center items-center font-bold bg-white w-36 px-3 py-3 ml-10">
            <button className="flex items-center">
              <img src="images/icon-cupcake.png" alt="" />
              <h1 className="px-4">Ramen</h1>
            </button>
          </div>
        </div>
        <div className=" flex inline-block px-10 py-20">
          <div className="px-10">
            <img src="images/pizza-1.png" alt="" />
            <h1 className="text-center font-bold">California Pizza</h1>
            <p className="text-center">$7.5</p>
          </div>
          <div className="px-10">
            <img src="images/pizza-2.png" alt="" />
            <h1 className="text-center font-bold">Pepperoni Pizza</h1>
            <p className="text-center">$7.5</p>
          </div>
          <div className="px-10">
            <img src="images/pizza-3.png" alt="" />
            <h1 className="text-center font-bold">Beef Pizza</h1>
            <p className="text-center">$7.5</p>
          </div>
          <div className="px-10">
            <img src="images/pizza-4.png" alt="" />
            <h1 className="text-center font-bold">Mushroom Pizza</h1>
            <p className="text-center">$7.5</p>
          </div>
        </div>
      </div>
    </>
  );
}
