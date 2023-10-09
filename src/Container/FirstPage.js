import React, { useState } from "react";

function FirstPage() {
  const [provider, setProvider] = useState("");
  const [operator, setOperator] = useState("");
  const [firstDiv, setFirstDiv] = useState(false);
  const [secondDiv, setSecondDiv] = useState(false);
  const [lastDiv, setLastDiv] = useState(false);
  const [amount, setAmount] = useState("");
  const [commissionPercent, setCommissionPercent] = useState("");
  const [commissionAmount, setCommissionAmount] = useState("");
  const [commissionType, setCommissionType] = useState("percentage");
  const [minimumAmount, setMinimumAmount] = useState(0);
  const [maximumAmount, setMaximumAmount] = useState(0);
  const [count, setCount] = useState(1);
  let [newArray, setNewArray] = useState({});
  let [submitArray, setSubmitArray] = useState([]);
  let arrayLength = submitArray.length;

  const handelSubmit = (e) => {
    e.preventDefault();
    setNewArray({
      ...newArray,
      provider: provider,
      operator: operator,
      data: [...submitArray],
    });
    setFirstDiv(true);
    // }
  };
  const handelSubmitSecond = (e) => {
    e.preventDefault();
    // setSubmitArray([
    //   ...submitArray,
    //   {
    //     commissionAmount: commissionAmount,
    //     commissionPercent: commissionPercent,
    //   },
    // ]);
    setNewArray({
      ...newArray,
      provider: provider,
      operator: operator,
      data: [...submitArray],
    });
    setSecondDiv(true);
  };
  const handelSubmitThird = (e) => {
    e.preventDefault();
    console.log("data", minimumAmount, maximumAmount);

    setCount(count + 1);

    setSubmitArray([
      ...submitArray,
      {
        maximumAmount: maximumAmount,
        minimumAmount: minimumAmount,
        commissionType: commissionType,
        amount: amount,
        id: count,
        commissionAmount: commissionAmount,
        commissionPercent: commissionPercent,
      },
    ]);

    setSecondDiv(true);
  };

  const handelDelete = (id) => {
    let updateArray = submitArray.filter((item) => item.id !== id);

    // setSubmitArray([...submitArray]);
    // setNewArray({
    //   ...newArray,
    //   provider: provider,
    //   operator: operator,
    //   data: [...submitArray],
    // });
    setSubmitArray(updateArray);
    console.log("id", id);
    setFirstDiv(true);
    setSecondDiv(false);
  };
  if (arrayLength !== 0 && arrayLength !== newArray.data.length) {
    setNewArray({
      ...newArray,
      provider: provider,
      operator: operator,
      data: [...submitArray],
    });
  }
  console.log("newvalue", newArray);
  return (
    <>
      <div>
        {!firstDiv ? (
          <>
            <form onSubmit={handelSubmit}>
              <div className=" flex flex-col space-y-3 m-3 ">
                <div className="flex flex-col">
                  <label>Operator Name</label>
                  <input
                    name="operator"
                    className=" border border-blue-300"
                    value={operator}
                    required
                    onChange={(e) => setOperator(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label>Provider Name</label>
                  <input
                    name="provider"
                    required
                    className=" border border-blue-300"
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                  />
                </div>
              </div>
              <div className="fglex m-4 justify-center w-20">
                <button
                  type="submit"
                  className=" bg-green-500 p-2 rounded-md"
                  // onClick={handelSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : firstDiv && !secondDiv ? (
          <form onSubmit={handelSubmitSecond}>
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
                      required
                      onChange={(e) => setCommissionType(e.target.value)}
                    >
                      <option value="percentage">Percentage</option>
                      <option value="amount">Amount</option>
                    </select>
                  </div>
                  {commissionType === "percentage" ? (
                    <div className=" flex flex-col">
                      <label>Commission Percentage</label>
                      <div className="flex">
                        <input
                          value="%"
                          disabled
                          className=" bg-slate-300 items-center w-1/6"
                        />
                        <input
                          name="commissionPercent"
                          value={commissionPercent}
                          required
                          onChange={(e) => setCommissionPercent(e.target.value)}
                          className=" border border-blue-300"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className=" flex flex-col">
                      <label>Commission Amount</label>
                      <div className="flex">
                        <input
                          value="Rs"
                          disabled
                          className=" bg-slate-300 items-center w-1/6"
                        />
                        <input
                          name="commissionAmount"
                          value={commissionAmount}
                          required
                          onChange={(e) => setCommissionAmount(e.target.value)}
                          className=" border border-blue-300"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    // onClick={handelSubmitSecond}
                    className=" bg-blue-500 p-2 rounded-md"
                  >
                    Add Steps
                  </button>
                </div>
              </div>
            </div>
          </form>
        ) : firstDiv && secondDiv && !lastDiv ? (
          <>
            <form onSubmit={handelSubmitThird}>
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
                          name="minimumAmount"
                          type="number"
                          onChange={(e) => setMinimumAmount(e.target.value)}
                          value={minimumAmount}
                          required
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
                          name="maximumAmount"
                          value={maximumAmount}
                          required
                          type="number"
                          onChange={(e) => setMaximumAmount(e.target.value)}
                          className=" border border-blue-300"
                        />
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div className=" flex gap-2">
                    <div className="w-1/2 flex flex-col">
                      <label>Commission type</label>
                      <select
                        className=" border border-blue-300 w-40"
                        //defaultValue={commissionType}
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
                          onChange={(e) => setAmount(e.target.value)}
                          value={amount}
                          required
                          className=" border border-blue-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      // onClick={handelSubmitThird}
                      className=" bg-blue-500 p-2 rounded-md"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="p-2 border shadow-sm m-5">
              {submitArray.map((item) => (
                <>
                  <div className="flex justify-between" key={item.id}>
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
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default FirstPage;
