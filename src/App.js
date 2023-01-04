import "./App.css";

function App() {
  return (
    <div className=" md:container md:mx-auto">
      <h1 className="ml-[260px] mt-[50px] text-indigo-900 font-bold text-4xl">
        COMPANY
      </h1>
      <div className="flex justify-around">
        <div className="mt-8">
          <p className="font-bold text-xl">Invoice To</p>
          <h3 className="font-bold text-sky-500 text-2xl">John Smith</h3>
          <p className="font-bold text-lg mt-2">Lorem ipsum dolor sit amit</p>
          <p className="font-bold text-lg">Lorem ipsum dolor</p>
        </div>
        <div>
          <h1 className="font-bold text-sky-500 text-6xl">INVOICE</h1>
          <div className="flex justify-between mt-4">
            <p className="font-bold text-2xl mr-2">invoice #</p>
            <input
              className="border-2 border-sky-500 w-32"
              type="text"
              value="123"
            />
          </div>
          <div className="flex justify-between mt-2">
            <p className="font-bold text-2xl mr-2">Date:</p>
            <p className="font-bold text-2xl mr-2">1/11/2030</p>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="flex justify-around mt-2 ">
        <div className="flex justify-between">
          <p className="px-5 py-5 bg-sky-500 text-white font-bold">No</p>
          <p className="px-5 py-5 bg-indigo-900 text-white font-bold ml-2">
            item 1
          </p>
        </div>
        <div className="flex justify-between">
          <p className="px-5 py-5 bg-indigo-900 text-white font-bold ml-2">
            Unit
          </p>
          <p className="px-5 py-5 bg-indigo-900 text-white font-bold ml-2">
            Height
          </p>
          <p className="px-5 py-5 bg-indigo-900 text-white font-bold ml-2">
            Length
          </p>
          <p className="px-8 py-5 bg-sky-500 text-white font-bold ml-2">Qty</p>
        </div>
      </div>
      <div className="flex justify-center mt-2 ">
        <table className="w-2/3 shadow-lg bg-white border-collapse">
          <tr className="bg-gray-200">
            <td className="  px-8 py-4">01</td>
            <td className=" px-8 py-4">Lorem</td>
            <td className=" px-8 py-4">consectetur</td>
            <td className=" px-8 py-4">$99.00</td>
            <td className=" px-8 py-4">01</td>
            <td className=" px-8 py-4">$99.00</td>
          </tr>
          <tr className="bg-gray-300 ">
            <td className=" px-8 py-4"></td>
            <td className=" px-8 py-4"></td>
            <td className=" px-8 py-4">eiusmod</td>
            <td className=" px-8 py-4">$10.00</td>
            <td className=" px-8 py-4">01</td>
            <td className=" px-8 py-4">$10.00</td>
          </tr>
          <tr className="bg-gray-200 mt-1">
            <td className=" px-8 py-4">02</td>
            <td className=" px-8 py-4">incididunt</td>
            <td className=" px-8 py-4">consectetur</td>
            <td className=" px-8 py-4">$20.00</td>
            <td className=" px-8 py-4">02</td>
            <td className=" px-8 py-4">$40.00</td>
          </tr>
          <tr className="bg-gray-300 mt-1">
            <td className=" px-8 py-4"></td>
            <td className=" px-8 py-4"></td>
            <td className=" px-8 py-4">eiusmod</td>
            <td className=" px-8 py-4">$99.00</td>
            <td className=" px-8 py-4">01</td>
            <td className=" px-8 py-4">$99.00</td>
          </tr>
          <tr className="bg-gray-200 mt-1">
            <td className=" px-8 py-4"></td>
            <td className=" px-8 py-4">
              <p className="text-center py-5 bg-indigo-900 text-white font-bold ">
                item 2
              </p>
            </td>
            <td className=" px-8 py-4"></td>
            <td className=" px-8 py-4">$10.00</td>
            <td className=" px-8 py-4">01</td>
            <td className=" px-8 py-4">$10.00</td>
          </tr>
          <tr className="bg-gray-300 mt-1">
            <td className=" px-8 py-4">01</td>
            <td className=" px-8 py-4">Lorem</td>
            <td className=" px-8 py-4">consectetur</td>
            <td className=" px-8 py-4">$99.00</td>
            <td className=" px-8 py-4">01</td>
            <td className=" px-8 py-4">$99.00</td>
          </tr>
        </table>
      </div>
      <div className="flex justify-around mt-4 ml-3">
        <div>
          <h4 className="font-bold text-2xl mr-2">Payment info</h4>
          <div className="flex justify-between mt-3">
            <p className="font-bold text-xl ">#Account</p>
            <p className="font-bold text-xl mr-5">Lorem ipsum</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="font-bold text-xl mr-10">A/C Number</p>
            <p className="font-bold text-xl ">Dolore sit amet</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="font-bold text-xl mr-10">Bank Details</p>
            <p className="font-bold text-xl ">Dolore sit amet</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between mt-3">
            <p className="font-bold text-xl ">Subtotal</p>
            <p className="font-bold text-xl ">$123</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="font-bold text-xl ">Tax</p>
            <p className="font-bold text-xl ">$0</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="font-bold text-xl mr-10 px-2 py-4  bg-sky-500 text-white ">
              Total
            </p>
            <p className="font-bold text-xl px-10 py-5  bg-indigo-900 text-white ">
              $258.00
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-10 items-center ">
        <div>
          <h3 className="font-bold text-2xl ">Terms & Conditions</h3>
          <p className="font-bold">Sed ut perspiciatis unde omnis</p>
          <p className="font-bold">iste natus error sit volupatetem</p>
          <p className="font-bold">accusantium</p>
        </div>
        <div>
          <hr className="border bg-yellow-400 font-extrabold w-48"></hr>
          <p className="ml-1 font-bold text-2xl">Authorized Sign</p>
        </div>
      </div>
    </div>
  );
}

export default App;
