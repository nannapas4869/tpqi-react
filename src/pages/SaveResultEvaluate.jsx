import React, { useState } from "react";
import "../css/saveresult.css";
import Select from "react-select";
import { Save, RotateCw, CircleCheck } from "lucide-react";
import "remixicon/fonts/remixicon.css";
import Image from "../assets/images/image.png";
const options = [
  { value: "แม่บ้าน", label: "แม่บ้าน" },
  { value: "เกษตรกร", label: "เกษตรกร" },
  { value: "คนขับรถ", label: "คนขับรถ" },
];
export default function SaveResultEvaluate() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const handleConfirm = () => {
    if (selectedOption) {
      setUploadedFiles((prev) => {
        const optionKey = selectedOption.value;
        const existingUploads = prev[optionKey] || [];
        const nextImageNumber = existingUploads.length + 1; // Increment image number

        return {
          ...prev,
          [optionKey]: [
            ...existingUploads,
            `${selectedOption.label} - รูปภาพ${nextImageNumber}.png`,
          ],
        };
      });

      setSelectedOption(null); // Reset selection
      setIsOpen(false); // Close modal
    }
  };

  return (
    <>
      <div className="container-fluid mx-auto px-8 mt-8">
        <div className="flex flex-row justify-between">
          <p className="text-xl font-light text-[#212264]">
            บันทึกผลการประเมิน (รายบุคคล)
          </p>
          <div className="flex flex-row gap-3">
            <p className="text-sm font-normal text-[#212264]">หน้าแรก</p>
            <p className="text-sm font-normal text-[#212264]">-</p>
            <p className="text-sm font-normal text-[#212264]">ประเมินผล</p>
            <p className="text-sm font-normal text-[#212264]">-</p>
            <p className="text-sm font-normal text-[#212264]">
              รายชื่อผู้เข้ารับการประเมิน
            </p>
            <p className="text-sm font-normal text-[#212264]">-</p>
            <p className="text-sm font-normal text-[#FF3B30]">
              บันทึกผลการประเมิน
            </p>
          </div>
        </div>
        <div className="bg-white mt-8 w-full h-fit px-6 py-8 rounded-md">
          <p className="text-2xl text-[#212264] font-bold">
            สาขาวิชาชีพบริการสุขภาพ อาชีพผู้ดูแลเด็ก ระดับ 3
          </p>
          <hr className="mt-8 text-gray-200 mb-5" />
          <p className="text-xl font-bold text-[#212264]">
            ข้อมูลผู้เข้ารับการประเมิน
          </p>
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
                  <p>จำนวนประสบการณ์ (ณ วันที่สมัคร) : </p>&nbsp;
                  <input
                    id="text-input"
                    type="text"
                    className="w-10 rounded-sm border border-solid border-[#ccc] focus:outline-none"
                  />
                  <p>&nbsp; ปี</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-5 mt-14">
            <input
              type="checkbox"
              name="certificate"
              id="certificate"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p className="text-[#212264]">
              เคยได้รับใบรับรองระดับก่อนหน้ามาแล้ว
            </p>
          </div>
          <div className="grid grid-cols-7 gap-2 mt-10">
            <p className="text-xl font-bold text-[#212264]">
              สาขาวิชาชีพที่รับรอง
            </p>
            <div className="col-span-5">
              <Select
                id="qualification"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="--กรุณาเลือก--"
                isDisabled={!isChecked}
              />
            </div>
          </div>
          <div className="w-[390px] flex justify-end mt-5">
            <button
              onClick={() => setIsOpen(true)}
              className={` cursor-pointer px-6 py-3  rounded-md ${
                isChecked ? "bg-[#5A8DEE] text-white" : "bg-gray-300"
              }`}
              disabled={!isChecked}
            >
              อัปโหลดไฟล์
            </button>
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                <div className="bg-white rounded-lg shadow-lg w-6/12 h-fit">
                  <div className="bg-[#182952] w-full h-14 BR-save text-white p-4 text-xl">
                    อัพโหลดใบประกาศ
                  </div>
                  <div className="container mx-auto px-4 mt-5">
                    <div className="w-full h-64 border border-solid border-[#688CB4] rounded-sm flex justify-center items-center">
                      <i className="ri-image-ai-line text-5xl"></i>
                    </div>
                  </div>
                  {/* Close Button */}
                  <div className="container mx-auto px-4 mt-5">
              {selectedOption ? (
                <p className="text-lg font-semibold text-[#212264]">
                  กำลังเพิ่ม: {selectedOption.label}
                </p>
              ) : (
                <p className="text-gray-500 text-center">กรุณาเลือกตัวเลือก</p>
              )}
            </div>
            <div className="mt-6 w-full max-w-md">
        {uploadedFiles.length > 0 && (
          <div className="text-[#367DB2] text-lg font-semibold mb-2">
            อัปโหลดสำเร็จ
          </div>
        )}
        {uploadedFiles.map((file) => (
          <div key={file.id} className="flex items-center gap-4 mt-2 p-2 rounded-md bg-white shadow">
            <p className="text-lg">{file.text}</p>
          </div>
        ))}
      </div>
            {/* Buttons */}
            <div className="mt-4 flex justify-center py-2 px-4 gap-5">
              <button
                onClick={handleConfirm}
                className={`px-6 py-3 rounded-md ${
                  selectedOption ? "bg-[#367DB2] text-white" : "bg-gray-300 cursor-not-allowed"
                }`}
                disabled={!selectedOption}
              >
                ตกลง
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
          </div>
          <div className="mt-6 w-full max-w-md">
        {Object.keys(uploadedFiles).length > 0 && (
          <div className="text-[#367DB2] text-lg font-semibold mb-2">
            อัปโหลดสำเร็จ
          </div>
        )}
        {Object.entries(uploadedFiles).map(([key, files]) =>
          Array.isArray(files) && files.map((file, index) => (
            <div key={`${key}-${index}`} className="flex items-center gap-4 mt-2 p-2 rounded-md bg-white shadow">
              <p className="text-lg">{file}</p>
            </div>
          ))
        )}
      </div>
          <hr className="mt-8 text-gray-200 mb-5" />
          <p className="text-xl font-bold text-[#212264]">
            หลักฐานการเทียบโอนประสบการณ์ทำงาน
          </p>
          <table className="w-full border-collapse min-w-max">
            <thead>
              <tr className="bg-[#5A8DEE] text-gray-700 border-b border-gray-300">
                <th className="px-4 py-2 border-l border-gray-300 first:border-none text-left text-white">
                  ลำดับ
                </th>
                <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                  แนบหลักฐาน
                </th>
                <th className="w-[500px] px-4 py-2 border-l border-gray-300 text-center text-white">
                  ประเภทหลักฐาน
                </th>
                <th className="w-[500px] px-4 py-2 border-l border-gray-300 text-center text-white">
                  หน่วยสมรรถนะ (UOC/EOC)
                </th>
              </tr>
            </thead>
          </table>
          <div className="flex justify-center items-center mt-6 text-xl">
            ยังไม่มีหลักฐานแนบไฟล์
          </div>
          <div className="flex flex-row gap-4 items-center mb-10">
            <p className="text-xl font-bold text-[#212264]">
              แนบหลักฐานเพิ่มเติม
            </p>
            <button
              className={` cursor-pointer px-6 py-3  rounded-md ${
                isChecked ? "bg-[#5A8DEE] text-white" : "bg-gray-300"
              }`}
              disabled={!isChecked}
            >
              อัปโหลดไฟล์
            </button>
          </div>
          <hr className="mt-8 text-gray-200 mb-10" />
          <div className="flex flex-row justify-center gap-4">
            <button className="flex justify-center items-center gap-3 text-[#367DB2] border border-solid border-[#9D9D9D] py-2 px-4 rounded-md BS cursor-pointer">
              <Save className="text-[#367DB2]" /> บันทึก
            </button>
            <button className="flex justify-center items-center gap-3 text-white bg-[#FF5B5C] border border-solid border-[#9D9D9D] py-2 px-4 rounded-md BS cursor-pointer">
              <RotateCw className="text-white" /> ยกเลิก
            </button>
            <button
              className={`flex justify-center items-center gap-3 text-white cursor-pointer  ${
                isChecked ? "bg-[#39DA8A]" : "bg-gray-300 text-white"
              } border border-solid border-[#9D9D9D] py-2 px-4 rounded-md BS cursor-pointer"><Save className="text-[#367DB2]`}
            >
              <CircleCheck
                className={`${isChecked ? "text-white" : "text-white"}`}
              />{" "}
              ยืนยันส่งประเมิน
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
