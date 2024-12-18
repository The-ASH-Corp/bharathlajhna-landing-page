'use client'

import SectionDivision from "./ui/SectionDivision";
import { useState } from 'react';


const FillOnline = () => {

  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    age: '',
    gender: '',
    fatherName: '',
    mobile: '',
    email: '',
    addhaar: '',
    pan: '',
    occupation: '',
    annualIncome: '',
    address: '',

    // Previous Membership Details
    previousMembershipDate: '',
    membershipNumber: '',
    shareToken: '',
    discontinuanceDate: '',
    discontinuanceReason: '',

    // Share and Payment Details
    numberOfShares: '',
    amountRemitted: '',
    remittanceDate: '',
    modeOfRemittance: '',

    // Nominee Details
    nomineeName: '',
    nomineeRelationship: '',

    // Witness 1 Details
    witness1Date: '',
    witness1Mobile: '',
    witness1Address: '',

    // Witness 2 Details
    witness2Date: '',
    witness2Mobile: '',
    witness2Address: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    
    if (type === 'radio') {
      setFormData(prevData => ({
        ...prevData,
        gender: value
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const requiredFields = [
      'name', 'age', 'gender', 'mobile', 'email', 
      'addhaar', 'pan', 'address'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in the following required fields:\n${missingFields.join(', ')}`);
      return;
    }

    console.log('Form Data Submitted:', formData);
  };


  return (
    <>
      <main>
        <form>
          <h1 className="font-poppins text-black text-base mb-4">
            Application for Admission as a member
          </h1>

          {/* Form section - 1 */}

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
                className="sm:w-1/2 w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
              />
              <div className="flex items-center justify-center gap-1">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  onChange={handleInputChange}
                  className="w-full p-3 text-sm mr-1 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                />

                <div className="flex items-center gap-2 bg-[#F6F6F6] border border-[#00000099] p-3">
                  <input type="radio" name="gender" id="male" value="male" />
                  <label htmlFor="male" className="text-sm font-poppins ">
                    Male
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="female" className="text-sm font-poppins ">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                name="father_name"
                placeholder="Father Name/Spouse Name"
                onChange={handleInputChange}
                className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                onChange={handleInputChange}
                className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email id"
                onChange={handleInputChange}
                className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="number"
                name="addhaar"
                placeholder="Addhaar Number"
                onChange={handleInputChange}
                className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
              />
              <input
                type="text"
                name="pan"
                placeholder="PAN Number"
                onChange={handleInputChange}
                className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
              />
              <input
                type="text"
                name="occupation"
                placeholder="Occupation"
                onChange={handleInputChange}
                className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                name="annual_income"
                placeholder="Annual Income (RS)"
                onChange={handleInputChange}
                className="sm:w-1/3 w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
              />
              <input
                type="text"
                name="address"
                placeholder="Residence Address"
                onChange={handleInputChange}
                className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
              />
            </div>
            <h3 className="font-poppins text-center m-auto text-xs text-para_color mt-2 mb-6">
              &#40;Full Postal Address with name of main Village, Taluk and
              District&#41;
            </h3>
          </div>

          {/* form section - 1 end  */}

          <SectionDivision />

          {/* form section - 2 */}

          <div className="mb-6">
            <h1 className="font-poppins text-black text-base mb-4 mt-6">
              Whether an ex-member of the society if so
            </h1>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3">
                <input
                  type="date"
                  name="date"
                  placeholder="MM/DD/YYYY"
                  onChange={handleInputChange}
                  className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                />
                <input
                  type="text"
                  name="membership_number"
                  placeholder="Membership Number"
                  onChange={handleInputChange}
                  className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                />
                <input
                  type="text"
                  name="share_token"
                  placeholder="Share Token"
                  onChange={handleInputChange}
                  className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                />
                <input
                  type="date"
                  name="date"
                  placeholder="MM/DD/YYYY"
                  onChange={handleInputChange}
                  className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                />
                <input
                  type="text"
                  name="resone"
                  placeholder="Reasons For Discontinuance From Membership"
                  onChange={handleInputChange}
                  className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                />
              </div>

              <SectionDivision />

              <div className="flex flex-col gap-3 sm:grid sm:grid-cols-3">
                <input
                  type="text"
                  name="number_of_shares"
                  placeholder="Number of shares required"
                  onChange={handleInputChange}
                  className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                />
                <input
                  type="text"
                  name="amount-remitted"
                  placeholder="Amount Remitted towards Share Capital Entrance Fees"
                  onChange={handleInputChange}
                  className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                />
                <input
                  type="date"
                  name="date"
                  placeholder="MM/DD/YYYY"
                  onChange={handleInputChange}
                  className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                />
                <input
                  type="text"
                  name="mode_of_remittance"
                  placeholder="Mode of Remittance"
                  onChange={handleInputChange}
                  className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                />
              </div>

              <SectionDivision />

              <div className="flex flex-col gap-3 sm:grid sm:grid-cols-3">
                <input
                  type="text"
                  name="name_of_nominee"
                  placeholder="Name of Nominee"
                  onChange={handleInputChange}
                  className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                />
                <input
                  type="text"
                  name="relationship"
                  placeholder="Relationship"
                  onChange={handleInputChange}
                  className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                />
              </div>
                <p className="font-poppins text-sm text-para_color mt-2">
                  I declare that i am qualified to become a member of the
                  society and i possess all the qualifications prescribed for
                  membership of the society in the Multi State Co-operative
                  Societies Act & Rules 2002 and the by-laws of the Society.
                </p>
            </div>
          </div>

          {/* form section - 2 end */}
          <SectionDivision />

          {/* form section - 3 */}
          <div className="flex flex-col sm:items-start sm:justify-start">
            <h1 className="font-poppins text-black text-base mb-4 mt-6">
              Whether an ex-member of the society if so
            </h1>
            <div className="flex flex-col gap-4 sm:w-full">
              <div className="flex flex-col gap-3">
                <p className="font-poppins text-para_color text-xs">
                  Witness 1
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:w-full">
                  <input
                    type="date"
                    name="date"
                    placeholder="MM/DD/YYYY"
                    onChange={handleInputChange}
                    className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                  />
                  <input
                    type="number"
                    name="witness1_mobile"
                    placeholder="Mobile Number"
                    onChange={handleInputChange}
                    className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                  />
                  <input
                    type="text"
                    name="witness1_address"
                    placeholder="Address"
                    onChange={handleInputChange}
                    className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-poppins text-para_color text-xs">
                  Witness 2
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:w-full">
                  <input
                    type="date"
                    name="date"
                    placeholder="MM/DD/YYYY"
                    onChange={handleInputChange}
                    className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                  />
                  <input
                    type="number"
                    name="witness2_mobile"
                    placeholder="Mobile Number"
                    onChange={handleInputChange}
                    className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                  />
                  <input
                    type="text"
                    name="witness2_address"
                    placeholder="Address"
                    onChange={handleInputChange}
                    className="w-full text-sm p-3 border border-[#00000099] bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
            onClick={handleSubmit}
            className="bg-primary_color text-white p-3 font-poppins text-sm mt-4 px-8">
              Submit
            </button>
          </div>
        </form>
      </main>

      <main className="w-full mt-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <h1 className="font-allenoire text-xl lg:text-2xl">
            Eligibility Criteria to Become a Member
          </h1>
          <p className="font-poppins text-sm text-para_color lg:text-base">
            Any person who resides within the area of operation of the society,
            who genuinely needs the services provided by the society, and whose
            interests do not conflict with the interests of the society No
            person shall be admitted as a member of a multi-State cooperative
            society except the following, namely:
          </p>
          <div className="w-full ml-4 flex flex-col sm:flex-row sm:gap-8 gap-2 lg:gap-12 lg:mt-8">
            <ul className="list-disc font-poppins text-sm w-10/12 lg:w-7/12 flex flex-col gap-2 lg:text-base">
              <li>
                An individual competent to contract under Section 11 of the
                Indian Contract Act, 1872;
              </li>
              <li>
                An individual competent to contract under Section 11 of the
                Indian Contract Act, 1872;
              </li>
              <li>
                An individual competent to contract under Section 11 of the
                Indian Contract Act, 1872;
              </li>
            </ul>
            <ul className="list-disc font-poppins text-sm w-10/12 lg:w-7/12 flex flex-col gap-2 lg:text-base">
              <li>
                An individual competent to contract under Section 11 of the
                Indian Contract Act, 1872;
              </li>
              <li>
                An individual competent to contract under Section 11 of the
                Indian Contract Act, 1872;
              </li>
              <li>
                An individual competent to contract under Section 11 of the
                Indian Contract Act, 1872;
              </li>
            </ul>
          </div>
        </div>
      </main>

      <main className="w-full mt-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <h1 className="font-allenoire text-xl lg:text-2xl">Application</h1>
          <p className="font-poppins text-sm text-para_color lg:text-base">
            The application for membership of the society shall be submitted by
            the applicant to the Manager of the society in the prescribed form,
            accompanied by the admission fee of Rs.115 as per the bylaws, and at
            least one fully paid share shall be subscribed by the applicant at
            the time of submission of the application. The applications for
            membership in the society found complete in all respects shall be
            disposed of within a period of four months from the date of receipt
            of the application by the society. The same shall be communicated to
            the applicant within fifteen days of the decision by registered
            mail.
          </p>
          <div className="w-full flex flex-col gap-4 sm:flex-row mt-7">
            <div className="bg-[#F0F0F0] p-3 lg:p-6">
              <h1 className="font-allenoire text-xl lg:text-2xl">
                Cessation of Membership
              </h1>
              <p className="font-poppins text-sm text-para_color lg:text-base">
                The Membership Of The Cooperative Society May Cease In Case Of:
              </p>
              <ol className="list-decimal font-poppins text-sm ml-3 mt-3 lg:w-7/12">
                <li>
                  Resignation of a member duly approved by the board or death of
                  the member
                </li>
                <li>Cancellation of registration with the member society</li>
                <li>Cancellation of registration with the member society</li>
              </ol>
            </div>

            <div className="bg-[#F0F0F0] p-3 lg:p-6">
              <h1 className="font-allenoire text-xl lg:text-2xl">
                Cessation of Membership
              </h1>
              <p className="font-poppins text-sm text-para_color lg:text-base">
                The Membership Of The Cooperative Society May Cease In Case Of:
              </p>
              <ol className="list-decimal font-poppins text-sm ml-3 mt-3 lg:w-7/12">
                <li>
                  Resignation of a member duly approved by the board or death of
                  the member
                </li>
                <li>Cancellation of registration with the member society</li>
                <li>Cancellation of registration with the member society</li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FillOnline;

