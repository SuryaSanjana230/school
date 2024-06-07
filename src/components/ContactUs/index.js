import React from 'react';
import { Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  Name: yup.string().required('Name is required'),
  Email: yup.string().email('Invalid email format').required('Email is required'),
  PhoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone Number must be a number')
    .length(10, 'Phone Number must be exactly 10 digits')
    .required('Phone Number is required'),
  Subject: yup.string().required('Subject is required'),
  Message: yup.string().required('Message is required'),
});

export const ContactUs = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const { TextArea } = Input;
  return (
    <>
      <p className="contactstyle1">Contact Us</p>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p className="contactustext1">
              Have questions or need more information? Reach out to Oasis Preschool through our contact details below, or fill out our inquiry form, and we'll be happy to assist you!
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="andtleft">
              <label>Name</label>
              <Controller
                control={control}
                name="Name"
                
                render={({ field }) => <Input {...field} />}
              />
              {errors.Name && <p className="error" id="red">{errors.Name.message}</p>}
              </div>
              <div className="andtleft">
              <label>Email</label>
              <Controller
                control={control}
                name="Email"
                render={({ field }) => <Input {...field} />}
              />
              {errors.Email && <p className="error" id="red">{errors.Email.message}</p>}
              </div>
              <div className="andtleft">
              <label>Phone Number</label>
              <Controller
                control={control}
                name="PhoneNumber"
                render={({ field }) => <Input {...field} />}
              />
              {errors.PhoneNumber && <p className="error" id="red">{errors.PhoneNumber.message}</p>}
</div>
<div className="andtleft">
              <label>Subject</label>
              <Controller
                control={control}
                name="Subject"
                render={({ field }) => <Input {...field} />}
              />
              {errors.Subject && <p className="error" id="red">{errors.Subject.message}</p>}
</div>
<div className="andtleft">
              <label>Message</label>
              <Controller
                control={control}
                name="Message"
                render={({ field }) => <TextArea rows={4} {...field} />}
              />
              {errors.Message && <p className="error" id="red">{errors.Message.message}</p>}
</div>
              <button type="submit" className="contactbutton">Submit</button>
            </form>
          </div>

          <div className="col-6">
            <img src="./images/designcon.jpg" alt="" className="contactrect" />
            <p className="text1">Contact Information</p>
            <img src="./images/location.jpg" alt="" className="icons1" />
            <p className="text2">
              Kurmannapalem, Visakhapatnam, <br />
              Andhra Pradesh 530046
            </p>
            <img src="./images/phone.jpg" alt="" className="icons2" />
            <p className="text3">+91 7834562321</p>
            <img src="./images/email.jpg" alt="" className="icons3" />
            <p className="text4">oasispreschool@gmail.com</p>
          </div>
        </div>
      </div>
      <img src="./images/map.jpg" alt="" className="map" />
    </>
  );
};
