import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { FiEdit } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
const options = [
  { value: "ประเมินผลแล้ว", label: "่ประเมินผลแล้ว" },
  { value: "ยังไม่ส่งประเมิน", label: "ยังไม่ส่งประเมิน" },
  { value: "ส่งประเมินแล้ว", label: "ส่งประเมินแล้ว" },
  {
    value: "เจ้าหน้าที่สอบขอหลักฐานเพิ่ม",
    label: "เจ้าหน้าที่สอบขอหลักฐานเพิ่ม",
  },
  { value: "ประเมินผลแล้ว", label: "ประเมินผลแล้ว" },
];

function ShowEvaluator() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleUpload = () => {
    setIsOpen(true);
  };
  const data = [
    {
      id: 1,
      number_signup: "CPAPP202107-00864",
      fullName: "นายสมบัติ พรหมแก้ว",
      thaiid: "3820400239938",
      examDate: "3 ก.ย. 2565 10:30 น.",
      evaluationDate: "13 ก.ย. 2565 11:00 น.",
      status: <p className="text-[#0C7CF4]">ประเมินผลแล้ว</p>,
      evaluateButton: (
        <button className="w-14 h-8 bg-red-500 text-white rounded-md">Reset</button>
      ),
    },
    {
      id: 2,
      number_signup: "CPAPP202107-00865",
      fullName: "นายชัยยุทธ ทิมเทศ",
      thaiid: "3720100669733",
      examDate: "7 ธ.ค. 2564 13.00 น.",
      evaluationDate: "22 ม.ค. 2565 09.53 น.",
      status: <p className="text-[#0C7CF4]">ประเมินผลแล้ว</p>,
      evaluateButton: (
        <button className="w-14 h-8 bg-red-500 text-white rounded-md">Reset</button>
      ),
    },
    {
      id: 3,
      number_signup: "CPAPP202107-00869",
      fullName: "นายเทวัญ สุระศิลปิกุล",
      thaiid: "1309900971103",
      examDate: "7 ธ.ค. 2564 13.00 น.",
      evaluationDate: "22 ม.ค. 2565 09.53 น.",
      status: <p className="text-[#0C7CF4]">ประเมินผลแล้ว</p>,
      evaluateButton: (
        <button className="w-14 h-8 bg-red-500 text-white rounded-md">Reset</button>
      ),
    },
    {
      id: 4,
      number_signup: "CPAPP202107-00871",
      fullName: "นายขวัญ แสงเมือง",
      thaiid: "3729900033025",
      examDate: "3 ก.ย. 2565 10:30 น.",
      evaluationDate: "13 ก.ย. 2565 11:00 น.",
      status: <p className="text-[#0C7CF4]">ประเมินผลแล้ว</p>,
      evaluateButton: (
        <button className="w-14 h-8 bg-red-500 text-white rounded-md">Reset</button>
      ),
  
    },
    {
      id: 5,
      number_signup: "CPAPP202107-00875",
      fullName: "นายธัชกริช เรืองสุวิทย์กุล",
      thaiid: "3101202270941",
      examDate: "3 ก.ย. 2565 10:30 น.",
      evaluationDate: "13 ก.ย. 2565 11:00 น.",
      status: <p className="text-[#0C7CF4]">ประเมินผลแล้ว</p>,
      evaluateButton: (
        <button className="w-14 h-8 bg-red-500 text-white rounded-md">Reset</button>
      ),
    },
    {
      id: 6,
      number_signup: "CPAPP202107-00881",
      fullName: "นายวีระ ดีวิหก",
      thaiid: "3700600262306",
      examDate: "3 ก.ย. 2565 10:30 น.",
      evaluationDate: "13 ก.ย. 2565 11:00 น.",
      status: <p className="text-[#0C7CF4]">ประเมินผลแล้ว</p>,
      evaluateButton: (
        <button className="w-14 h-8 bg-red-500 text-white rounded-md">Reset</button>
      ),
    },
    {
      id: 7,
      number_signup: "CPAPP202107-00890",
      fullName: "นางสาวธนาทิพย์ ลี้สุวัฒนกุล",
      thaiid: "3309900937149",
      examDate: "3 ก.ย. 2565 10:30 น.",
      evaluationDate: "13 ก.ย. 2565 11:00 น.",
      status: <p className="text-[#0C7CF4]">ประเมินผลแล้ว</p>,
      evaluateButton: (
        <button className="w-14 h-8 bg-red-500 text-white rounded-md">Reset</button>
      ),
    },
    {
      id: 8,
      number_signup: "CPAPP202107-00864",
      fullName: "นายชานนท์ วิเศษเลิศกุล",
      thaiid: "3820400239938",
      examDate: "3 ก.ย. 2565 10:30 น.",
      evaluationDate: "13 ก.ย. 2565 11:00 น.",
      status: <p className="text-[#0C7CF4]">ประเมินผลแล้ว</p>,
      evaluateButton: (
        <button className="w-14 h-8 bg-red-500 text-white rounded-md">Reset</button>
      ),
    },
    {
      id: 9,
      number_signup: "CPAPP202107-00902",
      fullName: "นางสาวจันทร์ทิพย์ บัญจพัฒน์",
      thaiid: "1110100126291",
      examDate: "3 ก.ย. 2565 10:30 น.",
      evaluationDate: "13 ก.ย. 2565 11:00 น.",
      status: <p className="text-[#0C7CF4]">ประเมินผลแล้ว</p>,
      evaluateButton: (
        <button className="w-14 h-8 bg-red-500 text-white rounded-md">Reset</button>
      ),
    },
    {
      id: 10,
      number_signup: "CPAPP202107-00939",
      fullName: "นายจิรายุ สุขเต็ม",
      thaiid: "1321000219441",
      examDate: "3 ก.ย. 2565 10:30 น.",
      evaluationDate: "13 ก.ย. 2565 11:00 น.",
      status: <p className="text-[#0C7CF4]">ประเมินผลแล้ว</p>,
      evaluateButton: (
        <button className="w-14 h-8 bg-red-500 text-white rounded-md">Reset</button>
      ),
    },
  ];
  const [fileDescription, setFileDescription] = useState("");
  return (
    <>
      <div className="container-fluid mx-auto px-8 mt-8">
        <div className="flex flex-row justify-between">
          <p className="text-xl font-light text-[#212264]">
            แสดงรายชื่อผู้เข้ารับการประเมิน
          </p>
          <div className="flex flex-row items-center gap-3">
            <p className="text-lg font-light text-#212264]">สรุปผลการประเมิน</p>
            <p className="text-lg text-[#212264]">-</p>
            <p className="text-lg text-red-500">
              แสดงรายชื่อผู้เข้ารับการประเมิน
            </p>
          </div>
        </div>
        <div className="w-full bg-white h-screen mt-10 rounded-xl">
          <div className="container-fluid mx-auto px-8 mt-5 p-6">
            <p className="text-2xl text-[#48436F] font-bold">
              ข้อสอบเทียบโอนประสบการณ์ (Resk)
            </p>
            <p className="text-2xl text-[#48436F] font-bold mt-5">
              สาขาวิชาชีพบริการสุขภาพ อาชีพผู้ดูแลเด็ก ระดับ 3
            </p>
            <hr className="mt-8 text-gray-200 mb-5" />
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                name="weight"
                disabled=""
                class="border px-3  rounded border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300"
                placeholder="ค้นหาจาก ชื่อ/นามสกุล/เลขบัตรประชาชน"
              />
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
              <div className="flex flex-row justify-end gap-3 ">
                <button className="bg-[#5A8DEE] text-white py-2 px-6 rounded-md">
                  <i class="ri-search-line"></i> ค้นหา
                </button>
                <button className="bg-[#00CFDD] text-white py-2 px-6 rounded-md">
                  <i class="ri-reset-left-line"></i> ล้างค่า
                </button>
                <button className="bg-[#288D2B] text-white py-2 px-6 rounded-md">
                  ส่งออกข้อมูล (.xlsx)
                </button>
              </div>
            </div>
            <div className="w-full overflow-x-auto mt-10">
              <div className="min-w-max">
                <table className="w-full border-collapse min-w-max">
                  <thead>
                    <tr className="bg-[#5A8DEE] text-gray-700 border-b border-gray-300">
                      <th className="px-4 py-2 border-l border-gray-300 first:border-none text-left text-white">
                        ลำดับ
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                        เลขที่สมัคร
                      </th>
                      <th className="w-[500px] px-4 py-2 border-l border-gray-300 text-center text-white">
                        ชื่อ-นามสกุล
                      </th>
                      <th className="w-[500px] px-4 py-2 border-l border-gray-300 text-center text-white">
                        เลขบัตรประชาชน
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                        วันที่สอบ
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                        วันที่ประเมิน
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                        สถานะ
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white" onClick={handleUpload}>
                        เข้าประเมิน
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr
                        key={item.id}
                        className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                      >
                        <td className="px-4 py-4 border-l border-gray-300 first:border-none text-center">
                          {index + 1}
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                          {item.number_signup}
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                          {item.fullName}
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                          {item.thaiid}
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                          {item.examDate}
                        </td>
                        <td className="px-4 py-4 border-l border-gray-300 text-center">
                          {item.evaluationDate}
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                          {item.status}
                        </td>
                        <td className="px-4 py-4 border-l border-gray-300 text-center">
                          <div className="flex flex-row justify-center gap-5" onClick={handleUpload}>
                             {item.evaluateButton}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p className="px-4 text-xl mt-10">
                ทั้งหมด <span className="text-[#CC383D]">10</span> รายการ
              </p>
              <div className="flex flex-row gap-5 mt-10">
                <p className="flex items-center">ก่อนหน้า</p>
                <div className="w-8 h-10 bg-[#5A8DEE] flex justify-center items-center text-white mt-3 rounded-md mb-2">
                  1
                </div>
                <p className="flex items-center">ถัดไป</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-6/12 h-fit ">
            <div className="bg-[#5A8DEE] w-full h-14 BR-save text-white p-4 text-xl text-center">
              เหตุผลการขอ Reset ผลการประเมิน
            </div>
            <div className="container mx-auto px-4 mt-5">
              <textarea
                value={fileDescription}
                onChange={(e) => setFileDescription(e.target.value)}
                placeholder="กรอกรายการขอเอกสารเพิ่มเติม"
                className="border p-2 rounded-md w-full mt-4 border-gray-300 focus:outline-none resize-y"
                rows="8"
              />
            </div>

            <div className="mt-4 flex justify-center py-2 px-4 gap-5">
              <button className="bg-[#08C054] px-4 py-2 rounded-md text-white">
                บันทึก
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowEvaluator;
