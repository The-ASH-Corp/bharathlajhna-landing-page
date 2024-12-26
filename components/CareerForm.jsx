'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Title from './ui/Title'
import RenderInput from './ui/RenderInput'
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import Swal from 'sweetalert2'
import { submitResume } from '@/app/actions'

const { Dragger } = Upload;

function CareerForm() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    mobileNo: '',
    address:'',
    whyShouldWeHireYou:'',
    file: undefined
  })
  
  const props = {
    name: 'file',
    multiple:false,
    maxCount:1,
    onChange(info) {
      const { status } = info.file;
      console.log({status});
      
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        setFormData((prevData) => ({
          ...prevData,
          file: info.file,
        }));
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    console.log({name,value,type});
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'radio' ? value : value,
    }));
  };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const requiredFields = ['name', 'mobileNo', 'email', 'address', 'file'];
          const missingFields = requiredFields.filter((field) => !formData[field]);
      
          if (missingFields.length > 0) {
            // alert(`Please fill in the following required fields:\n${missingFields.join(', ')}`);
      
            Swal.fire({
              icon: 'warning',
              title: 'Oops...',
              text: `Please fill in the following required fields:\n${missingFields.join(', ')}`,
              customClass:{
                popup:"swal-container",
                confirmButton:"swal-button-warning",
              }
            })
            return;
          }
            
            Swal.fire({
              title: 'Submitting...',
              text: 'Please wait while we process your submission.',
              icon: 'info',
              allowOutsideClick: false, // Prevent closing the modal on outside click
              showConfirmButton: false, // Hide the confirm button
              didOpen: () => {
                Swal.showLoading(); // Show loading spinner
              },
              customClass:{
                confirmButton:"swal-button-success",
                popup:"swal-container",
                
              }
            });
  
            console.log('Form Data Submitted:', formData);
      
            await submitResume(formData)
      
              // Close the loading alert
            Swal.close();
      
      
            Swal.fire({
              title: 'Success!',
              text: 'Your membership form has been submitted successfully.',
              icon: 'success',
              confirmButtonText: 'OK',
              customClass:{
                confirmButton:"swal-button-success",
                popup:"swal-container",
                
              }
              
            });
      
            
          } catch (error) {
            console.log({error});
      
             // Close the loading alert in case of an error
          Swal.close();
      
            Swal.fire({
              title: 'Error!',
              text: 'There was an issue submitting your form. Please try again.',
              icon: 'error',
              confirmButtonText: 'OK',
              customClass:{
                confirmButton:"swal-button-success",
                popup:"swal-container",
                
              }
            });
          }
  
     
    }


  return (
    <div >
        <Image
            alt="BLM"
            src="/assets/images/image84.png"
            width={100}
            height={100}
            priority={true}
            sizes="100vw"
            quality={85}
            className="w-full object-cover object-center"
        />

        <div className='mt-10'>
            <Title  icon={false}>
            Explore Exciting Career Opportunities with Us.
            </Title>
            <p className='text-sm my-3'>
            Are you passionate about making a difference? Do you thrive in a dynamic and collaborative environment? Join our exceptional team and embark on a rewarding journey that combines innovation, growth, and personal development.
            </p>
        </div>

        <div className='mt-10 '>
            <form action="" className='grid gap-3 md:grid-cols-2' onSubmit={handleSubmit}>
              {RenderInput("name","text","Full Name",handleInputChange)}

              {RenderInput("email","email","Email",handleInputChange)}
              {RenderInput("mobileNo","tel","Mobile Number",handleInputChange)}
              {RenderInput("address","text","Address",handleInputChange)}
              {RenderInput("whyShouldWeHireYou","textarea","why Should we hire you (Optional)",handleInputChange,"md:col-span-2")}

              <div className='md:col-span-2'>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single upload. Strictly prohibited from uploading company data or other
                  banned files.
                </p>
              </Dragger>
              </div>

              <div className='col-span-2  flex justify-center'>
              <button type="submit" className="bg-primary_color text-accent_color p-3 font-poppins text-sm mt-6 px-8">
                Submit
              </button>
              </div>

            </form>
        </div>
    </div>
  )
}

export default CareerForm