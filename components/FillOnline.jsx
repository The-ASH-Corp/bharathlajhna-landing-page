import { useState } from 'react';
import Swal from 'sweetalert2';
import SectionDivision from "./ui/SectionDivision";

const FillOnline = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    fatherNameOrSpouse: '',
    mobile: '',
    email: '',
    addhaar: '',
    pan: '',
    occupation: '',
    annualIncome: '',
    address: '',

    previousMembershipDate: '',
    membershipNumber: '',
    shareToken: '',
    discontinuanceDate: '',
    discontinuanceReason: '',

    numberOfSharesRequired: '',
    amountRemittedTowardsShareCapitalEntranceFees: '',
    remittanceDate: '',
    modeOfRemittance: '',

    nomineeName: '',
    nomineeRelationship: '',


    witness1Date: '',
    witness1Mobile: '',
    witness1Address: '',
    witness2Date: '',
    witness2Mobile: '',
    witness2Address: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'radio' ? value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['name', 'age', 'gender', 'mobile', 'email', 'addhaar', 'pan', 'address'];
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

    console.log('Form Data Submitted:', formData);
  };

  const renderInput = (name, type, placeholder, extraProps = {}) => {
    if (type === "date") {
      return (
        <input

          type="text"
          id={name}
          placeholder={placeholder}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          className="w-full text-sm p-3 border border-black/10 bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
          {...extraProps}
        />
      );
    }
  
    return (
      <input

        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="w-full text-sm p-3 border border-black/10 bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
        {...extraProps}
      />
    );
  };

  return (
    <>
      <main className='w-full text-center'>
        <form onSubmit={handleSubmit} >
          <h1 className="font-poppins text-black text-base mb-4">
            Application for Admission as a member
          </h1>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              {renderInput('name', 'text', 'Name')}
              <div className="flex items-center gap-1">
                {renderInput('age', 'number', 'Age')}
                <div className="flex items-center gap-2 bg-[#F6F6F6] border  p-3">
                  <input type="radio" name="gender" id="male" value="male" onChange={handleInputChange} />
                  <label htmlFor="male" className="text-sm font-poppins">Male</label>
                  <input type="radio" name="gender" id="female" value="female" onChange={handleInputChange} />
                  <label htmlFor="female" className="text-sm font-poppins">Female</label>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {renderInput('fatherName', 'text', 'Father/Spouse Name')}
              {renderInput('mobile', 'text', 'Mobile Number')}
              {renderInput('email', 'email', 'Email ID')}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {renderInput('addhaar', 'number', 'Aadhaar Number')}
              {renderInput('pan', 'text', 'PAN Number')}
              {renderInput('occupation', 'text', 'Occupation')}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {renderInput('annualIncome', 'text', 'Annual Income (RS)')}
              {renderInput('address', 'text', 'Residence Address')}
            </div>

            <h3 className="font-poppins text-center text-xs text-para_color mt-2 mb-6">
              (Full Postal Address with name of main Village, Taluk and District)
            </h3>
          </div>

          <SectionDivision />

          <div className="mb-6">
            <h1 className="font-poppins text-black text-base mb-4 mt-6">
              Previous Membership Details
            </h1>
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3">
              {renderInput('previousMembershipDate', 'date', 'Previous Membership Date')}
              {renderInput('membershipNumber', 'text', 'Membership Number')}
              {renderInput('shareToken', 'text', 'Share Token')}
              {renderInput('discontinuanceDate', 'date', 'Discontinuance Date')}
              {renderInput('discontinuanceReason', 'text', 'Reason for Discontinuance')}
            </div>
          </div>

          <SectionDivision />

          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 mb-6 mt-6">
            {renderInput('numberOfShares', 'text', 'Number of Shares Required')}
            {renderInput('amountRemitted', 'text', 'Amount Remitted')}
            {renderInput('remittanceDate', 'date', 'Remittance Date')}
            {renderInput('modeOfRemittance', 'text', 'Mode of Remittance')}
          </div>

          <SectionDivision />

          <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 mt-6">
            {renderInput('nomineeName', 'text', 'Name of Nominee')}
            {renderInput('nomineeRelationship', 'text', 'Relationship')}
          </div>

          <p className="font-poppins text-sm text-para_color mt-2 mb-6">
            I declare that I am qualified to become a member of the society and meet the qualifications prescribed.
          </p>

          <SectionDivision />

          <div className="flex flex-col gap-4 ">
            <h1 className="font-poppins text-black text-base mb-4 mt-6">Witness Details</h1>
            {[1, 2].map((num) => (
              <div key={num} className="flex flex-col gap-3 sm:flex-row">
                {renderInput(`witness${num}Date`, 'date', `Witness ${num} Date`)}
                {renderInput(`witness${num}Mobile`, 'number', `Witness ${num} Mobile`)}
                {renderInput(`witness${num}Address`, 'text', `Witness ${num} Address`)}
              </div>
            ))}
          </div>

          <button type="submit" className="bg-primary_color text-white p-3 font-poppins text-sm mt-4 px-8">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default FillOnline;
