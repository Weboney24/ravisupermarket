/* eslint-disable react/prop-types */

const DefaultHeader = ({ title, subTitle }) => {
  return (
    <>
      <h2 className="text-lg font-bold font-pri_head text-primary uppercase px-20 text-center">
        {title}
      </h2>
      <h2 className="text-xl font-bold font-pri_head uppercase pt-6 text-center">
        {subTitle}
      </h2>
      <div className="w-20 h-1 bg-primary mt-4 mb-10"></div>
      {/* <p className="text-center px-20 w-[800px] font-sec_para">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
        facilis tempora repudiandae quia cupiditate distinctio aliquid labore
        quidem dolorem!
      </p> */}
    </>
  );
};

export default DefaultHeader;
