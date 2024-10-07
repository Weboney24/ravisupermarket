import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, message, Form, Input } from "antd";
import DefaultHeader from "../../component/DefaultHeader";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const contactInfo = [
    {
      legend: "Phone",
      icon: (
        <FaPhoneAlt className="text-5xl text-white p-3 rounded-full bg-primary" />
      ),
      content: [{ type: "phone", value: "096555 97039" }],
    },

    {
      legend: "Location",
      icon: (
        <FaLocationDot className="text-5xl text-white p-3 rounded-full bg-primary" />
      ),
      content: [
        {
          type: "location",
          value: " 279, Jawahar Bazaar Rd, Madavilagam, Karur, 639001",
        },
      ],
    },
  ];

  const onFinish = (values) => {
    console.log("Received values: ", values);
    message.success("Your message has been sent!");
    // Here you can handle the form submission (e.g., send to an API)
  };

  return (
    <section id="contact" className="default_header">
      <DefaultHeader
        title={"Contact Us"}
        subTitle={
          "We’d love to hear from you! Reach out to us with any questions, feedback, or inquiries."
        }
      />
      <div className="lg:w-full lg:flex lg:pb-20">
        <div className="lg:w-[50%] flex flex-col items-center">
          {contactInfo.map((info, index) => (
            <div className="pt-6 pl-4 pr-4" key={index}>
              <fieldset className="border border-gray-300 rounded-lg p-5 lg:w-[500px] w-[280px]">
                <legend className="text-sm font-primary_font font-semibold pl-2 pr-2 mt-6 text-gray-700">
                  {info.legend}
                </legend>
                <div className="flex items-center gap-3 mt-2">
                  {info.icon}
                  <div className="flex flex-col">
                    {info.content.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-lg font-pri_para font-bold hover:text-primary"
                      >
                        {item.type === "phone" ? (
                          <Link to={`tel:${item.value}`}>{item.value}</Link>
                        ) : item.type === "email" ? (
                          <Link to={`mailto:${item.value}`}>{item.value}</Link>
                        ) : (
                          <p>{item.value}</p>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </fieldset>
            </div>
          ))}
        </div>
        <div className="lg:w-[50%] bg-gray-200 rounded shadow-md flex justify-center pt-8">
          <Form
            name="contact"
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            style={{ width: "80%" }} // Set width for the form
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
            >
              <Input.TextArea rows={4} placeholder="Enter your message" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0528852798197!2d78.0773475737776!3d10.959377855795013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2fba64f3d3f3%3A0xec8d7df2ac24ce9b!2sRavis%20Super%20Market!5e0!3m2!1sen!2sin!4v1728281549522!5m2!1sen!2sin"
          className="w-full h-[400px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
