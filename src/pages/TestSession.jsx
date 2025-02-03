import React, { useState } from "react";
import Select from "react-select";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
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
    {
      id: 1,
      round: "65/08/0142",
      organization: "สมาคมตัวแทนออกของรับอนุญาตไทย",
      qualification: "สาขาวิชาชีพโลจิสติกส์สาขาจัดการส่งออก และนำเข้า",
      profession:
        "ผู้ปฏิบัติงานส่งออก - นำเข้า (ผู้ปฏิบัติงานธุรการส่งออก - นำเข้า)",
      level: "ระดับ 2",
      assessmentTool: "เทียบโอนประสบการณ์",
      examLocation: "มหาวิทยาลัยราชภัฏเลย",
      examDate: "3 ก.ย. 2565 10:30 น.",
      evaluationDate: "13 ก.ย. 2565 11:00 น.",
      edit: <Link to="/SaveResultEvaluate"><FiEdit  /></Link>,
    },
    {
      id: 2,
      round: "65/07/0021",
      organization: "บริษัท รักษาความปลอดภัย เอเซีย คลีนนิ่ง เซอร์วิส จำกัด",
      qualification: "สาขาวิชาชีพธุรกิจบริการ",
      profession: "แม่บ้าน",
      level: "ระดับ 1",
      assessmentTool: "เทียบโอนประสบการณ์",
      examLocation:
        "ศูนย์ปฏิบัติการ บริษัท รักษาความปลอดภัย เอเชียคลีนนิ่งเซอร์วิส จำกัด",
      examDate: "10 ก.ค. 2565 13:30 น.",
      evaluationDate: "21 ก.ค. 2565 13:15 น.",
      edit: <FiEdit  />,
    },
    {
      id: 3,
      round: "65/07/0021",
      organization: "บริษัท รักษาความปลอดภัย เอเซีย คลีนนิ่ง เซอร์วิส จำกัด",
      qualification: "สาขาวิชาชีพธุรกิจบริการ",
      profession: "แม่บ้าน",
      level: "ระดับ 1",
      assessmentTool: "เทียบโอนประสบการณ์",
      examLocation: "ศูนย์ปฏิบัติการ บริษัท รักษาความปลอดภัย เอเชียคลีนนิ่งเซอร์วิส จำกัด",
      examDate: "10 ก.ค. 2565 09.00 น.",
      evaluationDate: "21 ก.ค. 2565 10.30 น.",
      edit: <FiEdit  />,
    },
    {
      id: 4,
      round: "65/01/0033",
      organization: "มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่",
      qualification: "สาขาวิชาชีพเกษตรกรรม สาขาเพาะปลูกพืชเศรษฐกิจ",
      profession: "ผู้ปฏิบัติงานด้านเก็บเกี่ยวผลผลิตยางพารา",
      level: "ระดับ 3",
      assessmentTool: "เทียบโอนประสบการณ์",
      examLocation: "คณะทรัพยากรธรรมชาติ มหาวิทยาลัยสงขลานครรินทร์",
      examDate: "23 ม.ค. 2565 14.00 น.",
      evaluationDate: "21 ก.ค. 2565 10.30 น.",
      edit: <FiEdit  />,
    },
    {
      id: 5,
      round: "65/01/0033",
      organization: "มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่",
      qualification: "สาขาวิชาชีพเกษตรกรรม สาขาเพาะปลูกพืชเศรษฐกิจ",
      profession: "ผู้ปฏิบัติงานด้านเก็บเกี่ยวผลผลิตยางพารา",
      level: "ระดับ 3",
      assessmentTool: "เทียบโอนประสบการณ์",
      examLocation: "คณะทรัพยากรธรรมชาติ มหาวิทยาลัยสงขลานครรินทร์",
      examDate: "23 ม.ค. 2565 14.00 น.",
      evaluationDate: "4 ก.พ. 2565 14.28 น.",
      edit: <FiEdit  />,
    },
    {
      id: 6,
      round: "65/01/0032",
      organization: "มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่",
      qualification: "สาขาวิชาชีพเกษตรกรรม สาขาเพาะปลูกพืชเศรษฐกิจ",
      profession: "ผู้ปฏิบัติงานด้านเก็บเกี่ยวผลผลิตยางพารา",
      level: "ระดับ 3",
      assessmentTool: "เทียบโอนประสบการณ์",
      examLocation: "คณะทรัพยากรธรรมชาติ มหาวิทยาลัยสงขลานครรินทร์",
      examDate: "22 ม.ค. 2565 14.00 น.",
      evaluationDate: "2 ก.พ. 2565 14.28 น",
      edit: <FiEdit  />,
    },
    {
      id: 7,
      round: "65/01/0032",
      organization: "มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่",
      qualification: "สาขาวิชาชีพเกษตรกรรม สาขาเพาะปลูกพืชเศรษฐกิจ",
      profession: "ผู้ปฏิบัติงานด้านเก็บเกี่ยวผลผลิตยางพารา",
      level: "ระดับ 3",
      assessmentTool: "เทียบโอนประสบการณ์",
      examLocation: "คณะทรัพยากรธรรมชาติ มหาวิทยาลัยสงขลานครรินทร์",
      examDate: "22 ม.ค. 2565 14.00 น.",
      evaluationDate: "2 ก.พ. 2565 14.28 น",
      edit: <FiEdit  />,
    },
    {
      id: 8,
      round: "65/01/0032",
      organization: "สมาคมโรงเรียนเสริมสวยและตัดเย็บเสื้อผ้า",
      qualification: "สาขาวิชาชีพเกษตรกรรม สาขาเพาะปลูกพืชเศรษฐกิจ",
      profession: "ช่างทำผมบุรุษ",
      level: "ระดับ 4",
      assessmentTool: "เทียบโอนประสบการณ์",
      examLocation: "สวนนงนุช",
      examDate: "7 ธ.ค. 2565 13.00 น.",
      evaluationDate: "22 ม.ค. 2565 09.53 น.",
      edit: <FiEdit />,
    },
    {
      id: 9,
      round: "65/01/0032",
      organization: "สมาคมโรงเรียนเสริมสวยและตัดเย็บเสื้อผ้า",
      qualification: "สาขาวิชาชีพเกษตรกรรม สาขาเพาะปลูกพืชเศรษฐกิจ",
      profession: "ช่างทำผมบุรุษ",
      level: "ระดับ 4",
      assessmentTool: "เทียบโอนประสบการณ์",
      examLocation: "สวนนงนุช",
      examDate: "7 ธ.ค. 2565 13.00 น.",
      evaluationDate: "22 ม.ค. 2565 09.53 น.",
      edit: <FiEdit  />,
    },
    {
      id: 10,
      round: "65/01/0032",
      organization: "สมาคมโรงเรียนเสริมสวยและตัดเย็บเสื้อผ้า",
      qualification: "สาขาวิชาชีพเกษตรกรรม สาขาเพาะปลูกพืชเศรษฐกิจ",
      profession: "ช่างทำผมบุรุษ",
      level: "ระดับ 4",
      assessmentTool: "เทียบโอนประสบการณ์",
      examLocation: "สวนนงนุช",
      examDate: "7 ธ.ค. 2565 13.00 น.",
      evaluationDate: "22 ม.ค. 2565 09.53 น.",
      edit: <FiEdit  />,
    },
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
                <label
                  htmlFor="qualification"
                  style={{ display: "block", marginBottom: "14px" }}
                >
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
                <label
                  htmlFor="level"
                  style={{ display: "block", marginBottom: "14px" }}
                >
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
                <label
                  htmlFor="evaluate"
                  style={{ display: "block", marginBottom: "14px" }}
                >
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
                <label
                  htmlFor="status"
                  style={{ display: "block", marginBottom: "14px" }}
                >
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
                  <button className="bg-[#5A8DEE] text-white py-2 px-6 rounded-md">
                    <i class="ri-search-line"></i> ค้นหา
                  </button>
                  <button className="bg-[#00CFDD] text-white py-2 px-6 rounded-md">
                    <i class="ri-reset-left-line"></i> ล้างค่า
                  </button>
                </div>
              </div>
            </div>
            <hr className="mt-5 text-gray-200" />
            <div className="flex flex-row justify-end mt-5 gap-3">
              <label htmlFor="text-input" className="mt-2 text-[#324382]">
                Search:
              </label>
              <input
                id="text-input"
                type="search"
                placeholder="ค้นหา"
                className="py-2 px-6 rounded-sm border border-solid border-[#ccc] focus:outline-none"
              />
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
                        รอบสอบ
                      </th>
                      <th className="w-[500px] px-4 py-2 border-l border-gray-300 text-center text-white">
                        องค์กรรับรอง
                      </th>
                      <th className="w-[500px] px-4 py-2 border-l border-gray-300 text-center text-white">
                        คุณวุฒิวิชาชีพ/สาขา
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                        อาชีพ
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                        ระดับ
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                        เครื่องมือประเมิน
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                        สถานที่จัดสอบ
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                        วันที่จัดสอบ
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                        วันที่ประเมิน
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                        เข้าประเมินผล
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
                          {item.round}
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                          {item.organization}
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                          {item.qualification}
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                          {item.profession}
                        </td>
                        <td className="px-4 py-4 border-l border-gray-300 text-center">
                          {item.level}
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                          {item.assessmentTool}
                        </td>
                        <td className="px-4 py-4 border-l border-gray-300 text-center">
                          {item.examLocation}
                        </td>
                        <td className="px-4 py-4 border-l border-gray-300 text-center">
                          {item.examDate}
                        </td>
                        <td className="px-4 py-4 border-l border-gray-300 text-center">
                          {item.evaluationDate}
                        </td>
                        <td className="px-4 py-4 border-l border-gray-300 text-center flex justify-center items-center">
                          {item.edit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p className="px-4 text-xl mt-10">ทั้งหมด <span className="text-[#CC383D]">10</span> รายการ</p>
              <div className="flex flex-row gap-5 mt-10">
                <p className="flex items-center">ก่อนหน้า</p>
                <div className="w-8 h-10 bg-[#5A8DEE] flex justify-center items-center text-white mt-3 rounded-md mb-2">1</div>
                <p className="flex items-center">ถัดไป</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
