import React, { useState } from "react";

function FirstPage() {
  const [provider, setProvider] = useState("");
  const [operator, setOperator] = useState("");
  const [firstDiv, setFirstDiv] = useState(false);
  const [secondDiv, setSecondDiv] = useState(false);
  const [lastDiv, setLastDiv] = useState(false);
  const [amount, setAmount] = useState("");
  const [commissionType, setCommissionType] = useState("");
  const [minimumAmount, setMinimumAmount] = useState("");
  const [maximumAmount, setMaximumAmount] = useState("");
  const [count, setCount] = useState(1);
  let [newArray, setNewArray] = useState({});

  const handelSubmit = (e) => {
    e.preventDefault();  
    setNewArray({
      ...newArray,
      provider: provider,
      operator: operator,
      data: [],
    });
    console.log("values", operator, provider);
    setFirstDiv(true);
  };
  const handelSubmitSecond = (e) => {
    e.preventDefault();
    setCount(count + 1);    
    setNewArray({
      ...newArray,
      provider: provider,
      operator: operator,
      data: [
        {          
          commissionType: commissionType,
          amount: amount,
          id: count,
        },
      ],
    });
    console.log("values", maximumAmount, minimumAmount);
    setSecondDiv(true);
  };
  const handelSubmitThird  = (e) => {
    e.preventDefault();      
    setNewArray({
      ...newArray,
      provider: provider,
      operator: operator,
      data: [
        {
          maximumAmount: maximumAmount,
          minimumAmount: minimumAmount,
          commissionType: commissionType,
          amount: amount,
          id: count,
        },
      ],
    });
    console.log("values", maximumAmount, minimumAmount);
    setSecondDiv(true);
  };
  console.log("newvalue", newArray);
  const handelDelete = (id) => {
    const updatedData = newArray.data.filter((item) => item.id !== id);
    setNewArray({
      ...newArray,
      provider: provider,
      operator: operator,
      data: updatedData,
    });
    console.log("id", id);
    setFirstDiv(true);
    setSecondDiv(false);
  };

  return (
    <>
      <div>
        {!firstDiv ? (
          <>
            <div className=" flex flex-col space-y-3 m-3 ">
              <div className="flex flex-col">
                <label>Operator Name</label>
                <input
                  name="operator"
                  className=" border border-blue-300"
                  value={operator}
                  onChange={(e) => setOperator(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label>Provider Name</label>
                <input
                  name="provider"
                  className=" border border-blue-300"
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                />
              </div>
            </div>
            <div className="fglex m-4 justify-center w-20">
              <button
                // type="submit"
                className=" bg-green-500 p-2 rounded-md"
                onClick={handelSubmit}
              >
                Submit
              </button>
            </div>
          </>
        ) : firstDiv && !secondDiv ? (
          <div className="border shadow-sm m-5 p-2">
            <div className=" flex justify-start mx-2 ">
              <p className=" text-lg font-bold">Commission Update </p>
            </div>

            <div className=" flex flex-col mt-4 space-y-3">
              <div className="flex gap-2 w-full">
                <div className="w-1/2">
                  <div className=" flex gap-2">
                    <label>Operator :</label>
                    <p className="text-blue-400">{operator || ""}</p>
                  </div>
                  <div className=" flex gap-2">
                    <label>Provider :</label>
                    <p className="text-blue-400">{provider || ""}</p>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className=" flex flex-col">
                    <label>Commission Template</label>
                    <p className=" text-lg text-blue-400">Constant</p>
                  </div>
                </div>
              </div>

              <div className=" flex gap-2">
                <input type="radio" />
                <label>Charge</label>
              </div>
              <div className=" flex gap-2">
                <div className="w-1/2 flex flex-col">
                  <label>Commission type</label>
                  <select
                    className=" border border-blue-300 w-40"
                    value={commissionType}
                    onChange={(e) => setCommissionType(e.target.value)}
                  >
                    <option value="percentage">Percentage</option>
                    <option value="amount">Amount</option>
                  </select>
                </div>
                <div className=" flex flex-col">
                  <label>Amount</label>
                  <div className="flex">
                    <input
                      value="Rs"
                      disabled
                      className=" bg-slate-300 items-center w-1/6"
                    />
                    <input
                      name="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className=" border border-blue-300"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  //type="submit"
                  onClick={handelSubmitSecond}
                  className=" bg-blue-500 p-2 rounded-md"
                >
                  Add Steps
                </button>
              </div>
            </div>
          </div>
        ) : firstDiv && secondDiv && !lastDiv ? (
          <>
            <div className="border shadow-sm m-5 p-2">
              <div className=" flex justify-start mx-2 ">
                <p className=" text-lg font-bold">Commission Update </p>
              </div>

              <div className=" flex flex-col mt-4 space-y-3">
                <div className="flex gap-2 w-full">
                  <div className="w-1/2">
                    <div className=" flex gap-2">
                      <label>Operator :</label>
                      <p className="text-blue-400">{operator || ""}</p>
                    </div>
                    <div className=" flex gap-2">
                      <label>Provider :</label>
                      <p className="text-blue-400">{provider || ""}</p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className=" flex flex-col">
                      <label>Commission Template</label>
                      <p className=" text-lg text-blue-400">Constant</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className=" text-blue-300">
                    Reacharge range between 10 to 300
                  </p>
                </div>
                <div className=" flex gap-2">
                  <input type="radio" />
                  <label>Charge</label>
                </div>
                <div className=" flex gap-2">
                  <div className="w-1/2 flex flex-col">
                    <label>Minimum Tr Amount</label>
                    <div className="flex">
                      <input
                        value="Rs"
                        disabled
                        className=" bg-slate-300 items-center w-1/6"
                      />
                      <input
                        name="amount"
                        onChange={(e) => setMinimumAmount(e.target.value)}
                        value={minimumAmount}
                        className=" border border-blue-300"
                      />
                    </div>
                  </div>
                  <div className=" flex flex-col">
                    <label>Maximum Tr Amount</label>
                    <div className="flex">
                      <input
                        value="Rs"
                        disabled
                        className=" bg-slate-300 items-center w-1/6"
                      />
                      <input
                        name="amount"
                        value={maximumAmount}
                        onChange={(e) => setMaximumAmount(e.target.value)}
                        className=" border border-blue-300"
                      />
                    </div>
                  </div>
                </div>

                <div className=" flex gap-2">
                  <div className="w-1/2 flex flex-col">
                    <label>Commission type</label>
                    <select
                      className=" border border-blue-300 w-40"
                      value={commissionType}
                    >
                      <option value="percentage">Percentage</option>
                    </select>
                  </div>
                  <div className=" flex flex-col">
                    <label>Amount</label>
                    <div className="flex">
                      <input
                        value="Rs"
                        disabled
                        className=" bg-slate-300 items-center w-1/6"
                      />
                      <input
                        name="amount"
                        value={amount}
                        className=" border border-blue-300"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    //type="submit"
                    onClick={handelSubmitThird}
                    className=" bg-blue-500 p-2 rounded-md"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            {newArray && newArray.data.map((item) => (
              <>
                <div className="flex justify-between">
                  <div className=" flex gap-2">
                    <input type="radio" />
                    <label>Charge</label>
                  </div>
                  <div>
                    <button
                      className="bg-red-500 p-2 rounded-md"
                      onClick={(e) => handelDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className=" flex gap-2">
                  <div className="w-1/2 flex flex-col">
                    <label>Minimum Tr Amount</label>
                    <div className="flex">
                      <input
                        value="Rs"
                        disabled
                        className=" bg-slate-300 items-center w-1/6"
                      />
                      <input
                        name="amount"
                        value={item.minimumAmount}
                        className=" border border-blue-300"
                      />
                    </div>
                  </div>
                  <div className=" flex flex-col">
                    <label>Maximum Tr Amount</label>
                    <div className="flex">
                      <input
                        value="Rs"
                        disabled
                        className=" bg-slate-300 items-center w-1/6"
                      />
                      <input
                        name="amount"
                        value={item.maximumAmount}
                        className=" border border-blue-300"
                      />
                    </div>
                  </div>
                </div>

                <div className=" flex gap-2">
                  <div className="w-1/2 flex flex-col">
                    <label>Commission type</label>
                    <select
                      className=" border border-blue-300 w-40"
                      // value={commissionType}
                    >
                      <option value={item.commissionType}>
                        {item.commissionType}
                      </option>
                    </select>
                  </div>
                  <div className=" flex flex-col">
                    <label>Amount</label>
                    <div className="flex">
                      <input
                        value="Rs"
                        disabled
                        className=" bg-slate-300 items-center w-1/6"
                      />
                      <input
                        name="amount"
                        value={item.amount}
                        className=" border border-blue-300"
                      />
                    </div>
                  </div>
                </div>
              </>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default FirstPage;
