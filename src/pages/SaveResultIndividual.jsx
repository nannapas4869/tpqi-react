import React, { useState } from "react";
import "../css/saveresult.css";
import Select from "react-select";
import { Save, RotateCw, CircleCheck } from "lucide-react";
import "remixicon/fonts/remixicon.css";
import Image from "../assets/images/image.png";
import RightArrow from "../assets/images/right_arrow.png";
import UnderArrow from "../assets/images/under_arrow.png";
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
  const [uploadedTexts, setUploadedTexts] = useState([]);
  const [uploadCount, setUploadCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileDescription, setFileDescription] = useState("");
  const handleUpload = () => {
    setIsOpen(true);
  };
  const handleUpload2 = () => {
    setIsOpen2(true);
  };
  const handleUpload3 = () => {
    setIsOpen3(true);
  };

  const handleConfirm = () => {
    const newText = `${selectedOption.value} รูปภาพ ${uploadCount}.png`; // ข้อความที่แสดง
    setUploadedTexts((prevTexts) => [...prevTexts, newText]); // เพิ่มลงไปใน Array
    setUploadCount(uploadCount + 1); // เพิ่มเลขไฟล์
    setIsOpen(false); // ปิด Modal
  };

  const handleSelectChange = (selected) => {
    setSelectedOption(selected); // อัปเดตค่า select
  };
  const proofOptions = [
    { value: "1. หน้าสือรับรองการทำงาน", label: "1. หน้าสือรับรองการทำงาน" },
    { value: "2. ใบกำหนดหน้าที่งาน", label: "2. ใบกำหนดหน้าที่งาน" },
    { value: "3. ใบประกาศนียบัตร", label: "3. ใบประกาศนียบัตร" },
    { value: "4. วุฒิบัตร", label: "4. วุฒิบัตร" },
    { value: "5. วีดีโอการปฏิบัติงาน", label: "5. วีดีโอการปฏิบัติงาน" },
    { value: "6. ผลงานจากการปฏิบัติงาน", label: "6. ผลงานจากการปฏิบัติงาน" },
    {
      value: "7. ภาพถ่ายผลงานหรือชิ้นงาน",
      label: "7. ภาพถ่ายผลงานหรือชิ้นงาน",
    },
    { value: "8. รางวัลหรือเกียรติบัตร", label: "8. รางวัลหรือเกียรติบัตร" },
    { value: "9. ผลงานทางวิชาการ", label: "9. ผลงานทางวิชาการ" },
    { value: "10. ผลงานการเป็นวิทยากร", label: "10. ผลงานการเป็นวิทยากร" },
    { value: "11. ผลงานใน Social Media", label: "11. ผลงานใน Social Media" },
    {
      value: "12. ข้อคิดเห็นจากบุคคลที่ 3",
      label: "12. ข้อคิดเห็นจากบุคคลที่ 3",
    },
    { value: "13. หลักฐานอื่น ๆ", label: "13. หลักฐานอื่น ๆ" },
  ];
  const handleConfirm2 = () => {
    const newFile = {
      id: uploadedFiles.length + 1,
      name: `ใบประกาศนียบัตร ${uploadedFiles.length + 1}.jpg`,
      description: fileDescription,
      proofType: null, // ค่าประเภทหลักฐาน (ให้ผู้ใช้เลือก)
    };

    setUploadedFiles([...uploadedFiles, newFile]); // เพิ่มไฟล์ใหม่
    setFileDescription(""); // ล้างคำอธิบาย
    setIsOpen2(false); // ปิด Modal
  };
  const handleSelectChange2 = (selectedOption, fileId) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === fileId ? { ...file, proofType: selectedOption } : file
      )
    );
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
                onChange={handleSelectChange}
                options={options}
                placeholder="--กรุณาเลือก--"
                isDisabled={!isChecked}
              />
            </div>
          </div>
          <div className="w-[390px] flex justify-end mt-5">
            <button
              onClick={handleUpload}
              className={` cursor-pointer px-6 py-3  rounded-md ${
                isChecked ? "bg-[#5A8DEE] text-white" : "bg-gray-300"
              }`}
              disabled={!isChecked}
            >
              อัปโหลดไฟล์
            </button>
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="bg-white rounded-lg shadow-lg w-6/12 h-fit ">
                  <div className="bg-[#182952] w-full h-14 BR-save text-white p-4 text-xl">
                    อัพโหลดใบประกาศ
                  </div>
                  <div className="container mx-auto px-4 mt-5">
                    <div className="w-full h-64 border border-solid border-[#688CB4] rounded-sm flex justify-center items-center">
                      <i className="ri-image-ai-line text-5xl"></i>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center py-2 px-4 gap-5">
                    <button onClick={handleConfirm}>ตกลง</button>
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
          {uploadedTexts.map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mt-2 p-2 rounded-md bg-white shadow"
            >
              <p className="text-lg">{text}</p>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 text-lg font-bold"
              >
                ❌
              </button>
            </div>
          ))}
          <hr className="mt-8 text-gray-200 mb-5" />
          <p className="text-xl font-bold text-[#212264]">
            หลักฐานการเทียบโอนประสบการณ์ทำงาน
          </p>
          <table className="w-full border-collapse min-w-max mt-8">
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
            <tbody>
              {uploadedFiles.map((file, index) => (
                <tr key={file.id} className="border-b border-gray-300">
                  <td className="px-4 py-2 border-l border-gray-300 text-center">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border-l border-gray-300 text-center">
                    <p>{file.name}</p>
                    <p className="text-gray-500">
                      คำอธิบายไฟล์: {file.description}
                    </p>
                  </td>
                  <td className="px-4 py-2 border-l border-gray-300 text-center">
                    <Select
                      isMulti
                      isClearable
                      value={file.proofType}
                      onChange={(selectedOption) =>
                        handleSelectChange2(selectedOption, file.id)
                      }
                      options={proofOptions}
                      placeholder="--เลือกประเภทหลักฐาน--"
                      className="z-1"
                    />
                  </td>
                  <td className="px-4 py-2 border-l border-gray-300 text-center border-r">
                    <button
                      className="px-4 py-2 bg-[#5A8DEE] text-white rounded-md"
                      onClick={handleUpload3}
                    >
                      เลือกหน่วยสมรรถนะ
                    </button>
                    {isOpen3 && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                        <div className="bg-white rounded-lg shadow-lg w-6/12 h-fit ">
                          <div className="bg-[#5A8DEE] w-full h-14 BR-save text-white p-4 text-xl">
                            หน่วยสมรรถนะ (UOC/EOC/PC)
                          </div>
                          <div className="container mx-auto px-6 mt-5">
                            <p className="font-bold font-lg text-[#32436F] text-left">
                              เลือกหน่วยสมรรถนะ :
                            </p>
                            <div className="flex flex-row gap-4 mt-6">
                              <img src={RightArrow} alt="RightArrow" />
                              <input
                                type="checkbox"
                                name="checkbox"
                                id="checkbox"
                              />
                              <p className="font-light text-lg">
                                10105 เฝ้าระวัง
                                และรายงานผลการดูแลกิจวัตรประจำวันของเด็ก
                              </p>
                            </div>
                            <div className="flex flex-row gap-4 mt-6">
                              <img src={RightArrow} alt="RightArrow" />
                              <input
                                type="checkbox"
                                name="checkbox"
                                id="checkbox"
                              />
                              <p className="font-light text-lg">
                                10303 เฝ้าระวัง และรายงานผลกพัฒนาการเด็ก
                                ด้านจิตใจ-อารมณ์
                              </p>
                            </div>
                            <div className="flex flex-row gap-4 mt-6">
                              <img src={RightArrow} alt="RightArrow" />
                              <input
                                type="checkbox"
                                name="checkbox"
                                id="checkbox"
                              />
                              <p className="font-light text-lg">
                                10404 เฝ้าระวังพัฒนาการเด็ก ด้านสังคม
                              </p>
                            </div>
                            <div className="flex flex-row gap-4 mt-6">
                              <img src={RightArrow} alt="RightArrow" />
                              <input
                                type="checkbox"
                                name="checkbox"
                                id="checkbox"
                              />
                              <p className="font-light text-lg">
                                10504 เฝ้าระวัง และรายงานผลพัฒนาการเด็ก
                                ด้านสติปัญญา
                              </p>
                            </div>
                            <div className="flex flex-row gap-4 mt-6">
                              <img src={UnderArrow} alt="UnderArrow" />
                              <input
                                type="checkbox"
                                name="checkbox"
                                id="checkbox"
                                checked
                              />
                              <p className="font-light text-lg">
                                10603 เฝ้าระวัง
                                และรายงานผลในการจัดเตรียมสิ่งของจำพวกผ้า
                                ของเล่นและความปลอดภัย
                              </p>
                            </div>
                            <div className="container mx-auto px-6 mt-6">
                              <div className="flex flex-row gap-3">
                                <img src={UnderArrow} alt="UnderArrow" />
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  id="checkbox"
                                  checked
                                />
                                <p className="font-light text-lg">
                                  EOC รายการที่ 1
                                </p>
                              </div>
                              <div className="container mx-auto px-14 mt-4">
                                <div className="flex flex-row gap-3">
                                  <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="checkbox"
                                    checked
                                  />
                                  <p className="font-light text-lg">
                                    PC รายการที่ 1
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-row gap-3 mt-5">
                                <img src={UnderArrow} alt="UnderArrow" />
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  id="checkbox"
                                  checked
                                />
                                <p className="font-light text-lg">
                                  EOC รายการที่ 2
                                </p>
                              </div>
                            </div>
                          </div>
                          <p className="text-lg font-semibold text-[#CC383D] text-left mt-6 px-6">หมายเหตุ: <span className="text-[#32436F]">สัญลักษณ์ Remark (<span className="text-[#11BB1D]">*</span>) คือ หน่วยสมรรถนะที่ท่านเลือกก่อนหน้ามาแล้ว</span></p>
                          <div className="mt-4 flex justify-center py-2 px-4 gap-5">
                            <button onClick={handleConfirm}>ตกลง</button>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isOpen2 && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="bg-white rounded-lg shadow-lg w-6/12 h-fit">
                <div className="bg-[#182952] w-full h-14 BR-save text-white p-4 text-xl">
                  อัพโหลดใบประกาศ
                </div>
                <div className="container-fluid mx-auto px-4 mt-5">
                  <textarea
                    value={fileDescription}
                    onChange={(e) => setFileDescription(e.target.value)}
                    placeholder="กรอกคำอธิบายไฟล์..."
                    className="border p-2 rounded-md w-full mt-4"
                  />
                </div>

                <div className="container mx-auto px-4 mt-5">
                  <div className="w-full h-64 border border-solid border-[#688CB4] rounded-sm flex justify-center items-center">
                    <i className="ri-image-ai-line text-5xl"></i>
                  </div>
                </div>

                <div className="mt-4 flex justify-center py-2 px-4 gap-5">
                  <button onClick={handleConfirm2}>ตกลง</button>
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
          <div className="flex flex-row gap-4 items-center mb-10 mt-16">
            <p className="text-xl font-bold text-[#212264]">
              แนบหลักฐานเพิ่มเติม
            </p>
            <button
              className={` cursor-pointer px-6 py-3  rounded-md ${
                isChecked ? "bg-[#5A8DEE] text-white" : "bg-gray-300"
              }`}
              disabled={!isChecked}
              onClick={handleUpload2}
            >
              อัปโหลดไฟล์
            </button>
          </div>
          <hr className="mt-8 text-gray-200 mb-36" />
          <p className="text-xl font-bold text-[#212264] mb-5">
            รายการหน่วยสมรรถนะ (UOC / EOC) ที่ยังไม่ถูกเลือก
          </p>
          <div className="container-fluid mx-auto px-4">
            <p className="text-base font-semibold">
              สาขาวิชาชีพ:{" "}
              <span className="font-light">
                สาขาิชาชีพบริการสุขภาพ อาชีพผู้ดูแลเด็ก ระดับ 3
              </span>
            </p>
            <p className="text-base font-semibold">เลือกหน่วยสมรรถนะ : </p>
            <p className="text-base font-light">
              {" "}
              -10105 เฝ้าระวัง และรายงานผลกาดูแลกิจวัตรประจำวันของเด็ก
            </p>
            <p className="text-base font-light mb-32">
              -10404 เฝ้าระวังพัฒนาการเด็ก ด้านสังคม
            </p>
            <p className="text-base font-light mb-7 text-red-500">
              ***ผู้เข้าสอบต้องเลือกหน่วยสมรรถนะทั้งหมด***
            </p>
            <hr className="mt-8 text-gray-200 mb-20" />
          </div>
          <div className="flex flex-row justify-center gap-4 ">
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
