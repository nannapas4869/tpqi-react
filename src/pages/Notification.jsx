import React from "react";
import correct from "../assets/images/correct.png";
import miss from "../assets/images/miss.png"
function SettingFile() {
  return (
    <>
      <div className="container-fluid px-6 mx-auto bg-white h-screen w-full">
        <p className="text-2xl font-semibold">
          ตั้งค่าข้อความแจ้งเตือน
        </p>

    
        <table className="w-full border-collapse min-w-ma mt-10">
                  <thead>
                    <tr className="bg-[#5A8DEE] text-gray-700 border-b border-gray-300">
                      <th className="px-4 py-2 border-l border-gray-300 first:border-none text-left text-white">
                        เหตุการณ์
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                        ช่องทางได้รับ
                      </th>
                      <th className="w-[500px] px-4 py-2 border-l border-gray-300 text-center text-white">
                        สถานะ
                      </th>
                      <th className="w-[500px] px-4 py-2 border-l border-gray-300 text-center text-white">
                        แอคชั่น
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                   
                      <tr
                       
                      >
                        <td className="px-4 py-4 border-l border-gray-300 first:border-none text-center">
                        เจ้าหน้าที่สอบ ขอเอกสารเพิ่มเติม
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                        ผู้เข้ารับการประเมิน (Email)
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                         <img src={correct} alt="correct" />
                        </td>
                       
                        <td className="px-4 py-4 border-l border-gray-300 text-center">
                            <div className="flex flex-row justify-center gap-5">
                            <i className="ri-edit-box-line text-blue-500 text-xl"></i>
                            </div>
                        </td>
                      </tr>
                      <tr
                        
                      >
                        <td className="px-4 py-4 border-l border-gray-300 first:border-none text-center">
                        แจ้งข้อมมูลการเข้าใช้งาน
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                        ผู้เข้ารับการประเมิน (Email)
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                        <img src={correct} alt="correct" />
                        </td>
                       
                        <td className="px-4 py-4 border-l border-gray-300 text-center">
                            <div className="flex flex-row justify-center gap-5">
                            <i className="ri-edit-box-line text-blue-500 text-xl"></i>
                            </div>
                        </td>
                      </tr>
                      <tr
                       
                      >
                        <td className="px-4 py-4 border-l border-gray-300 first:border-none text-center">
                        แจ้งข้อมมูลการเข้าใช้งาน
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                        เจ้าหน้าที่สอบ (Email)
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                        <img src={miss} alt="miss" />
                        </td>
                       
                        <td className="px-4 py-4 border-l border-gray-300 text-center">
                            <div className="flex flex-row justify-center gap-5">
                            <i className="ri-edit-box-line text-blue-500 text-xl"></i>
                            </div>
                        </td>
                      </tr>
                  </tbody>
                </table>
                <div className="flex flex-row justify-between">
              <p className="px-4 text-xl mt-10">ทั้งหมด <span className="text-[#CC383D]">4</span> รายการ</p>
              <div className="flex flex-row gap-5 mt-10">
                <p className="flex items-center">ก่อนหน้า</p>
                <div className="w-8 h-10 bg-[#5A8DEE] flex justify-center items-center text-white mt-3 rounded-md mb-2">1</div>
                <p className="flex items-center">ถัดไป</p>
              </div>
            </div>
      </div>
    </>
  );
}

export default SettingFile;
