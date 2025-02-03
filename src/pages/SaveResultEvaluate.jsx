import React from "react";
import '../css/saveresult.css';
export default function SaveResultEvaluate() {
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
            <input type="checkbox" name="certificate" id="certificate" />
            <p className="text-[#212264]">เคยได้รับใบรับรองระดับก่อนหน้ามาแล้ว</p>
          </div>
        </div>
      </div>
    </>
  );
}
