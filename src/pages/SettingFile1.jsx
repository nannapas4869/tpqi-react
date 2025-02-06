import React from 'react'

function Notification() {
  return (
    <>
      <div className="container-fluid px-6 mx-auto bg-white h-screen w-full">
        <p className="text-2xl font-semibold">
          ตั้งค่าไฟล์ที่สามารถนำเข้าสู่ระบบได้
        </p>

        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
                <div className="flex flex-col">
                    <label className="mt-5 mb-3">ประเภทไฟล์</label>
                    <input type="text" className="border border-solid border-gray-300 focus:outline:none rounded-md p-2 mt-5" />
                </div>
            </div>
            <div className="col-span-1">
            <div className="flex flex-col">
                    <label className="mt-5 mb-3">ขนาดไฟล์</label>
                    <input type="text" className="border border-solid border-gray-300 focus:outline:none rounded-md p-2 mt-5" />
                </div>
            </div>
            <div className="col-span-1"></div>
            <div className="flex justify-end items-center">
            <button className="bg-[#5A8DEE] text-white py-2 px-8 rounded-md"><i class="ri-add-line"></i> เพิ่ม</button>
            </div>
        </div>
        <table className="w-full border-collapse min-w-ma mt-10">
                  <thead>
                    <tr className="bg-[#5A8DEE] text-gray-700 border-b border-gray-300">
                      <th className="px-4 py-2 border-l border-gray-300 first:border-none text-left text-white">
                        ลำดับ
                      </th>
                      <th className="px-4 py-2 border-l border-gray-300 text-center text-white">
                        ประเภทไฟล์
                      </th>
                      <th className="w-[500px] px-4 py-2 border-l border-gray-300 text-center text-white">
                        ขนาดไฟล์
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
                         1
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                         .PDF
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                         10MB
                        </td>
                       
                        <td className="px-4 py-4 border-l border-gray-300 text-center">
                            <div className="flex flex-row justify-center gap-5">
                            <i className="ri-edit-box-line text-blue-500 text-xl"></i>
                            <i className="ri-delete-bin-line text-blue-500 text-xl"></i>
                            </div>
                        </td>
                      </tr>
                      <tr
                        
                      >
                        <td className="px-4 py-4 border-l border-gray-300 first:border-none text-center">
                         2
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                         .JPG
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                         1MB
                        </td>
                       
                        <td className="px-4 py-4 border-l border-gray-300 text-center">
                            <div className="flex flex-row justify-center gap-5">
                            <i className="ri-edit-box-line text-blue-500 text-xl"></i>
                            <i className="ri-delete-bin-line text-blue-500 text-xl"></i>
                            </div>
                        </td>
                      </tr>
                      <tr
                       
                      >
                        <td className="px-4 py-4 border-l border-gray-300 first:border-none text-center">
                         3
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                         .PNG
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                         150MB
                        </td>
                       
                        <td className="px-4 py-4 border-l border-gray-300 text-center">
                            <div className="flex flex-row justify-center gap-5">
                            <i className="ri-edit-box-line text-blue-500 text-xl"></i>
                            <i className="ri-delete-bin-line text-blue-500 text-xl"></i>
                            </div>
                        </td>
                      </tr>
                      <tr
                       
                      >
                        <td className="px-4 py-4 border-l border-gray-300 first:border-none text-center">
                         4
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                         GIF
                        </td>
                        <td className="px-4 py-4  border-l border-gray-300 text-center">
                         250MB
                        </td>
                       
                        <td className="px-4 py-4 border-l border-gray-300 text-center">
                            <div className="flex flex-row justify-center gap-5">
                            <i className="ri-edit-box-line text-blue-500 text-xl"></i>
                            <i className="ri-delete-bin-line text-blue-500 text-xl "></i>
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
  )
}

export default Notification