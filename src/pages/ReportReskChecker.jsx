import React from "react";
import Select from "react-select";
import { useState } from "react";
import RA from "../assets/images/right_arrow.png";
import UA from "../assets/images/under_arrow.png";
const options = [
  { value: "สมดี แซ่ตั้ง", label: "สมดี แซ่ตั้ง" },
  { value: "ปาราณีย์ เธียรภาณุเดช", label: "ปารณีย์ เธียรภาณุเดช" },
  { value: "ป้อมแปลก จอมเกล้า", label: "ป้อมแปลก จอมเกล้า" },
];
function ReportReskChecker() {
  const [selectedOption, setSelectedOption] = useState(null);
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
            <p className="text-lg text-red-500">บันทึกผลการประเมิน</p>
          </div>
        </div>
        <div className="w-full bg-white h-fit mt-10 rounded-xl mb-10 py-6">
          <div className="container-fluid mx-auto px-8 mt-5 p-6">
            <p className="text-xl font-bold text-[#212264] ">
              สาขาวิชาชีพบริการสุขภาพ อาชีพผู้ดูแลเด็ก ระดับ 3
            </p>
            <hr className="text-gray-300 mt-8" />
            <p className="text-base font-semibold text-[#212264] mt-6">
              ข้อมูลผู้เข้ารับการประเมิน
            </p>
            <div className="flex justify-center mt-8">
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
          </div>
          <div className="container-fluid mx-auto px-8 mt-5 p-6">
            <p className="text-xl font-semibold text-[#212264] mt-6">
              บันทึกการประเมินผล
            </p>
            <div className="flex flex-row gap-3">
              <p className="text-xl font-semibold text-[#212264] mt-6">
                เลือกเจ้าหน้าที่สอบ
              </p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                className="mt-6 w-64"
              />
            </div>
            <hr className="text-gray-300 mt-8 mb-14" />
            <div className="flex flex-row gap-6">
              <p className="text-xl font-semibold text-[#212264]  ">
                แนบหลักฐานเพิ่มเติม
              </p>
              <button className="bg-[#5A8DEE] py-2 px-6 text-white rounded-md">
                อัปโหลดไฟล์
              </button>
            </div>
          </div>
          <div className="container-fluid mx-auto px-8 mt-5 p-6">
            <div className="flex flex-row gap-5">
              <p className="text-xl font-semibold text-[#212264]">
                เลือกผลการประเมิน
              </p>
              <input type="radio" name="evaluate" id="pass"  />
              <label htmlFor="pass" className="flex items-center text-xl">ผ่าน</label>
              <input id="notpass"type="radio" name="evaluate"  />
              <label htmlFor="notpass" className="flex items-center text-xl">ไม่ผ่าน</label>
            </div>
            <p className="text-xl font-semibold text-[#212264] mt-10">
                เลือก UOC ที่ผ่านเท่านั้น ถ้ากรณีผลประเมินไม่ผ่าน
            </p>
            <div className="flex flex-row gap-4 mt-8">
                <img src={RA} alt="RA" /> 
                <input type="checkbox"/>
                <p>10105 เฝ้าระวัง และรายงานผลการดูแลกิจวัตรประจำวันของเด็ก</p>
            </div>
            <div className="flex flex-row gap-4 mt-8">
                <img src={RA} alt="RA" /> 
                <input type="checkbox"/>
                <p>10303 เฝ้าระวัง และรายงานผลพัฒนาการเด็ก ด้านจิตใจ-อารมณ์</p>
            </div>
            <div className="flex flex-row gap-4 mt-8">
                <img src={RA} alt="RA" /> 
                <input type="checkbox"/>
                <p>10404 เฝ้าระวังพัฒนาการเด็ก ด้านสังคม</p>
            </div>
            <div className="flex flex-row gap-4 mt-8">
                <img src={RA} alt="RA" /> 
                <input type="checkbox"/>
                <p>10504 เฝ้าระวัง และรายงานผลพัฒนาการเด็ก ด้านสติปัญญา</p>
            </div>
            <div className="flex flex-row gap-4 mt-8">
                <img src={UA} alt="UA" /> 
                <input type="checkbox" checked/>
                <p>10603 เฝ้าระวัง และรายงานผลในการจัดเตรียมสิ่งของจำพวกผ้า ของเล่นและความปลอดภัย</p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-10">
            <button className="text-[#367DB2] BS py-2 px-6 rounded-md">บันทึก</button>
            <button className="bg-[#CC383D] text-white py-2 px-6 rounded-md">ยกเลิก</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportReskChecker;
