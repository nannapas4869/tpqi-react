import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { Save, RotateCw, CircleCheck } from "lucide-react";
import File from "../assets/images/file.png";
function SaveResultIndividualReskChecker() {
  const [showInput1, setShowInput1] = useState(false);
  const [showInput2, setShowInput2] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    row1: "",
    row2: "",
    row3: "",
  });

  const handleRadioChange = (row, value) => {
    setSelectedOption((prevState) => ({
      ...prevState,
      [row]: value,
    }));

    if (value !== "evidence") {
      setAdditionalEvidence((prevState) => ({
        ...prevState,
        [row]: [],
      }));
    }
  };
  const addEvidenceInput = (row) => {
    setAdditionalEvidence((prevState) => ({
      ...prevState,
      [row]: [...prevState[row], ""], // เพิ่ม input เปล่าเข้าไปใน array
    }));
  };
  const [additionalEvidence, setAdditionalEvidence] = useState({
    row1: [],
    row2: [],
    row3: [],
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const handleUpload = () => {
    setIsOpen(true);
  };
  const handleUpload2 = () => {
    setIsOpen2(true);
  };
  const handleUpload3 = () => {
    setIsOpen3(true);
  };
  return (
    <>
      <div className="container-fluid mx-auto px-8 mt-8">
        <div className="flex flex-row justify-between">
          <p className="text-xl font-light text-[#212264]">
            บันทึกผลการประเมินการเทียบโอนประสบการณ์ทำงาน (RESK)
          </p>
          <div className="flex flex-row items-center gap-3">
            <p className="text-lg font-light text-#212264]">หน้าแรก</p>
            <p className="text-lg text-[#212264]">-</p>
            <p className="text-lg font-light text-#212264]">ประเมินผล</p>
            <p className="text-lg text-[#212264]">-</p>
            <p className="text-lg font-light text-#212264]">
              รายชื่อผู้เข้ารับการประเมิน
            </p>
            <p className="text-lg text-[#212264]">-</p>
            <p className="text-lg text-red-500">
              แสดงรายชื่อผู้เข้ารับการประเมิน
            </p>
          </div>
        </div>

        <p className="text-2xl font-semibold text-[#32436F] mb-7">
          สาขาวิชาชีพบริการสุขภาพ อาชีพผู้ดูแลเด็ก ระดับ 3
        </p>
        <hr className="text-gray-200 mb-6" />
        <p className="text-base font-semibold text-[#32436F]">
          ข้อมูลผู้เข้ารับการประเมิน
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-3">
          <div className="w-full border border-solid border-[#9D9D9D] flex justify-center py-4 px-14 BR text-[#212264]">
            รหัสผู้สมัคร : CPAP202107-00890
          </div>
          <div className="w-full border border-solid border-[#9D9D9D] flex justify-center py-4 px-14 text-[#212264]">
            ชื่อ-นามสกุล : นางสาวธนาทิพย์ ลิี้สุวัฒนกุล
          </div>
          <div className="w-full border border-solid border-[#9D9D9D] flex justify-center py-4 px-14 BR-2 text-[#212264]">
            <div className="flex flex-row justify-center">
              <p>จำนวนประสบการณ์ (ณ วันที่สมัคร) : 2</p>&nbsp;
              <p>&nbsp; ปี</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mx-auto px-8 mt-5 p-6">
        <p className="text-base font-semibold text-[#32436F] mt-6 mb-8">
          ชื่อสาขาวิชาชีพที่ได้รับใบรับรอง 1
        </p>
        <a href="#">เอกสารหลักฐานรับรองรายการที่1</a>
        <p className="text-base font-semibold text-[#32436F] mt-6 mb-8">
          ชื่อสาขาวิชาชีพที่ได้รับใบรับรอง 2
        </p>
        <a href="#">เอกสารหลักฐานรับรองรายการที่1</a>
        <hr className="text-gray-200 mb-6 mt-10" />
        <p className="text-base font-semibold text-[#32436F] mt-6 mb-8">
          รายการประเมินผล
        </p>
        <div className="w-full h-fit border border-solid border-gray-400 mt-5 mb-16">
          <div className="bg-[#05255B] h-16 flex items-center px-6">
            <p className="text-white text-xl">
              หน่วยสมรรถนะ (Unit of Competence) : 10105 เฝ้าระวัง
              และรายงานผลการดูแลกิจวัตรประจำวันของเด็ก
            </p>
          </div>
          <div className="p-6 flex flex-col gap-6">
            <p className="text-base text-[#32436F] font-semibold">
              หลักฐานการเทียบโอนประสบการณ์ทำงาน :{" "}
              <span className="font-light">ใบประกาศนียบัตร</span>
            </p>
            <a href="#">ใบประกาศนียบัตร 1.jpg คำอธิบายไฟล์..........</a>
            <a href="#">ใบประกาศนียบัตร 2.jpg คำอธิบายไฟล์..........</a>
            <a href="#">ใบประกาศนียบัตร 3.jpg คำอธิบายไฟล์..........</a>
            <a href="#">ใบประกาศนียบัตร 4.jpg คำอธิบายไฟล์..........</a>
          </div>
          <div className="p-6 flex flex-col gap-6">
            <p className="text-base text-[#32436F] font-semibold">
              หลักฐานการเทียบโอนประสบการณ์ทำงาน :{" "}
              <span className="font-light">หลักฐานอื่น ๆ</span>
            </p>
            <a href="#">วีดีโอการปฏิบัติงาน.mp4</a>
            <a href="#">ภาพถ่ายผลงานหรือชิ้นงาน.pdf</a>
          </div>
          <div className="container-fluid px-6">
            <table
              className="border border-solid border-black w-full mb-5"
              border="1"
            >
              <thead className="text-center bg-[#F1F1F1]">
                <tr>
                  <th className="w-[260px] p-6 border-r">
                    สมรรถนะหลัก <br /> (Competence)
                  </th>
                  <th className="w-[220px] border-r">
                    สมรรถนะย่อย <br /> (Element of Competence)
                  </th>
                  <th className="w-[220px] border-r">
                    เกณฑ์การปฏิบัติงาน <br /> (Performance Criteria)
                  </th>
                  <th className="w-[220px] border-r"></th>
                  <th className="w-[220px]">ผลการเทียบโอนประสบการณ์</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr>
                  <td className="p-6 border-r border-b" rowSpan={3}>
                    <p className="mt-7">
                      10105 เฝ้าระวัง ป้องกัน แก้ไข สุขลักษณะการนอน
                    </p>
                    <p className="text-[#5A8DEE] flex items-center mt-10">
                      ใบประกาศนียบัตร 1.jpg{" "}
                      <i className="ri-close-line text-red-500"></i>
                    </p>
                  </td>
                  <td className="p-6 border-r border-b" rowSpan={3}>
                    <p>10105.01 เฝ้าระวัง ป้องกัน แก้ไข สุขลักษณะการนอน</p>
                    <p className="text-[#5A8DEE] flex items-center mt-10">
                      ใบประกาศนียบัตร 1.jpg{" "}
                      <i className="ri-close-line text-red-500"></i>
                    </p>
                  </td>
                  <td className="p-6 border-r border-b">
                    1. เฝ้าระวัง ป้องกันสุขลักษณะการกินของเด็ก
                  </td>
                  <td className="p-6 border-r border-b" rowSpan={3}>
                    <div className="flex justify-center">
                      <button
                        className="bg-[#5A8DEE] text-white py-3 px-6 rounded-md"
                        onClick={handleUpload}
                      >
                        กรุณาเลือกหลักฐาน
                      </button>
                    </div>
                    {isOpen && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                        <div className="bg-white rounded-lg shadow-lg w-6/12 h-fit ">
                          <div className="bg-[#5A8DEE] w-full h-14 BR-save text-white p-4 text-xl text-center">
                            เลือกหลักฐานที่ใช้ในการประเมิน
                          </div>
                          <div className="container mx-auto px-4 mt-5">
                            <table className="w-full border border-gray-300 border-collapse mt-8">
                              <thead>
                                <tr className="bg-[#F1F1F1] text-gray-700 border-b border-gray-300">
                                  <th className="px-4 py-2 border border-gray-300">
                                    รายการหลักฐาน
                                  </th>
                                  <th className="px-4 py-2 text-center">
                                    เลือกเกณฑ์ปฏิบัติงาน
                                  </th>{" "}
                                  {/* ไม่มี border */}
                                </tr>
                              </thead>
                              <tbody>
                                {/* แถวที่ 1: หัวข้อหมวดหลักฐาน */}
                                <tr>
                                  <td className="px-4 py-2 border-r border-gray-300">
                                    <p className="text-[#32436F] font-semibold">
                                      หลักฐานการเทียบโอนประสบการณ์ทำงาน :
                                      ใบประกาศนียบัตร
                                    </p>
                                  </td>
                                  <td className="px-4 py-2 text-center  border-gray-300 border-l"></td>{" "}
                                  {/* ไม่มี border */}
                                </tr>

                                {/* กลุ่ม checkbox - ลบเส้นกรอบด้านบนและล่าง */}
                                <tr className="border-x border-gray-300">
                                  <td className="px-4 py-2">
                                    <div className="flex flex-row gap-5">
                                      <input type="checkbox" checked />{" "}
                                      <a href="#">ใบประกาศนียบัตร 1.jpg</a>
                                      <img src={File} alt="File" />
                                    </div>
                                  </td>
                                  <td className="px-4 py-2 text-center border-gray-300 border-l">
                                    <div className="flex flex-row">
                                      <input type="checkbox" checked />
                                      <p>
                                        &nbsp;10105.01 เฝ้าระวัง ป้องกัน แก้ไข
                                        สุขลักษณะการกิน
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="border-x border-gray-300">
                                  <td className="px-4 py-2">
                                    <div className="flex flex-row gap-5">
                                      <input type="checkbox" checked />{" "}
                                      <a href="#">ใบประกาศนียบัตร 2.jpg</a>
                                      <img src={File} alt="File" />
                                    </div>
                                  </td>
                                  <td className="px-4 py-2  border-gray-300 border-l">
                                    <div className="flex flex-row gap-2 relative left-4">
                                      <input type="checkbox" checked />
                                      <p className="text-sm">
                                        1.เฝ้าระวัง
                                        ป้องกันสุขลักษณะการกินของเด็ก
                                        การกินที่ไม่ถูกสุขลักษณะ
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="border-r border-gray-300">
                                  <td className="px-4 py-2">
                                    <div className="flex flex-row gap-5">
                                      <input type="checkbox" />{" "}
                                      <a href="#">ใบประกาศนียบัตร 3.jpg</a>
                                      <img src={File} alt="File" />
                                    </div>
                                  </td>
                                  <td className="px-4 py-2 text-center border-gray-300 border-l">
                                    <div className="flex flex-row gap-2 relative left-4">
                                      <input type="checkbox" checked />
                                      <p className="text-sm">
                                        2.แก้ไขปัญหาที่เกิดจากการกินที่ไม่สุขลักษณะการกิน
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="border-r border-gray-300">
                                  <td className="px-4 py-2">
                                    <div className="flex flex-row gap-5">
                                      <input type="checkbox" checked />{" "}
                                      <a href="#">ใบประกาศนียบัตร 4.jpg</a>
                                      <img src={File} alt="File" />
                                    </div>
                                  </td>
                                  <td className="px-4 py-2 text-center  border-gray-300 border-l">
                                    <div className="flex flex-row gap-2 relative left-4">
                                      <input type="checkbox" checked />
                                      <p className="text-sm">
                                        3.บันทึกและรายงานผลสุขลักษณะการกินของเด็ก
                                      </p>
                                    </div>
                                  </td>
                                </tr>

                                {/* หมวดหลักฐานอื่น ๆ */}
                                <tr className="border-r border-gray-300">
                                  <td className="px-4 py-2 border-r border-gray-300">
                                    <p className="text-[#32436F] font-semibold mb-5">
                                      หลักฐานการเทียบโอนประสบการณ์ทำงาน :
                                      หลักฐานอื่น ๆ
                                    </p>
                                    <div className="flex flex-row gap-5 mb-5">
                                      <input type="checkbox" />
                                      <a href="#">วีดีโอการปฏิบัติงาน.mp4</a>
                                      <img src={File} alt="File" />
                                    </div>
                                    <div className="flex flex-row gap-5">
                                      <input type="checkbox" checked />
                                      <a href="#">วีดีโอการปฏิบัติงาน.mp4</a>
                                      <img src={File} alt="File" />
                                    </div>
                                  </td>
                                  <td className="px-4 py-2 text-center  border-gray-300 border-l"></td>{" "}
                                  {/* ไม่มี border */}
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="mt-4 flex justify-center py-2 px-4 gap-5">
                            <button>บันทึก</button>
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
                  </td>
                  <td className="p-6 border-b" rowSpan={3}>
                    <div className="mt-4">
                      <input
                        type="radio"
                        name="result1"
                        id="pass1"
                        value="pass"
                        onChange={() => handleRadioChange("row1", "pass")}
                        checked={selectedOption.row1 === "pass"}
                      />
                      <label htmlFor="pass1">&nbsp;&nbsp;ผ่าน</label>
                    </div>
                    <div className="mt-4">
                      <input
                        type="radio"
                        name="result1"
                        id="notpass1"
                        value="notpass"
                        onChange={() => handleRadioChange("row1", "notpass")}
                        checked={selectedOption.row1 === "notpass"}
                      />
                      <label htmlFor="notpass1">&nbsp;&nbsp;ไม่ผ่าน</label>
                    </div>
                    <div className="mt-4">
                      <input
                        type="radio"
                        name="result1"
                        id="evidence1"
                        value="evidence"
                        onChange={() => handleRadioChange("row1", "evidence")}
                        checked={selectedOption.row1 === "evidence"}
                      />
                      <label htmlFor="evidence1">
                        &nbsp;&nbsp;ขอหลักฐานเพิ่มเติม
                      </label>
                    </div>
                    {selectedOption.row1 === "evidence" && (
                      <div className="mt-4">
                        {additionalEvidence.row1.map((_, index) => (
                          <input
                            key={index}
                            type="text"
                            placeholder={`หลักฐานเพิ่มเติม ${index + 1}`}
                            className="border border-gray-400 p-2 w-full rounded-md mb-2"
                          />
                        ))}
                        <p
                          className="text-red-500 cursor-pointer flex items-center"
                          onClick={() => addEvidenceInput("row1")}
                        >
                          <i className="ri-add-line text-lg"></i>{" "}
                          เพิ่มการขอหลักฐาน
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-6 border-r border-b">
                    2. เฝ้าระวัง ป้องกันสุขลักษณะการกินของเด็ก
                  </td>
                </tr>
                <tr>
                  <td className="p-6 border-r border-b">
                    3. เฝ้าระวัง ป้องกันสุขลักษณะการกินของเด็ก
                  </td>
                </tr>

                {/* Row 2 */}
                <tr>
                  <td className="p-6 border-r border-b" rowSpan={3}>
                    <p className="mt-7"></p>
                  </td>
                  <td className="p-6 border-r border-b" rowSpan={3}>
                    <p>10105.02 เฝ้าระวัง ป้องกัน แก้ไข สุขลักษณะการนอน</p>
                    <p className="text-[#5A8DEE] flex items-center mt-10">
                      ใบประกาศนียบัตร 2.jpg{" "}
                      <i className="ri-close-line text-red-500"></i>
                    </p>
                  </td>
                  <td className="p-6 border-r border-b">
                    1. เฝ้าระวัง ป้องกันสุขลักษณะการกินของเด็ก
                    <p className="text-[#5A8DEE] flex items-center mt-10">
                      ใบประกาศนียบัตร 3.jpg{" "}
                      <i className="ri-close-line text-red-500"></i>
                    </p>
                  </td>

                  <td className="p-6 border-r border-b" rowSpan={3}>
                    <div className="flex justify-center">
                      <button
                        className="bg-[#5A8DEE] text-white py-3 px-6 rounded-md"
                        onClick={handleUpload2}
                      >
                        กรุณาเลือกหลักฐาน
                      </button>
                      {isOpen2 && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                          <div className="bg-white rounded-lg shadow-lg w-6/12 h-fit ">
                            <div className="bg-[#5A8DEE] w-full h-14 BR-save text-white p-4 text-xl text-center">
                              เลือกหลักฐานที่ใช้ในการประเมิน
                            </div>
                            <div className="container mx-auto px-4 mt-5">
                              <table className="w-full border border-gray-300 border-collapse mt-8">
                                <thead>
                                  <tr className="bg-[#F1F1F1] text-gray-700 border-b border-gray-300">
                                    <th className="px-4 py-2 border border-gray-300">
                                      รายการหลักฐาน
                                    </th>
                                    <th className="px-4 py-2 text-center">
                                      เลือกเกณฑ์ปฏิบัติงาน
                                    </th>{" "}
                                    {/* ไม่มี border */}
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* แถวที่ 1: หัวข้อหมวดหลักฐาน */}
                                  <tr>
                                    <td className="px-4 py-2 border-r border-gray-300">
                                      <p className="text-[#32436F] font-semibold">
                                        หลักฐานการเทียบโอนประสบการณ์ทำงาน :
                                        ใบประกาศนียบัตร
                                      </p>
                                    </td>
                                    <td className="px-4 py-2 text-center  border-gray-300 border-l"></td>{" "}
                                    {/* ไม่มี border */}
                                  </tr>

                                  {/* กลุ่ม checkbox - ลบเส้นกรอบด้านบนและล่าง */}
                                  <tr className="border-x border-gray-300">
                                    <td className="px-4 py-2">
                                      <div className="flex flex-row gap-5">
                                        <input type="checkbox" checked />{" "}
                                        <a href="#">ใบประกาศนียบัตร 1.jpg</a>
                                        <img src={File} alt="File" />
                                      </div>
                                    </td>
                                    <td className="px-4 py-2 text-center border-gray-300 border-l">
                                      <div className="flex flex-row">
                                        <input type="checkbox" checked />
                                        <p>
                                          &nbsp;10105.01 เฝ้าระวัง ป้องกัน แก้ไข
                                          สุขลักษณะการกิน
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="border-x border-gray-300">
                                    <td className="px-4 py-2">
                                      <div className="flex flex-row gap-5">
                                        <input type="checkbox" checked />{" "}
                                        <a href="#">ใบประกาศนียบัตร 2.jpg</a>
                                        <img src={File} alt="File" />
                                      </div>
                                    </td>
                                    <td className="px-4 py-2  border-gray-300 border-l">
                                      <div className="flex flex-row gap-2 relative left-4">
                                        <input type="checkbox" checked />
                                        <p className="text-sm">
                                          1.เฝ้าระวัง
                                          ป้องกันสุขลักษณะการกินของเด็ก
                                          การกินที่ไม่ถูกสุขลักษณะ
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="border-r border-gray-300">
                                    <td className="px-4 py-2">
                                      <div className="flex flex-row gap-5">
                                        <input type="checkbox" />{" "}
                                        <a href="#">ใบประกาศนียบัตร 3.jpg</a>
                                        <img src={File} alt="File" />
                                      </div>
                                    </td>
                                    <td className="px-4 py-2 text-center border-gray-300 border-l">
                                      <div className="flex flex-row gap-2 relative left-4">
                                        <input type="checkbox" checked />
                                        <p className="text-sm">
                                          2.แก้ไขปัญหาที่เกิดจากการกินที่ไม่สุขลักษณะการกิน
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="border-r border-gray-300">
                                    <td className="px-4 py-2">
                                      <div className="flex flex-row gap-5">
                                        <input type="checkbox" checked />{" "}
                                        <a href="#">ใบประกาศนียบัตร 4.jpg</a>
                                        <img src={File} alt="File" />
                                      </div>
                                    </td>
                                    <td className="px-4 py-2 text-center  border-gray-300 border-l">
                                      <div className="flex flex-row gap-2 relative left-4">
                                        <input type="checkbox" checked />
                                        <p className="text-sm">
                                          3.บันทึกและรายงานผลสุขลักษณะการกินของเด็ก
                                        </p>
                                      </div>
                                    </td>
                                  </tr>

                                  {/* หมวดหลักฐานอื่น ๆ */}
                                  <tr className="border-r border-gray-300">
                                    <td className="px-4 py-2 border-r border-gray-300">
                                      <p className="text-[#32436F] font-semibold mb-5">
                                        หลักฐานการเทียบโอนประสบการณ์ทำงาน :
                                        หลักฐานอื่น ๆ
                                      </p>
                                      <div className="flex flex-row gap-5 mb-5">
                                        <input type="checkbox" />
                                        <a href="#">วีดีโอการปฏิบัติงาน.mp4</a>
                                        <img src={File} alt="File" />
                                      </div>
                                      <div className="flex flex-row gap-5">
                                        <input type="checkbox" checked />
                                        <a href="#">วีดีโอการปฏิบัติงาน.mp4</a>
                                        <img src={File} alt="File" />
                                      </div>
                                    </td>
                                    <td className="px-4 py-2 text-center  border-gray-300 border-l"></td>{" "}
                                    {/* ไม่มี border */}
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div className="mt-4 flex justify-center py-2 px-4 gap-5">
                              <button>บันทึก</button>
                              <button
                                onClick={() => setIsOpen2(false)}
                                className="px-4 py-2 bg-red-500 text-white rounded-md"
                              >
                                ยกเลิก
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-6 border-b" rowSpan={3}>
                    <div className="mt-4">
                      <input
                        type="radio"
                        name="result2"
                        id="pass2"
                        value="pass"
                        onChange={() => handleRadioChange("row2", "pass")}
                        checked={selectedOption.row2 === "pass"}
                      />
                      <label htmlFor="pass2">&nbsp;&nbsp;ผ่าน</label>
                    </div>
                    <div className="mt-4">
                      <input
                        type="radio"
                        name="result2"
                        id="notpass2"
                        value="notpass"
                        onChange={() => handleRadioChange("row2", "notpass")}
                        checked={selectedOption.row2 === "notpass"}
                      />
                      <label htmlFor="notpass2">&nbsp;&nbsp;ไม่ผ่าน</label>
                    </div>
                    <div className="mt-4">
                      <input
                        type="radio"
                        name="result2"
                        id="evidence2"
                        value="evidence"
                        onChange={() => handleRadioChange("row2", "evidence")}
                        checked={selectedOption.row2 === "evidence"}
                      />
                      <label htmlFor="evidence2">
                        &nbsp;&nbsp;ขอหลักฐานเพิ่มเติม
                      </label>
                    </div>
                    {selectedOption.row2 === "evidence" && (
                      <div className="mt-4">
                        {additionalEvidence.row2.map((_, index) => (
                          <input
                            key={index}
                            type="text"
                            placeholder={`หลักฐานเพิ่มเติม ${index + 1}`}
                            className="border border-gray-400 p-2 w-full rounded-md mb-2"
                          />
                        ))}
                        <p
                          className="text-red-500 cursor-pointer flex items-center"
                          onClick={() => addEvidenceInput("row2")}
                        >
                          <i className="ri-add-line text-lg"></i>{" "}
                          เพิ่มการขอหลักฐาน
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-6 border-r border-b">
                    2. เฝ้าระวัง ป้องกันสุขลักษณะการกินของเด็ก
                  </td>
                </tr>
                <tr>
                  <td className="p-6 border-r border-b">
                    3. เฝ้าระวัง ป้องกันสุขลักษณะการกินของเด็ก
                  </td>
                </tr>
                <tr>
                  <td className="p-6 border-r border-b" rowSpan={3}>
                    <p className="mt-7"></p>
                  </td>
                  <td className="p-6 border-r border-b" rowSpan={3}>
                    <p>10105.02 เฝ้าระวัง ป้องกัน แก้ไข สุขลักษณะการนอน</p>
                    <p className="text-[#5A8DEE] flex items-center mt-10">
                      ใบประกาศนียบัตร 2.jpg{" "}
                      <i className="ri-close-line text-red-500"></i>
                    </p>
                  </td>
                  <td className="p-6 border-r border-b">
                    1. เฝ้าระวัง ป้องกันสุขลักษณะการกินของเด็ก
                    <p className="text-[#5A8DEE] flex items-center mt-10">
                      ใบประกาศนียบัตร 3.jpg{" "}
                      <i className="ri-close-line text-red-500"></i>
                    </p>
                  </td>

                  <td className="p-6 border-r border-b" rowSpan={3}>
                    <div className="flex justify-center">
                      <button
                        className="bg-[#5A8DEE] text-white py-3 px-6 rounded-md"
                        onClick={handleUpload3}
                      >
                        กรุณาเลือกหลักฐาน
                      </button>
                      {isOpen3 && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                          <div className="bg-white rounded-lg shadow-lg w-6/12 h-fit ">
                            <div className="bg-[#5A8DEE] w-full h-14 BR-save text-white p-4 text-xl text-center">
                              เลือกหลักฐานที่ใช้ในการประเมิน
                            </div>
                            <div className="container mx-auto px-4 mt-5">
                              <table className="w-full border border-gray-300 border-collapse mt-8">
                                <thead>
                                  <tr className="bg-[#F1F1F1] text-gray-700 border-b border-gray-300">
                                    <th className="px-4 py-2 border border-gray-300">
                                      รายการหลักฐาน
                                    </th>
                                    <th className="px-4 py-2 text-center">
                                      เลือกเกณฑ์ปฏิบัติงาน
                                    </th>{" "}
                                    {/* ไม่มี border */}
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* แถวที่ 1: หัวข้อหมวดหลักฐาน */}
                                  <tr>
                                    <td className="px-4 py-2 border-r border-gray-300">
                                      <p className="text-[#32436F] font-semibold">
                                        หลักฐานการเทียบโอนประสบการณ์ทำงาน :
                                        ใบประกาศนียบัตร
                                      </p>
                                    </td>
                                    <td className="px-4 py-2 text-center  border-gray-300 border-l"></td>{" "}
                                    {/* ไม่มี border */}
                                  </tr>

                                  {/* กลุ่ม checkbox - ลบเส้นกรอบด้านบนและล่าง */}
                                  <tr className="border-x border-gray-300">
                                    <td className="px-4 py-2">
                                      <div className="flex flex-row gap-5">
                                        <input type="checkbox" checked />{" "}
                                        <a href="#">ใบประกาศนียบัตร 1.jpg</a>
                                        <img src={File} alt="File" />
                                      </div>
                                    </td>
                                    <td className="px-4 py-2 text-center border-gray-300 border-l">
                                      <div className="flex flex-row">
                                        <input type="checkbox" checked />
                                        <p>
                                          &nbsp;10105.01 เฝ้าระวัง ป้องกัน แก้ไข
                                          สุขลักษณะการกิน
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="border-x border-gray-300">
                                    <td className="px-4 py-2">
                                      <div className="flex flex-row gap-5">
                                        <input type="checkbox" checked />{" "}
                                        <a href="#">ใบประกาศนียบัตร 2.jpg</a>
                                        <img src={File} alt="File" />
                                      </div>
                                    </td>
                                    <td className="px-4 py-2  border-gray-300 border-l">
                                      <div className="flex flex-row gap-2 relative left-4">
                                        <input type="checkbox" checked />
                                        <p className="text-sm">
                                          1.เฝ้าระวัง
                                          ป้องกันสุขลักษณะการกินของเด็ก
                                          การกินที่ไม่ถูกสุขลักษณะ
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="border-r border-gray-300">
                                    <td className="px-4 py-2">
                                      <div className="flex flex-row gap-5">
                                        <input type="checkbox" />{" "}
                                        <a href="#">ใบประกาศนียบัตร 3.jpg</a>
                                        <img src={File} alt="File" />
                                      </div>
                                    </td>
                                    <td className="px-4 py-2 text-center border-gray-300 border-l">
                                      <div className="flex flex-row gap-2 relative left-4">
                                        <input type="checkbox" checked />
                                        <p className="text-sm">
                                          2.แก้ไขปัญหาที่เกิดจากการกินที่ไม่สุขลักษณะการกิน
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="border-r border-gray-300">
                                    <td className="px-4 py-2">
                                      <div className="flex flex-row gap-5">
                                        <input type="checkbox" checked />{" "}
                                        <a href="#">ใบประกาศนียบัตร 4.jpg</a>
                                        <img src={File} alt="File" />
                                      </div>
                                    </td>
                                    <td className="px-4 py-2 text-center  border-gray-300 border-l">
                                      <div className="flex flex-row gap-2 relative left-4">
                                        <input type="checkbox" checked />
                                        <p className="text-sm">
                                          3.บันทึกและรายงานผลสุขลักษณะการกินของเด็ก
                                        </p>
                                      </div>
                                    </td>
                                  </tr>

                                  {/* หมวดหลักฐานอื่น ๆ */}
                                  <tr className="border-r border-gray-300">
                                    <td className="px-4 py-2 border-r border-gray-300">
                                      <p className="text-[#32436F] font-semibold mb-5">
                                        หลักฐานการเทียบโอนประสบการณ์ทำงาน :
                                        หลักฐานอื่น ๆ
                                      </p>
                                      <div className="flex flex-row gap-5 mb-5">
                                        <input type="checkbox" />
                                        <a href="#">วีดีโอการปฏิบัติงาน.mp4</a>
                                        <img src={File} alt="File" />
                                      </div>
                                      <div className="flex flex-row gap-5">
                                        <input type="checkbox" checked />
                                        <a href="#">วีดีโอการปฏิบัติงาน.mp4</a>
                                        <img src={File} alt="File" />
                                      </div>
                                    </td>
                                    <td className="px-4 py-2 text-center  border-gray-300 border-l"></td>{" "}
                                    {/* ไม่มี border */}
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div className="mt-4 flex justify-center py-2 px-4 gap-5">
                              <button>บันทึก</button>
                              <button
                                onClick={() => setIsOpen3(false)}
                                className="px-4 py-2 bg-red-500 text-white rounded-md"
                              >
                                ยกเลิก
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-6 border-b" rowSpan={3}>
                    <div className="mt-4">
                      <input
                        type="radio"
                        name="Result"
                        id="pass3"
                        value="pass"
                        onChange={() => handleRadioChange("row3", "pass")}
                        checked={selectedOption.row3 === "pass"}
                      />
                      <label htmlFor="pass3">&nbsp;&nbsp;ผ่าน</label>
                    </div>
                    <div className="mt-4">
                      <input
                        type="radio"
                        name="Result"
                        id="notpass3"
                        value="notpass"
                        onChange={() => handleRadioChange("row3", "notpass")}
                        checked={selectedOption.row3 === "notpass"}
                      />
                      <label htmlFor="notpass3">&nbsp;&nbsp;ไม่ผ่าน</label>
                    </div>
                    <div className="mt-4">
                      <input
                        type="radio"
                        name="Result"
                        id="evidence3"
                        value="evidence"
                        onChange={() => handleRadioChange("row3", "evidence")}
                        checked={selectedOption.row3 === "evidence"}
                      />
                      <label htmlFor="evidence3">
                        &nbsp;&nbsp;ขอหลักฐานเพิ่มเติม
                      </label>
                    </div>
                    {selectedOption.row3 === "evidence" && (
                      <div className="mt-4">
                        {additionalEvidence.row3.map((_, index) => (
                          <input
                            key={index}
                            type="text"
                            placeholder={`หลักฐานเพิ่มเติม ${index + 1}`}
                            className="border border-gray-400 p-2 w-full rounded-md mb-2"
                          />
                        ))}
                        <p
                          className="text-red-500 cursor-pointer flex items-center"
                          onClick={() => addEvidenceInput("row3")}
                        >
                          <i className="ri-add-line text-lg"></i>{" "}
                          เพิ่มการขอหลักฐาน
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-10 mb-10">
              <label htmlFor="recommend">ข้อเสนอะแนะ / หมายเหตุ</label>
              <textarea
                name="recommend"
                id="recommend"
                row="14"
                className="border border-gray-400 p-2 w-full rounded-md resize-y h-64 relative top-5"
              />
            </div>
          </div>
        </div>
        <p className="text-lg text-[#32436F] font-semibold mb-10">
          สรุปผลการประเมิน
        </p>
        <div className="flex flex-row gap-5 mb-10">
          <input
            type="radio"
            name="evaluate"
            id="evaluate"
            className="flex items-center"
          />
          <label htmlFor="evaluate" className="flex items-center">
            ผ่าน
          </label>
          <input
            type="radio"
            name="evaluate"
            id="evaluate"
            className="flex items-center"
          />
          <label htmlFor="evaluate" className="flex items-center">
            ไม่ผ่าน
          </label>
          <input
            type="radio"
            name="evaluate"
            id="evaluate"
            className="flex items-center"
          />
          <label htmlFor="evaluate" className="flex items-center">
            ขอหลักฐานเพิ่มเติม
          </label>

          <input
            type="text"
            name="evaluate"
            className="border border-solid border-gray-300 w-7/12 py-2 flex items-center rounded-md focus:outline-none px-4"
            value="หลักฐาน1, หลักฐาน 2"
          />
        </div>
        <textarea
          name="recommend"
          id="recommend"
          row=""
          className="border border-gray-400 p-2 w-full rounded-md mb-10 mt-10 resize-y h-64 "
        ></textarea>
        <div className="flex flex-row justify-center gap-4 mt-10">
          <button className="flex justify-center items-center gap-3 text-[#367DB2] border border-solid border-[#9D9D9D] py-2 px-4 rounded-md BS cursor-pointer">
            <Save className="text-[#367DB2]" /> บันทึก
          </button>
          <button className="flex justify-center items-center gap-3 text-white bg-[#FF5B5C] border border-solid border-[#9D9D9D] py-2 px-4 rounded-md BS cursor-pointer">
            <RotateCw className="text-white" /> ยกเลิก
          </button>
          <button
            className="flex justify-center items-center gap-3 text-white cursor-pointer 
                   bg-[#39DA8A]
                border border-solid border-[#9D9D9D] py-2 px-4 rounded-md BS cursor-pointer"
          >
            <CircleCheck className="text-white" />
            ยืนยันส่งประเมิน
          </button>
        </div>
      </div>
    </>
  );
}

export default SaveResultIndividualReskChecker;
