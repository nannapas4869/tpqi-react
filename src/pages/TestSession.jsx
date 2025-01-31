import React, { useState } from "react";
import Select from "react-select";
const options = [
  { value: "แม่บ้าน", label: "แม่บ้าน" },
  { value: "เกษตรกร", label: "เกษตรกร" },
  { value: "คนขับรถ", label: "คนขับรถ" },
];
const level = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];
const evaluate = [
    { value: "สัมภาษณ์", label: "สัมภาษณ์" },
    { value: "เทียบโอนประสบการณ์", label: "เทียบโอนประสบการณ์2" },
    { value: "แฟ้มสะสมผลงาน", label: "แฟ้มสะสมผลงาน" },
];
const statuses = [
    { value: "ผ่าน", label: "ผ่าน" },
    { value: "ไม่ผ่าน", label: "ไม่ผ่าน" },
];
export default function TestSession() {
  const [selectedOption, setSelectedOption] = useState(null);
  const data = [
    { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", age: 25, email: "alice@example.com" },
    { id: 4, name: "Bob Brown", age: 40, email: "bob@example.com" },
    { id: 5, name: "Charlie White", age: 30, email: "charlie@example.com" },
  ];
  return (
    <>
      <div className="container-fluid mx-auto px-8 mt-8">
        <div className="flex flex-row justify-between">
          <p className="text-xl font-light text-[#212264]">รอบสอบ</p>
          <p className="text-lg font-light text-[#FF3B30]">รอบสอบ</p>
        </div>
        <div className="w-full bg-white h-screen mt-10 rounded-xl">
          <div className="container-fluid mx-auto px-8 mt-5 p-6">
            <div className="grid grid-cols-5 gap-4">
              <div>
                <label htmlFor="qualification" style={{ display: "block", marginBottom: "14px" }}>
                    คุณวุฒิวิชาชีพ
                </label>
                <Select
                  id="qualification"
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="--กรุณาเลือก--"
                />
              </div>
              <div>
                <label htmlFor="level" style={{ display: "block", marginBottom: "14px" }}>
                    ระดับ
                    </label>
                    <Select
                    id="level"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={level}
                    placeholder="--กรุณาเลือก--"
                    />
              </div>
              <div>
                <label htmlFor="evaluate" style={{ display: "block", marginBottom: "14px" }}>
                    เครื่องมือประเมิน
                    </label>
                    <Select
                    id="evaluate"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={evaluate}
                    placeholder="--กรุณาเลือก--"
                    />
              </div>
              <div>
                <label htmlFor="status" style={{ display: "block", marginBottom: "14px" }}>
                    สถานะ
                    </label>
                    <Select
                    id="status"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={statuses}
                    placeholder="--กรุณาเลือก--"
                    />
              </div>
              <div>
                <div className="flex flex-row justify-end gap-3 mt-8">
                    <button className="bg-[#5A8DEE] text-white py-2 px-6 rounded-md"><i class="ri-search-line"></i> ค้นหา</button>
                    <button className="bg-[#00CFDD] text-white py-2 px-6 rounded-md"><i class="ri-reset-left-line"></i> ล้างค่า</button>
                </div>
              </div>
            </div>
            <hr className="mt-5 text-gray-200" />
            <div className="flex flex-row justify-end mt-5 gap-3">

                <label htmlFor="text-input" className="mt-2 text-[#324382]">Search:</label>
                <input
                id="text-input"
                type="search"
                placeholder="ค้นหา"
                className="py-2 px-6 rounded-sm border border-solid border-[#ccc] focus:outline-none"
                />
            </div>
            <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        {/* Table Header */}
        <thead>
          <tr className="bg-[#5A8DEE] text-white">
            <th className="px-6 py-3 text-left">ID</th>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Age</th>
            <th className="px-6 py-3 text-left">Email</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="px-6 py-3 border border-gray-300">{item.id}</td>
              <td className="px-6 py-3 border border-gray-300">{item.name}</td>
              <td className="px-6 py-3 border border-gray-300">{item.age}</td>
              <td className="px-6 py-3 border border-gray-300">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>
        </div>
      </div>
    </>
  );
}
